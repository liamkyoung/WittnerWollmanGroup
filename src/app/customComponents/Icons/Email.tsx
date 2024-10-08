import React from 'react'
import Link from 'next/link'
import { ColorScheme } from '../../types/viewmodels'

type Props = {
  emailAddress?: string
  show?: boolean
  colorScheme?: ColorScheme
}

function Email({ emailAddress, show, colorScheme }: Props) {
  let colorStyle = 'default-social-icons'
  let textColor = 'text-white'

  if (colorScheme === ColorScheme.RED) {
    colorStyle = 'contact-social-icons' // Red -> Yellow
    textColor = 'text-wwBlack'
  } else if (colorScheme === ColorScheme.YELLOW) {
    colorStyle = 'profile-social-icons' // Red -> Yellow
    textColor = 'text-white'
  }

  return (
    <Link href={`mailto:${emailAddress}`}>
      <span className={`inline-flex gap-4 ${textColor}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={colorStyle}
        >
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg>

        {show && emailAddress}
      </span>
    </Link>
  )
}

export default Email
