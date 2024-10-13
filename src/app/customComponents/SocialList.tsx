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
}

function SocialList({ colorScheme = ColorScheme.DEFAULT }: Props) {
  return (
    <div className="flex flex-col items-center lg:items-start gap-8 mx-auto">
      <Email emailAddress={DefaultSocials.email} show colorScheme={colorScheme} />
      <Phone phoneNumber={'(305) 432 - 1052'} show colorScheme={colorScheme} />
      <Instagram
        profileLink={DefaultSocials.instagram}
        username={'@wwgroup'}
        colorScheme={colorScheme}
      />
      <Facebook
        profileLink={DefaultSocials.facebook}
        username={'@wwgroup'}
        colorScheme={colorScheme}
      />
      <Linkedin
        profileLink={DefaultSocials.linkedin}
        username={'@wwgroup'}
        colorScheme={colorScheme}
      />
    </div>
  )
}

export default SocialList
