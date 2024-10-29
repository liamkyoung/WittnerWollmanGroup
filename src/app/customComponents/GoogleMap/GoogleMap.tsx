'use client'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'
import { GoogleMapsDefaults } from '@/globalData/general'
import { GoogleMapPin, MapCoords } from '@/app/types/viewmodels'
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
  pins?: GoogleMapPin[]
  fullscreen?: Boolean
  zoom?: 'close' | 'default' | 'far'
}

export const GoogleMap = ({ pins, fullscreen = false, zoom = 'default' }: Props) => {
  const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
  const widthValue = !fullscreen ? '100%' : '100vw'
  const heightValue = !fullscreen ? '44rem' : '500px'

  let mapZoom = 11

  if (zoom === 'close') mapZoom = 14
  if (zoom === 'far') mapZoom = 10

  return (
    <div className="flex">
      <APIProvider apiKey={GOOGLE_MAP_API_KEY}>
        <Map
          style={{ width: widthValue, height: heightValue }}
          defaultCenter={GoogleMapsDefaults.mapCenter}
          defaultZoom={mapZoom}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          mapId={'1'}
        >
          {pins &&
            pins.map((p, i) => (
              <MarkerWithInfo
                position={{ lat: p.coords.lat, lng: p.coords.lng }}
                title={p.name}
                href={p.slug}
                image={p.coverImg}
                key={i}
              />
            ))}
        </Map>
      </APIProvider>
    </div>
  )
}
