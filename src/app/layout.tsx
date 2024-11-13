import React from 'react'
import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { AdminBar } from './_components/AdminBar'
import { Providers } from './_providers'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'
import Footer from './customComponents/Footer'
import Header from './customComponents/Header'

import './_css/app.scss'
const montserrat = Montserrat({ subsets: ['latin'], preload: true })
// import { GoogleAnalytics } from '@next/third-parties/google'

import { Toaster } from '../components/ui/toaster'
import { MetaKeywords } from '../globalData/general'
import NewsletterPopup from './customComponents/Newsletter/NewsletterPopup'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" />
        <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${montserrat.className} antialiased bg-gray-50 mx-auto`}>
        <Providers>
          <AdminBar />
          <>
            <Header />
            {children}
            <Footer />
            <Toaster />
            <NewsletterPopup />
          </>
        </Providers>
      </body>
      {/* {process.env.NODE_ENV === 'production' && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_G_ANALYTICS_ID} />
      )} */}
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL),
  twitter: {
    card: 'summary_large_image',
    creator: '@liamkyoung',
  },
  keywords: MetaKeywords,
  robots: '../public/robots.txt',
  openGraph: mergeOpenGraph(),
}
