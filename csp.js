// const nonce = Buffer.from(crypto.randomUUID()).toString('base64')

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
    "'unsafe-inline'",
    "'unsafe-eval'",
    'https://maps.googleapis.com',
    'https://maps.gstatic.com',
    'https://*.googletagmanager.com',
  ],
  'child-src': ["'self'"],
  'style-src': ["'self'", 'https://fonts.googleapis.com', "'unsafe-inline'"],
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
    'https://maps.googleapis.com',
    'https://maps.gstatic.com',
    'https://*.googletagmanager.com',
    'https://*.google-analytics.com',
    'https://*.analytics.google.com',
  ],
}

module.exports = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(' ')}`
    }
    return ''
  })
  .join('; ')
