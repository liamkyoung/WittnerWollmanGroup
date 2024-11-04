import React from 'react'
import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { AdminBar } from './_components/AdminBar'
import { Providers } from './_providers'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'
import Footer from './customComponents/Footer'
import Header from './customComponents/Header'

import './_css/app.scss'
const montserrat = Montserrat({ subsets: ['latin'] })
import { Toaster } from '../components/ui/toaster'
import NewsletterPopup from './customComponents/Newsletter/NewsletterPopup'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-0PNS6VZFDB" defer></script>

      {/* Google Analytics Tag */}
      <script>
        window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-0PNS6VZFDB');
      </script>

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
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL),
  twitter: {
    card: 'summary_large_image',
    creator: '@liamkyoung',
  },
  keywords: ['real estate', 'tampa bay', 'st. petersburg', 'commercial real estate'],
  robots: '../public/robots.txt',
  openGraph: mergeOpenGraph(),
}
