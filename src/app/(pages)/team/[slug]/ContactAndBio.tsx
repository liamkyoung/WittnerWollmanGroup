import React from 'react'

import SocialList from '@/app/customComponents/SocialList'
import { ColorScheme, SocialMediaInfo } from '@/app/types/viewmodels'

type Props = {
  email: string
  linkedin: SocialMediaInfo
  phoneNumber: string
  facebook: SocialMediaInfo
  instagram: SocialMediaInfo
  bio: string
}

function ContactAndBio({ bio, email, linkedin, phoneNumber, facebook, instagram }: Props) {
  return (
    <div className="bg-wwRed p-8 lg:p-16 my-24">
      <div className="flex lg:flex-row flex-col-reverse gap-8">
        <div className="space-y-8 border-t-2 border-white lg:border-none lg:pt-0 pt-10">
          <h2 className="text-white text-center lg:text-left">Contact</h2>
          <SocialList
            colorScheme={ColorScheme.YELLOW}
            email={email}
            phoneNumber={phoneNumber}
            linkedin={linkedin}
            instagram={instagram}
            facebook={facebook}
          />
        </div>
        <div className="space-y-8">
          <h2 className="text-white text-center lg:text-left pl-10">Biography</h2>
          <p className="text-white lg:border-l-2 lg:border-white pl-10 text-center lg:text-left">
            {bio}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactAndBio
