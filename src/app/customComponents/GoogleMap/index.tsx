'use client'
import { useState, useMemo, useEffect } from 'react'
import React from 'react'

import AdminAddressSearch from './AdminAddressSearch'
import { GoogleMapsDefaults } from '@/globalData/general'

type Props = {}

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID

// TODO: BETTER NAME
export default function AdminAddressSearchWrapper({}: Props) {
  //
  const [addressList, setAddressList] = useState<void | google.maps.GeocoderResponse>(null)
  const [open, setOpen] = useState(false)
  const [addressQuery, setAddressQuery] = useState('')

  const [center, setCenter] = useState(GoogleMapsDefaults.mapCenter) // Centered on St. Pete Downtown
  const [formattedAddress, setFormattedAddress] = useState<string>(null)

  function handleAddressSelected(lat, lng, formattedAddress) {
    setCenter({ lat: lat, lng: lng })
    setFormattedAddress(formattedAddress)
  }

  return (
    <>
      <AdminAddressSearch />
    </>
  )
}
