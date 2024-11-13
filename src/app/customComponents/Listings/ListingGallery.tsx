import React from 'react'
import Link from 'next/link'

import { GoogleMapPin } from '../../../app/types/viewmodels'
import { Listing, Media } from '../../../payload/payload-types'
import { GoogleMap } from '../GoogleMap/GoogleMap'
import { ListingCard } from './index'

import { ListingLinks } from '@/globalData/navigation/listings/listings'

type Props = {
  listings: Listing[]
  displayHeader: 'yes' | 'no'
}

export const ListingGallery = ({ listings, displayHeader = 'yes' }: Props) => {
  const pins: GoogleMapPin[] = listings.map(m => {
    return {
      name: m.title,
      coords: { lat: m.latitude, lng: m.longitude },
      slug: m.slug,
      coverImg: m.coverImage as Media,
      address: m.address,
      price: m.price,
    }
  })
  return (
    <div className="global-margin-x global-margin-y overflow-x-hidden">
      {displayHeader === 'yes' && (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-between mb-16">
          <h2>Current Listings</h2>
          <Link href={ListingLinks.relLink} className="btn-primary">
            VIEW ALL LISTINGS
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8 overflow-y-scroll h-[44rem]">
          {listings.map((l, i) => (
            <ListingCard doc={l} key={i} />
          ))}
        </div>
        <div className="">
          <GoogleMap pins={pins} pinType="listing" />
        </div>
      </div>
    </div>
  )
}
