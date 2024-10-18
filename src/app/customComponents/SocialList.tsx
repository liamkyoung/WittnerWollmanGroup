import React from 'react'

import { DefaultSocials } from '../../globalData/general'
import Instagram from '../customComponents/Icons/Instagram'
import Facebook from '../customComponents/Icons/Facebook'
import Linkedin from '../customComponents/Icons/LinkedinIcon'
import Email from '../customComponents/Icons/Email'
import Phone from '../customComponents/Icons/Phone'
import { ColorScheme } from '../types/viewmodels'

type Props = {
  colorScheme?: ColorScheme
  email?: string
  phoneNumber?: string
  instagram?: string
  facebook?: string
  linkedin?: string
}

function SocialList({
  email,
  phoneNumber,
  instagram,
  facebook,
  linkedin,
  colorScheme = ColorScheme.DEFAULT,
}: Props) {
  return (
    <div className="flex flex-col items-center lg:items-start gap-8 mx-auto">
      <Email emailAddress={!email ? DefaultSocials.email : email} show colorScheme={colorScheme} />
      <Phone
        phoneNumber={!phoneNumber ? DefaultSocials.phoneNumber : phoneNumber}
        show
        colorScheme={colorScheme}
      />
      <Instagram
        profileLink={`www.instagram.com/${instagram}`}
        username={!instagram ? DefaultSocials.instagram : `${instagram}`}
        colorScheme={colorScheme}
      />
      <Facebook
        profileLink={`www.facebook.com/${facebook}`}
        username={!facebook ? DefaultSocials.facebook : `${facebook}`}
        colorScheme={colorScheme}
      />
      <Linkedin
        profileLink={`www.linkedin.com/in/${linkedin}`}
        username={!linkedin ? DefaultSocials.linkedin : `${linkedin}`}
        colorScheme={colorScheme}
      />
    </div>
  )
}

export default SocialList
