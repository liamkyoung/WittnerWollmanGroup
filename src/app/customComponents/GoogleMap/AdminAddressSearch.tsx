// 'use client'
// import { useState, useEffect } from 'react'
// import React from 'react'
// import { APIProvider } from '@vis.gl/react-google-maps'
// import { useField } from 'payload/components/forms'
// import { useFormFields } from 'payload/components/forms'

// import AddressSearch from './AddressSearch'

// const API_KEY =
//   process.env.PAYLOAD_PUBLIC_GOOGLE_MAPS_KEY || process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY

// export default function AdminAddressSearch({ path, label }) {
//   const [addressList, setAddressList] = useState<void | google.maps.GeocoderResponse>(null)
//   const [addressQuery, setAddressQuery] = useState('')
//   const [debouncedInputValue, setDebouncedInputValue] = useState('')
//   const latitude = useFormFields(([fields, dispatch]) => fields.latitude)
//   const longitude = useFormFields(([fields, dispatch]) => fields.longitude)

//   const streetAddress = useFormFields(([fields, dispatch]) => fields.streetAddress)
//   const zip = useFormFields(([fields, dispatch]) => fields.zipCode)
//   const city = useFormFields(([fields, dispatch]) => fields.city)
//   const county = useFormFields(([fields, dispatch]) => fields.county)
//   const state = useFormFields(([fields, dispatch]) => fields.state)
//   const neighborhood = useFormFields(([fields, dispatch]) => fields.neighborhood)

//   const { value, setValue } = useField<string>({ path })

//   useEffect(() => {
//     const delayInputTimeoutId = setTimeout(() => {
//       setDebouncedInputValue(addressQuery)
//     }, 500)
//     return () => clearTimeout(delayInputTimeoutId)
//   }, [addressQuery, 500])

//   function handleAddressSelected(address: google.maps.GeocoderResult) {
//     console.log(address)
//     setValue(address.formatted_address)
//     latitude.value = address.geometry.location.lat()
//     longitude.value = address.geometry.location.lng()

//     const parts = address.address_components

//     const _streetNumber = parts.find(i => i.types.includes('street_number'))?.long_name
//     const _route = parts.find(i => i.types.includes('route'))?.long_name
//     const _neighborhood = parts.find(i => i.types.includes('neighborhood'))?.long_name
//     const _city = parts.find(i => i.types.includes('locality'))?.long_name
//     const _county = parts.find(i => i.types.includes('administrative_area_level_2'))?.long_name
//     const _state = parts.find(i => i.types.includes('administrative_area_level_1'))?.long_name
//     const _zip = parts.find(i => i.types.includes('postal_code'))?.long_name

//     if (_streetNumber && _route) streetAddress.value = `${_streetNumber} ${_route}` // TODO: Could be error prone
//     if (_neighborhood) neighborhood.value = _neighborhood
//     if (_city) city.value = _city
//     if (_county) county.value = _county
//     if (_state) state.value = _state
//     if (_zip) zip.value = _zip
//   }

//   function handleAddressDeSelected() {
//     setValue(null)
//     latitude.value = null
//     longitude.value = null
//     streetAddress.value = null
//     neighborhood.value = null
//     city.value = null
//     county.value = null
//     state.value = null
//     zip.value = null
//   }

//   // console.log('API KEY: ', API_KEY)

//   return (
//     <>
//       {value && (
//         <p className="p-2 rounded-md mb-2" onClick={() => handleAddressDeSelected()}>
//           Selected: {value}
//         </p>
//       )}
//       <APIProvider apiKey={API_KEY}>
//         <div className="grid w-full max-w-sm items-center gap-1.5">
//           <label htmlFor={path}>Address</label>
//           <input
//             placeholder="Address"
//             onInput={e => {
//               setAddressQuery(e.target.value)
//             }}
//             value={addressQuery}
//             className="bg-white text-black outline rounded-md px-2 py-2"
//           />
//           <AddressSearch addyQueryString={debouncedInputValue} setAddyList={setAddressList} />
//           {addressList &&
//             addressList.results.map(r => (
//               <div
//                 className="bg-gray-300 hover:bg-gray-200 rounded-md p-4 cursor-pointer"
//                 onClick={() => {
//                   handleAddressSelected(r)
//                 }}
//                 key={r.place_id}
//               >
//                 <p>{r.formatted_address}</p>
//               </div>
//             ))}
//         </div>
//       </APIProvider>
//     </>
//   )
// }
