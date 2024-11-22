import { webpackBundler } from '@payloadcms/bundler-webpack'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'
import nestedDocs from '@payloadcms/plugin-nested-docs'
import redirects from '@payloadcms/plugin-redirects'
import seo from '@payloadcms/plugin-seo'
import type { GenerateTitle } from '@payloadcms/plugin-seo/types'
import { slateEditor } from '@payloadcms/richtext-slate'
import dotenv from 'dotenv'
// import fs from 'fs'
import path from 'path'
import { buildConfig } from 'payload/config'

import Categories from './collections/Categories'
import { CommunityResources } from './collections/CommunityResources'
import { Companies } from './collections/Companies'
import { InvolvementEvents } from './collections/InvolvementEvents'
import { InvolvementGroups } from './collections/InvolvementGroups'
// Custom Collections
import { Listings } from './collections/Listings'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Projects } from './collections/Projects'
import { Services } from './collections/Services'
import { Teammates } from './collections/Teammates'
import { Testimonials } from './collections/Testimonials'
import Users from './collections/Users'
import BeforeLogin from './components/BeforeLogin'
import { sendEmail } from './endpoints/sendEmail'
import { sendListingEmail } from './endpoints/sendListingEmail'
import { signUpNewsletter } from './endpoints/signUpNewsletter'
// import { seed } from './endpoints/seed'
import { Footer } from './globals/Footer'
import { Header } from './globals/Header'
import { Settings } from './globals/Settings'

const generateTitle: GenerateTitle = () => {
  return 'Wittner Wollman Group'
}

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
})

const isProduction = process.env.NODE_ENV === 'production'

// Used to store images in s3 bucket on digital ocean.
const storageAdapter = s3Adapter({
  config: {
    endpoint: process.env.S3_ENDPOINT,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_KEY,
    },
    region: process.env.S3_REGION,
  },
  bucket: process.env.S3_BUCKET_NAME,
  acl: 'public-read',
})

// const sslConfig =
//   process.env.NODE_ENV === 'production'
//     ? {
//         rejectUnauthorized: false,
//         ca: fs.readFileSync(path.resolve(__dirname, '../../ca-certificate.crt')).toString(),
//       }
//     : undefined

let plugins = [
  redirects({
    collections: ['pages', 'posts'],
  }),
  nestedDocs({
    collections: ['categories'],
  }),
  seo({
    collections: ['pages', 'posts', 'projects', 'listings', 'teammates', 'services'], // USED TO ADD "META" DETAILS
    generateTitle,
    uploadsCollection: 'media',
    tabbedUI: true,
  }),
]

if (isProduction) {
  plugins.push(
    cloudStorage({
      collections: {
        media: { adapter: storageAdapter },
      },
    }),
  )
}

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
      beforeLogin: [BeforeLogin],
    },
    webpack: config => ({
      ...config,
      mode: isProduction ? 'production' : 'development',
      resolve: {
        ...config.resolve,
        fallback: {
          fs: false, // Prevents bundling 'fs' in the frontend
          os: false, // Prevents bundling 'os' in the frontend
          util: false,
          crypto: require.resolve('crypto-browserify'),
          path: require.resolve('path-browserify'),
          stream: require.resolve('stream-browserify'),
          vm: require.resolve('vm-browserify'),
        },
        alias: {
          ...config.resolve.alias,
          dotenv: path.resolve(__dirname, './dotenv.js'),
        },
      },
    }),
  },
  editor: slateEditor({}),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
      // ssl: sslConfig,
    },
  }),
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Pages,
    Posts,
    Projects,
    Media,
    Categories,
    Users,
    Teammates,
    Listings,
    Testimonials,
    Services,
    Companies,
    InvolvementEvents,
    InvolvementGroups,
    CommunityResources,
  ],
  globals: [Settings, Header, Footer],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
  csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
  endpoints: [
    // The seed endpoint is used to populate the database with some example data
    // You should delete this endpoint before deploying your site to production
    {
      path: '/sendEmail',
      method: 'post',
      handler: sendEmail,
    },
    {
      path: '/signUpNewsletter',
      method: 'post',
      handler: signUpNewsletter,
    },
    {
      path: '/sendListingEmail',
      method: 'post',
      handler: sendListingEmail,
    },
  ],
  plugins: plugins,
})
