'use client'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { APIProvider, Map } from '@vis.gl/react-google-maps'

export const GoogleMap = () => {
  const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
  return (
    <APIProvider apiKey={GOOGLE_MAP_API_KEY}>
      <Map
        style={{ width: '100vw', height: '100vh' }}
        defaultCenter={{ lat: 22.54992, lng: 0 }}
        defaultZoom={3}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      />
    </APIProvider>
  )
}
