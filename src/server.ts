import cors from 'cors'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'
import next from 'next'
import nextBuild from 'next/dist/build'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

// Validate environment variables before starting server
import { validateEnvironmentOrExit } from './payload/utils/env-validation'
validateEnvironmentOrExit()

import express from 'express'
import payload from 'payload'

// import { seed } from './payload/seed'

const emailRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 3,
  message: {
    status: 429,
    message: 'Too many requests, please try again later.',
  },
})

const app = express()

const corsOptions = {
  origin: process.env.NEXT_PUBLIC_SERVER_URL,
  credentials: true,
}

app.use(cors(corsOptions))
app.use('/api/email/', emailRateLimiter)

const PORT = process.env.PORT || 3000

const start = async (): Promise<void> => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || '',
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // if (process.env.PAYLOAD_SEED === 'true') {
  //   await seed(payload)
  //   process.exit()
  // }

  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      payload.logger.info(`Next.js is now building...`)
      // @ts-expect-error
      await nextBuild(path.join(__dirname, '../'))
      process.exit()
    })

    return
  }

  const nextApp = next({
    dev: process.env.NODE_ENV !== 'production',
    port: Number(PORT),
  })

  const nextHandler = nextApp.getRequestHandler()

  app.use((req, res) => nextHandler(req, res))

  nextApp.prepare().then(() => {
    payload.logger.info('Starting Next.js...')

    app.listen(PORT, async () => {
      payload.logger.info(`Next.js App URL: ${process.env.PAYLOAD_PUBLIC_SERVER_URL}`)
    })
  })
}

start()
