'use client'

import React, { useState } from 'react'

import { Media } from '../../../app/_components/Media'
import { ColorScheme } from '../../../app/types/viewmodels'
import { Media as MType, Teammate } from '../../../payload/payload-types'
import { BasicContactForm } from '../inputs/BasicContactForm'
import SocialList from '../SocialList'

type Props = {
  agent: Teammate
  address: string
}

function ListingCTA({ address, agent }: Props) {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="bg-wwRed relative py-8">
      <div className="global-margin-x grid lg:grid-cols-3 grid-cols-1">
        <div className="lg:row-span-2 row-span-1">
          <h2 className="text-white mb-8 text-center lg:text-left lg:whitespace-nowrap whitespace-normal">
            Schedule a Tour With <br />
            <span className="text-wwYellow">{agent.title}</span>
          </h2>
          <div>
            <h4 className="text-white mb-4 text-center lg:text-left">Contact Info</h4>
            <SocialList
              email={agent.email}
              phoneNumber={agent.phoneNumber}
              instagram={
                agent.instagram
                  ? {
                      platformName: 'instagram',
                      username: agent.instagram,
                      profileLink: `https://instagram.com/${agent.instagram?.replace('@', '')}`,
                    }
                  : null
              }
              facebook={
                agent.Facebook
                  ? {
                      platformName: 'facebook',
                      username: agent.Facebook,
                      profileLink: `https://facebook.com/${agent.Facebook}`,
                    }
                  : null
              } // NOTE: COULD BE ERROR PRONE /w facebook urls
            />
          </div>
        </div>
        <Media
          resource={agent.profilePic as MType}
          alt="teammate-image"
          imgClassName="absolute z-10 bottom-0 -right-16 xl:right-16 mr-24 w-80 hidden lg:block"
        />
      </div>
    </div>
  )
}

export default ListingCTA
