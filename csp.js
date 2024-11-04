const policies = {
  'default-src': [
    "'self'",
    'https://raw.githubusercontent.com',
    'https://maps.googleapis.com',
    'https://maps.gstatic.com',
  ],
  'script-src': [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    'https://maps.googleapis.com',
    'https://maps.gstatic.com',
  ],
  'child-src': ["'self'"],
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'img-src': [
    "'self'",
    'https://maps.googleapis.com',
    'https://maps.gstatic.com',
    'data:', // Allow data URIs if needed
  ],
  'font-src': ["'self'", 'https://fonts.gstatic.com'],
  'frame-src': ["'self'", 'https://www.youtube.com'],
  'connect-src': ["'self'", 'https://maps.googleapis.com', 'https://maps.gstatic.com'],
  'script-src-elem': ["'self'", 'https://www.googletagmanager.com'],
}

module.exports = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(' ')}`
    }
    return ''
  })
  .join('; ')
