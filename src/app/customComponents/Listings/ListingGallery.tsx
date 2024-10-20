import { Listing, Media } from '@/payload/payload-types'
import React from 'react'
import { ListingCard } from './index'
import { GoogleMap } from '../GoogleMap/GoogleMap'
import { GoogleMapPin } from '@/app/types/viewmodels'

type Props = {
  listings: Listing[]
}

export const ListingGallery = ({ listings }: Props) => {
  const pins: GoogleMapPin[] = listings.map(m => {
    return {
      name: m.title,
      coords: { lat: m.latitude, lng: m.longitude },
      slug: m.slug,
      coverImg: m.coverImage as Media,
    }
  })
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-4 global-margin-x">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 overflow-y-scroll h-[44rem]">
        {listings.map((l, i) => (
          <ListingCard doc={l} key={i} />
        ))}
      </div>
      <div className="">
        <GoogleMap pins={pins} />
      </div>
    </div>
  )
}
