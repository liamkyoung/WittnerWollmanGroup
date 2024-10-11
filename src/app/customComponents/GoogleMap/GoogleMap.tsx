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
  fullscreen?: Boolean
}

export const GoogleMap = ({ listings, fullscreen = false }: Props) => {
  const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
  const widthValue = !fullscreen ? '100%' : '100vw'
  return (
    <div className="flex">
      <APIProvider apiKey={GOOGLE_MAP_API_KEY}>
        <Map
          style={{ width: widthValue, height: '500px' }}
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
    </div>
  )
}
