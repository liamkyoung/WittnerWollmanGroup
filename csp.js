const crypto = require('crypto')

// Generate nonce for inline scripts - this should be passed to templates
const nonce = Buffer.from(crypto.randomUUID()).toString('base64')

const policies = {
  'default-src': [
    "'self'",
    'https://raw.githubusercontent.com',
    'https://maps.googleapis.com',
    'https://maps.gstatic.com',
    'https://ww-group.nyc3.cdn.digitaloceanspaces.com',
  ],
  'script-src': [
    "'self'",
    // Remove unsafe-inline and unsafe-eval for better security
    // Use nonce or hash for required inline scripts
    `'nonce-${nonce}'`,
    'https://maps.googleapis.com',
    'https://maps.gstatic.com',
    'https://*.googletagmanager.com',
    // Allow specific script hashes if needed
    "'sha256-xyz123...'", // Replace with actual script hashes
  ],
  'child-src': ["'self'", 'blob:'],
  'style-src': [
    "'self'", 
    'https://fonts.googleapis.com', 
    `'nonce-${nonce}'`, // Use nonce for inline styles instead of unsafe-inline
    // "'unsafe-inline'" // Remove this for better security
  ],
  'img-src': [
    "'self'",
    'https://maps.googleapis.com',
    'https://maps.gstatic.com',
    'https://ww-group.nyc3.cdn.digitaloceanspaces.com',
    'https://*.googletagmanager.com',
    'https://*.google-analytics.com',
    'data:', // Allow data URIs if needed
  ],
  'font-src': ["'self'", 'https://fonts.gstatic.com'],
  'frame-src': ["'self'", 'https://www.youtube.com'],
  'connect-src': [
    "'self'",
    'data:',
    'https://maps.googleapis.com',
    'https://*.gstatic.com',
    'https://*.googletagmanager.com',
    'https://*.google-analytics.com',
    'https://*.analytics.google.com',
  ],
}

// Export both the CSP string and nonce for use in templates
const cspString = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(' ')}`
    }
    return ''
  })
  .join('; ')

module.exports = cspString

// Also export nonce for use in React components
module.exports.nonce = nonce
