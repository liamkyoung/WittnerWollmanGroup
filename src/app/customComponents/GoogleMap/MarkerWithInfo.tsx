import React, { useCallback, useState } from 'react'
import { AdvancedMarker, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps'

import DefaultCard from '../DefaultCard'

import { formatDollarAmount } from '@/app/_utilities/formatDollarAmount'
import { CardSize, MapCoords } from '@/app/types/viewmodels'
import { ListingLinks } from '@/globalData/navigation/listings/listings'
import { ProjectLinks } from '@/globalData/navigation/projects/projects'
import { Media as MediaType } from '@/payload/payload-types'

type Props = {
  id: string
  activePinId: string
  position: MapCoords
  pinType: 'listing' | 'project'
  title: string
  href: string
  image?: MediaType
  address?: string
  price?: number
  handlePinClicked: (id: any) => void
}

export const MarkerWithInfo = ({
  id,
  position,
  title,
  href,
  image,
  address,
  price,
  pinType,
  activePinId,
  handlePinClicked,
}: Props) => {
  // `markerRef` and `marker` are needed to establish the connection between
  // the marker and infowindow (if you're using the Marker component, you
  // can use the `useMarkerRef` hook instead).
  const [markerRef, marker] = useAdvancedMarkerRef()
  // clicking the marker will toggle the infowindow

  // if the maps api closes the infowindow, we have to synchronize our state
  const finalHref =
    pinType === 'listing' ? `${ListingLinks.relLink}/${href}` : `${ProjectLinks.relLink}/${href}`

  return (
    <>
      {position.lat && position.lng && (
        <>
          <AdvancedMarker
            ref={markerRef}
            position={new google.maps.LatLng(position.lat, position.lng)}
            onClick={() => handlePinClicked(id)}
          />

          {activePinId === id && (
            <InfoWindow anchor={marker} onClose={() => handlePinClicked(null)} className="">
              <DefaultCard
                link={finalHref}
                address={address}
                title={title}
                image={image}
                size={CardSize.FULL_SCREEN}
              />
            </InfoWindow>
          )}
        </>
      )}
    </>
  )
}
