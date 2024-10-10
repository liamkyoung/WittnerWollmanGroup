import React from 'react'
import { Metadata } from 'next'

import { AdminBar } from './_components/AdminBar'
// import { Footer } from './_components/Footer'
// import { Header } from './_components/Header' Payload Header
import Header from './customComponents/Header'
import Footer from './customComponents/Footer'
import { Providers } from './_providers'
import { InitTheme } from './_providers/Theme/InitTheme'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'

import './_css/app.scss'

import { Montserrat } from 'next/font/google'
import { CompanyGallery } from './customComponents/Companies/CompanyGallery'
const montserrat = Montserrat({ subsets: ['latin'] })

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="img-src 'self' https://raw.githubusercontent.com https://maps.gstatic.com;"
        ></meta>
      </head>
      <body className={`${montserrat.className} antialiased bg-gray-50 mx-auto`}>
        <Providers>
          <AdminBar />
          <>
            <Header />
            {children}
            <Footer />
          </>
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://payloadcms.com'),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
  openGraph: mergeOpenGraph(),
}
