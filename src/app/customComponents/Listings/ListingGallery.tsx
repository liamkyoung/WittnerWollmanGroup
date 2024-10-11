import { Listing } from '@/payload/payload-types'
import React from 'react'
import { ListingCard } from './index'
import { GoogleMap } from '../GoogleMap/GoogleMap'

type Props = {
  listings: Listing[]
}

export const ListingGallery = ({ listings }: Props) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-4 global-margin-x">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 overflow-y-scroll h-[44rem]">
        {listings.map(l => (
          <ListingCard doc={l} />
        ))}
      </div>
      <div className="">
        <GoogleMap listings={listings} />
      </div>
    </div>
  )
}
