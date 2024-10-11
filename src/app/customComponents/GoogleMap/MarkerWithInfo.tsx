import React, { useState, useCallback } from 'react'
import { AdvancedMarker, useAdvancedMarkerRef, InfoWindow } from '@vis.gl/react-google-maps'
import { MapCoords } from '@/app/types/viewmodels'
import Link from 'next/link'
import { Media } from '@/app/_components/Media'
import { Media as MediaType } from '@/payload/payload-types'

type Props = {
  position: MapCoords
  title: string
  href: string
  image: MediaType
}

export const MarkerWithInfo = ({ position, title, href, image }: Props) => {
  // `markerRef` and `marker` are needed to establish the connection between
  // the marker and infowindow (if you're using the Marker component, you
  // can use the `useMarkerRef` hook instead).
  const [markerRef, marker] = useAdvancedMarkerRef()

  const [infoWindowShown, setInfoWindowShown] = useState(false)

  // clicking the marker will toggle the infowindow
  const handleMarkerClick = useCallback(() => setInfoWindowShown(isShown => !isShown), [])

  // if the maps api closes the infowindow, we have to synchronize our state
  const handleClose = useCallback(() => setInfoWindowShown(false), [])
  return (
    <>
      {position.lat && position.lng && (
        <>
          <AdvancedMarker
            ref={markerRef}
            position={new google.maps.LatLng(position.lat, position.lng)}
            onClick={handleMarkerClick}
          />

          {infoWindowShown && (
            <InfoWindow anchor={marker} onClose={handleClose}>
              <h2>{title}</h2>
              <Media resource={image} />
              <Link href={href}>Click here to view</Link>
            </InfoWindow>
          )}
        </>
      )}
    </>
  )
}
