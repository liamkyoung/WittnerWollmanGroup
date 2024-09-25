// 'use client'
// import React, { useEffect, useMemo } from 'react'

// import { useMapsLibrary } from '@vis.gl/react-google-maps'

// export default function AddressSearch(params: {
//   addyQueryString: string
//   setAddyList: React.Dispatch<React.SetStateAction<void | google.maps.GeocoderResponse>>
// }) {
//   // useMapsLibrary loads the geocoding library, it might initially return `null`
//   // if the library hasn't been loaded. Once loaded, it will return the library
//   // object as it would be returned by `await google.maps.importLibrary()`
//   const geocodingLib = useMapsLibrary('geocoding')
//   const geocoder = useMemo(() => geocodingLib && new geocodingLib.Geocoder(), [geocodingLib])

//   useEffect(() => {
//     if (!geocoder) return
//     if (!params.addyQueryString) return
//     geocoder
//       .geocode({ address: params.addyQueryString, region: 'US' })
//       .catch(err => null) // Ignore No Result Errors.
//       .then(res => params.setAddyList(res))
//   }, [geocoder, params.addyQueryString])

//   return null
// }
