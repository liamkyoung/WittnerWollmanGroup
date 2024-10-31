import React, { useCallback, useState } from 'react'
import { AdvancedMarker, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps'
import Link from 'next/link'

import CardInfo from '../CardInfo'
import DefaultCard from '../DefaultCard'

import { Media } from '@/app/_components/Media'
import { formatDollarAmount } from '@/app/_utilities/formatDollarAmount'
import { MapCoords } from '@/app/types/viewmodels'
import { Media as MediaType } from '@/payload/payload-types'

type Props = {
  position: MapCoords
  pinType: 'listing' | 'project'
  title: string
  href: string
  image?: MediaType
  address?: string
  price?: number
}

export const MarkerWithInfo = ({
  position,
  title,
  href,
  image,
  address,
  price,
  pinType,
}: Props) => {
  // `markerRef` and `marker` are needed to establish the connection between
  // the marker and infowindow (if you're using the Marker component, you
  // can use the `useMarkerRef` hook instead).
  const [markerRef, marker] = useAdvancedMarkerRef()

  const [infoWindowShown, setInfoWindowShown] = useState(false)

  // clicking the marker will toggle the infowindow
  const handleMarkerClick = useCallback(() => setInfoWindowShown(isShown => !isShown), [])

  // if the maps api closes the infowindow, we have to synchronize our state
  const handleClose = useCallback(() => setInfoWindowShown(false), [])
  const finalHref = pinType === 'listing' ? `/listings/${href}` : `/projects/${href}`

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
              <DefaultCard
                link={finalHref}
                accentText={formatDollarAmount(price)}
                address={address}
                title={title}
                image={image}
              />
            </InfoWindow>
          )}
        </>
      )}
    </>
  )
}
