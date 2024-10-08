import React from 'react'
import Link from 'next/link'
import { ColorScheme } from '../../types/viewmodels'

type Props = {
  profileLink: string
  username?: string
  colorScheme?: ColorScheme
}

function Linkedin({ profileLink, username, colorScheme }: Props) {
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
    <Link href={profileLink}>
      <span className={`inline-flex gap-4 ${textColor}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={colorStyle}>
          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
        </svg>

        {username}
      </span>
    </Link>
  )
}

export default Linkedin
