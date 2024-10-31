import React from 'react'

import { NewsletterForm } from '../../inputs/NewsletterForm'

type Props = {}

export default function NewsletterCard({}: Props) {
  return (
    <div className="mx-auto">
      <div className="mx-auto">
        <div className="relative isolate overflow-hidden bg-wwBlack px-6 py-24 sm:px-24 xl:py-32">
          <h2 className="mx-auto text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Sign up for our Newsletter!
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            Get news of the latest developments across St. Pete and the Tampa Bay and updates about
            the WW Group!
          </p>
          <NewsletterForm />

          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <g clip-path="url(#clip0_208_1644)">
              <path
                d="M512 1024C794.77 1024 1024 794.77 1024 512C1024 229.23 794.77 0 512 0C229.23 0 0 229.23 0 512C0 794.77 229.23 1024 512 1024Z"
                fill="url(#paint0_radial_208_1644)"
              />
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_208_1644"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#803D3B" />
                <stop offset="1" stopColor="#803D3B" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
