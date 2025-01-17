import React from 'react'

import { DefaultSocials } from '../../globalData/general'
import Email from '../customComponents/Icons/Email'
import Facebook from '../customComponents/Icons/Facebook'
import Instagram from '../customComponents/Icons/Instagram'
import Linkedin from '../customComponents/Icons/LinkedinIcon'
import Phone from '../customComponents/Icons/Phone'
import { ColorScheme, SocialMediaInfo } from '../types/viewmodels'
import OfficePhone from './Icons/OfficePhone'

type Props = {
  colorScheme?: ColorScheme
  email?: string
  phoneNumber?: string
  officeNumber?: string
  instagram?: SocialMediaInfo
  facebook?: SocialMediaInfo
  linkedin?: SocialMediaInfo
}

function SocialList({
  email = DefaultSocials.email,
  phoneNumber = DefaultSocials.phoneNumber,
  officeNumber = DefaultSocials.phoneNumber,
  instagram = DefaultSocials.instagram,
  facebook = DefaultSocials.facebook,
  linkedin = DefaultSocials.linkedin,
  colorScheme = ColorScheme.DEFAULT,
}: Props) {
  return (
    <div className="flex flex-col items-start gap-8 mx-auto">
      <Email emailAddress={email} show colorScheme={colorScheme} />
      <Phone phoneNumber={phoneNumber} show colorScheme={colorScheme} />
      <OfficePhone phoneNumber={officeNumber} show colorScheme={colorScheme} />
      {instagram && (
        <Instagram
          profileLink={instagram.profileLink}
          username={instagram.username}
          colorScheme={colorScheme}
        />
      )}

      {facebook && (
        <Facebook
          profileLink={facebook.profileLink}
          username={facebook.username}
          colorScheme={colorScheme}
        />
      )}

      {linkedin && (
        <Linkedin
          profileLink={linkedin.profileLink}
          username={linkedin.username}
          colorScheme={colorScheme}
        />
      )}
    </div>
  )
}

export default SocialList
