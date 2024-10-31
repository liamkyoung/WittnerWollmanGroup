import React from 'react'

import { DefaultSocials } from '../../globalData/general'
import Email from '../customComponents/Icons/Email'
import Facebook from '../customComponents/Icons/Facebook'
import Instagram from '../customComponents/Icons/Instagram'
import Linkedin from '../customComponents/Icons/LinkedinIcon'
import Phone from '../customComponents/Icons/Phone'
import { ColorScheme, SocialMediaInfo } from '../types/viewmodels'

type Props = {
  colorScheme?: ColorScheme
  email?: string
  phoneNumber?: string
  instagram?: SocialMediaInfo
  facebook?: SocialMediaInfo
  linkedin?: SocialMediaInfo
}

function SocialList({
  email = DefaultSocials.email,
  phoneNumber = DefaultSocials.phoneNumber,
  instagram = DefaultSocials.instagram,
  facebook = DefaultSocials.facebook,
  linkedin = DefaultSocials.linkedin,
  colorScheme = ColorScheme.DEFAULT,
}: Props) {
  return (
    <div className="flex flex-col items-center lg:items-start gap-8 mx-auto">
      <Email emailAddress={email} show colorScheme={colorScheme} />
      <Phone phoneNumber={phoneNumber} show colorScheme={colorScheme} />
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
