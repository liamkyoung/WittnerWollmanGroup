'use client'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'
import { GoogleMapsDefaults } from '@/globalData/general'
import { MapCoords } from '@/app/types/viewmodels'
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
  locations?: MapCoords[]
}

export const GoogleMap = ({ locations }: Props) => {
  const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
  return (
    <APIProvider apiKey={GOOGLE_MAP_API_KEY}>
      <Map
        style={{ width: '100%', height: '800px' }}
        defaultCenter={GoogleMapsDefaults.mapCenter}
        defaultZoom={11}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        {locations && locations.map((p, i) => <MarkerWithInfo position={p} key={i} />)}
      </Map>
    </APIProvider>
  )
}
