'use client'

import React, { useState } from 'react'

import { Media } from '../../../app/_components/Media'
import { ColorScheme } from '../../../app/types/viewmodels'
import { Media as MType, Teammate } from '../../../payload/payload-types'
import { BasicContactForm } from '../inputs/BasicContactForm'

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
            <span className="text-wwYellow">Schedule A Tour</span> With {agent.title}
          </h2>
          <div className="flex gap-16 items-center">
            {/* {TODO: Replace with contact info} */}
            <BasicContactForm colorScheme={ColorScheme.WHITE} address={address} />
          </div>
        </div>
        <Media
          resource={agent.profilePic as MType}
          alt="teammate-image"
          imgClassName="absolute z-10 bottom-0 right-0 mr-24 w-80 hidden xl:block"
        />
      </div>
    </div>
  )
}

export default ListingCTA
