import Link from 'next/link'

import { ContactLink } from '@/globalData/navigation/contact/contact'

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:py-48 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-wwRed">404</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-wwRed px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-wwRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wwRed"
          >
            Go back home
          </Link>
          <Link href={ContactLink.relLink} className="text-sm font-semibold text-gray-900">
            Contact a team member <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
