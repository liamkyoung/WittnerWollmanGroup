// 'use client'
// import { useState, useMemo, useEffect } from 'react'
// import React from 'react'

// import AdminAddressSearch from './AdminAddressSearch'

// type Props = {}

// const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
// const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID

// export default function GoogleMap({}: Props) {
//   //
//   const [addressList, setAddressList] = useState<void | google.maps.GeocoderResponse>(null)
//   const [open, setOpen] = useState(false)
//   const [addressQuery, setAddressQuery] = useState('')

//   const [center, setCenter] = useState({ lat: 27.77, lng: -82.64 }) // Centered on St. Pete Downtown
//   const [formattedAddress, setFormattedAddress] = useState<string>(null)

//   function handleAddressSelected(lat, lng, formattedAddress) {
//     setCenter({ lat: lat, lng: lng })
//     setFormattedAddress(formattedAddress)
//   }

//   return (
//     <>
//       <AdminAddressSearch path="/" label="" />
//     </>
//   )
// }
