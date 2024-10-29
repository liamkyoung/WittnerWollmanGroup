import { Listing, Media } from '@/payload/payload-types'
import React from 'react'
import { ListingCard } from './index'
import { GoogleMap } from '../GoogleMap/GoogleMap'
import { GoogleMapPin } from '@/app/types/viewmodels'
import Link from 'next/link'

type Props = {
  listings: Listing[]
  displayHeader: 'yes' | 'no'
}

export const ListingGallery = ({ listings, displayHeader }: Props) => {
  const pins: GoogleMapPin[] = listings.map(m => {
    return {
      name: m.title,
      coords: { lat: m.latitude, lng: m.longitude },
      slug: m.slug,
      coverImg: m.coverImage as Media,
    }
  })
  return (
    <div className="global-margin-x global-margin-y">
      {displayHeader === 'yes' && (
        <div className="flex items-center justify-between mb-16">
          <h2>Current Listings</h2>
          <Link href="/listings" className="btn-primary">
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
          <GoogleMap pins={pins} />
        </div>
      </div>
    </div>
  )
}
