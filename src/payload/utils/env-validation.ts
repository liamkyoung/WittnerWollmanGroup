/**
 * Environment Variable Validation
 * Validates required environment variables at startup
 */

interface EnvConfig {
  name: string
  required: boolean
  description: string
  validator?: (value: string) => boolean
  defaultValue?: string
}

const ENV_VARIABLES: EnvConfig[] = [
  // Database
  {
    name: 'DATABASE_URI',
    required: true,
    description: 'PostgreSQL database connection string',
    validator: value => value.startsWith('postgres://') || value.startsWith('postgresql://'),
  },

  // PayloadCMS
  {
    name: 'PAYLOAD_SECRET',
    required: true,
    description: 'PayloadCMS secret key (min 32 characters)',
    validator: value => value.length >= 32,
  },
  {
    name: 'PAYLOAD_PUBLIC_SERVER_URL',
    required: true,
    description: 'Public server URL',
    validator: value => value.startsWith('http://') || value.startsWith('https://'),
  },

  // Email Service (Resend)
  {
    name: 'PAYLOAD_PUBLIC_RESEND_API_KEY',
    required: false,
    description: 'Resend API key for email sending',
    validator: value => value.startsWith('re_'),
  },
  {
    name: 'PAYLOAD_PUBLIC_SENDING_EMAIL',
    required: false,
    description: 'Email address for sending emails',
    validator: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  },
  {
    name: 'PAYLOAD_PUBLIC_RECEIVING_EMAIL',
    required: false,
    description: 'Email address for receiving emails',
    validator: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  },

  // Cloud Storage (S3/DigitalOcean)
  {
    name: 'S3_ENDPOINT',
    required: false,
    description: 'S3-compatible storage endpoint',
    validator: value => value.startsWith('https://'),
  },
  {
    name: 'S3_ACCESS_KEY',
    required: false,
    description: 'S3 access key',
    validator: value => value.length >= 16,
  },
  {
    name: 'S3_SECRET_KEY',
    required: false,
    description: 'S3 secret key',
    validator: value => value.length >= 32,
  },
  {
    name: 'S3_BUCKET_NAME',
    required: false,
    description: 'S3 bucket name',
  },
  {
    name: 'S3_REGION',
    required: false,
    description: 'S3 region',
  },

  // Security
  {
    name: 'REVALIDATION_KEY',
    required: true,
    description: 'Secret key for cache revalidation (min 32 characters)',
    validator: value => value.length >= 32,
  },

  // SSL Configuration
  {
    name: 'NEXT_PUBLIC_CA_CERT',
    required: false,
    description: 'SSL CA certificate for database connection',
  },

  // Google Services (Optional)
  {
    name: 'GOOGLE_SERVICE_ACCOUNT_EMAIL',
    required: false,
    description: 'Google service account email',
    validator: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  },
  {
    name: 'GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY',
    required: false,
    description: 'Google service account private key',
    validator: value => value.includes('-----BEGIN PRIVATE KEY-----'),
  },
  {
    name: 'PAYLOAD_PUBLIC_GOOGLE_MAPS_KEY',
    required: false,
    description: 'Google maps api key',
  },
  {
    name: 'NEXT_PUBLIC_GOOGLE_MAPS_KEY',
    required: false,
    description: 'Google maps api key',
  },

  // Analytics & Tracking
  {
    name: 'NEXT_PUBLIC_GOOGLE_ANALYTICS_ID',
    required: false,
    description: 'Google Analytics tracking ID',
    validator: value => value.startsWith('G-') || value.startsWith('GA_'),
  },
  {
    name: 'NEXT_PUBLIC_POSTHOG_KEY',
    required: false,
    description: 'Posthog analytic tracking. Required for Prod.',
  },

  // Feature Flags
  {
    name: 'NEXT_PUBLIC_IS_LIVE',
    required: false,
    description: 'Whether the site is live (affects SEO indexing)',
    defaultValue: 'false',
  },
]

interface ValidationResult {
  valid: boolean
  errors: string[]
  warnings: string[]
  missingRequired: string[]
  insecureValues: string[]
}

/**
 * Validate all environment variables
 */
export function validateEnvironment(): ValidationResult {
  const result: ValidationResult = {
    valid: true,
    errors: [],
    warnings: [],
    missingRequired: [],
    insecureValues: [],
  }

  // Check each environment variable
  ENV_VARIABLES.forEach(config => {
    const value = process.env[config.name]

    // Check if required variable is missing
    if (config.required && !value) {
      result.missingRequired.push(config.name)
      result.errors.push(
        `Missing required environment variable: ${config.name} - ${config.description}`,
      )
      result.valid = false
      return
    }

    // Skip validation if value is not set and not required
    if (!value) {
      if (!config.required) {
        // Set default value if provided
        if (config.defaultValue) {
          process.env[config.name] = config.defaultValue
        }
      }
      return
    }

    // Run custom validator if provided
    if (config.validator && !config.validator(value)) {
      result.errors.push(`Invalid value for ${config.name}: ${config.description}`)
      result.valid = false
    }

    // Check for insecure values
    if (isInsecureValue(config.name, value)) {
      result.insecureValues.push(config.name)
      result.warnings.push(`Potentially insecure value detected for ${config.name}`)
    }
  })

  // Check for unexpected environment variables that might be secrets
  checkForUnexpectedSecrets(result)

  return result
}

/**
 * Check if environment variable value is insecure
 */
function isInsecureValue(name: string, value: string): boolean {
  // Check for common insecure patterns
  const insecurePatterns = [
    /^(password|secret|key)$/i, // Literal words
    /^(123|admin|test|demo)$/i, // Common weak values
    /^.{1,7}$/, // Too short for secrets
    /^(true|false|yes|no)$/i, // Boolean values for secrets
  ]

  // Skip boolean/flag variables
  if (name.includes('IS_') || name.includes('ENABLE_') || name.includes('DEBUG')) {
    return false
  }

  // Check if this should be a secret but has insecure value
  const isSecretVar =
    name.toLowerCase().includes('secret') ||
    name.toLowerCase().includes('key') ||
    name.toLowerCase().includes('password')

  if (isSecretVar) {
    return insecurePatterns.some(pattern => pattern.test(value))
  }

  return false
}

/**
 * Check for unexpected environment variables that might contain secrets
 */
function checkForUnexpectedSecrets(result: ValidationResult): void {
  const knownVars = new Set(ENV_VARIABLES.map(config => config.name))

  // Common Next.js and Node.js environment variables to ignore
  const commonVars = new Set([
    'NODE_ENV',
    'PORT',
    'PWD',
    'HOME',
    'PATH',
    'USER',
    'SHELL',
    'NEXT_RUNTIME',
    'NEXT_BUILD',
    'VERCEL',
    'VERCEL_URL',
    'VERCEL_ENV',
    'CI',
    'GITHUB_ACTIONS',
    'RUNNER_OS',
    'npm_package_name',
    'npm_config_cache',
  ])

  Object.keys(process.env).forEach(key => {
    // Skip known variables
    if (knownVars.has(key) || commonVars.has(key) || key.startsWith('npm_')) {
      return
    }

    // Check if it looks like a secret
    const lowerKey = key.toLowerCase()
    if (
      lowerKey.includes('secret') ||
      lowerKey.includes('key') ||
      lowerKey.includes('password') ||
      lowerKey.includes('token') ||
      lowerKey.includes('auth')
    ) {
      result.warnings.push(
        `Unexpected environment variable detected: ${key} - verify it's documented and secure`,
      )
    }
  })
}

/**
 * Print environment validation results
 */
export function printValidationResults(result: ValidationResult): void {
  console.log('\n🔒 Environment Variable Validation Results:') // eslint-disable-line no-console

  if (result.valid) {
    console.log('✅ All required environment variables are present and valid') // eslint-disable-line no-console
  } else {
    console.log('❌ Environment validation failed') // eslint-disable-line no-console
  }

  if (result.errors.length > 0) {
    console.log('\n🚨 Errors:') // eslint-disable-line no-console
    result.errors.forEach(error => console.log(`  • ${error}`)) // eslint-disable-line no-console
  }

  if (result.warnings.length > 0) {
    console.log('\n⚠️  Warnings:') // eslint-disable-line no-console
    result.warnings.forEach(warning => console.log(`  • ${warning}`)) // eslint-disable-line no-console
  }

  if (result.missingRequired.length > 0) {
    console.log('\n📝 Missing Required Variables:') // eslint-disable-line no-console
    result.missingRequired.forEach(name => {
      const config = ENV_VARIABLES.find(c => c.name === name)
      console.log(`  • ${name}: ${config?.description || 'No description'}`) // eslint-disable-line no-console
    })
  }

  if (result.insecureValues.length > 0) {
    console.log('\n🔓 Potentially Insecure Values:') // eslint-disable-line no-console
    result.insecureValues.forEach(name => console.log(`  • ${name}`)) // eslint-disable-line no-console
  }

  console.log('') // eslint-disable-line no-console
}

/**
 * Validate environment and exit if critical errors
 */
export function validateEnvironmentOrExit(): void {
  const result = validateEnvironment()
  printValidationResults(result)

  if (!result.valid) {
    console.error('❌ Environment validation failed. Application cannot start safely.') // eslint-disable-line no-console
    process.exit(1)
  }
}

// Export configuration for external use
export { ENV_VARIABLES }
