'use client'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'
import { GoogleMapsDefaults } from '@/globalData/general'
import { MapCoords } from '@/app/types/viewmodels'
import { Listing, Media } from '@/payload/payload-types'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { MarkerWithInfo } from './MarkerWithInfo'

export type Props = {
  listings?: Listing[]
}

export const GoogleMap = ({ listings }: Props) => {
  const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
  return (
    <APIProvider apiKey={GOOGLE_MAP_API_KEY}>
      <Map
        style={{ width: '100%', height: '800px' }}
        defaultCenter={GoogleMapsDefaults.mapCenter}
        defaultZoom={11}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        mapId={'1'}
      >
        {listings &&
          listings.map((p, i) => (
            <MarkerWithInfo
              position={{ lat: p.latitude, lng: p.longitude }}
              title={p.title}
              href={`listings/${p.slug}`}
              image={p.coverImage as Media}
              key={i}
            />
          ))}
      </Map>
    </APIProvider>
  )
}
