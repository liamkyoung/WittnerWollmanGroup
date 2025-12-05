/* eslint simple-import-sort/imports: 0 */
/** @type {import('next').NextConfig} */
const path = require('path')
const { withPayload } = require('@payloadcms/next-payload')
// Destructure the CSP string (and nonce if you want it later)
const { csp: ContentSecurityPolicy /*, nonce: CSP_NONCE */ } = require('./csp')
const redirects = require('./redirects')

const prodCfg = withPayload(
  {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: [
        'localhost',
        process.env.NEXT_PUBLIC_SERVER_URL,
        process.env.NEXT_PUBLIC_S3_CDN_ENDPOINT,
      ]
        .filter(Boolean)
        .map(url => url.replace(/https?:\/\//, '')),
    },
    redirects,
    async headers() {
      const headers = []

      // Prevent search engines from indexing the site if it is not live
      if (!process.env.NEXT_PUBLIC_IS_LIVE) {
        headers.push({
          headers: [
            {
              key: 'X-Robots-Tag',
              value: 'noindex',
            },
          ],
          source: '/:path*',
        })
      }

      // Content Security Policy
      headers.push({
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy,
          },
        ],
      })

      return headers
    },
  },
  {
    // The second argument to `withPayload`
    // allows you to specify paths to your Payload dependencies
    // and configure the admin route to your Payload CMS.

    // Point to your Payload config (required)
    configPath: path.resolve(__dirname, process.env.PAYLOAD_CONFIG_PATH),

    // Set a custom Payload admin route (optional, default is `/admin`)
    adminRoute: '/admin',
  },
)

const devCfg = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      process.env.NEXT_PUBLIC_SERVER_URL,
      process.env.NEXT_PUBLIC_S3_CDN_ENDPOINT,
    ]
      .filter(Boolean)
      .map(url => url.replace(/https?:\/\//, '')),
  },
  redirects,
  async headers() {
    const headers = []

    // Prevent search engines from indexing the site if it is not live
    if (!process.env.NEXT_PUBLIC_IS_LIVE) {
      headers.push({
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
        source: '/:path*',
      })
    }

    // Content Security Policy
    headers.push({
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: ContentSecurityPolicy,
        },
      ],
    })

    return headers
  },
}

const nextConfig = process.env.NODE_ENV === 'production' ? prodCfg : devCfg

module.exports = nextConfig
