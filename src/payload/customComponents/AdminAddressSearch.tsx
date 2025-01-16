'use client'
import React, { useEffect, useState } from 'react'
import { APIProvider } from '@vis.gl/react-google-maps'
import { useField, useFormFields } from 'payload/components/forms'

import AddressSearch from '../../app/customComponents/GoogleMap/AddressSearch'

const API_KEY =
  process.env.PAYLOAD_PUBLIC_GOOGLE_MAPS_KEY || process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY

export default function AdminAddressSearch() {
  const [addressList, setAddressList] = useState<void | google.maps.GeocoderResponse>(null)
  const [addressQuery, setAddressQuery] = useState('')
  const [debouncedInputValue, setDebouncedInputValue] = useState('')
  const latitude = useFormFields(([fields, dispatch]) => fields.latitude)
  const longitude = useFormFields(([fields, dispatch]) => fields.longitude)

  const streetAddress = useFormFields(([fields, dispatch]) => fields.streetAddress)
  const zip = useFormFields(([fields, dispatch]) => fields.zipCode)
  const city = useFormFields(([fields, dispatch]) => fields.city)
  const county = useFormFields(([fields, dispatch]) => fields.county)
  const state = useFormFields(([fields, dispatch]) => fields.state)
  const neighborhood = useFormFields(([fields, dispatch]) => fields.neighborhood)
  const DEBOUNCE_MS = 500
  const { value, setValue } = useField<string>({ path: 'address' })

  // DEBOUNCING
  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedInputValue(addressQuery)
    }, DEBOUNCE_MS)
    return () => clearTimeout(delayInputTimeoutId)
  }, [addressQuery, DEBOUNCE_MS])

  function handleAddressSelected(address: google.maps.GeocoderResult) {
    // console.log(address)
    setValue(address.formatted_address)
    latitude.value = address.geometry.location.lat()
    longitude.value = address.geometry.location.lng()

    const parts = address.address_components

    const _streetNumber = parts.find(i => i.types.includes('street_number'))?.long_name
    const _route = parts.find(i => i.types.includes('route'))?.long_name
    const _neighborhood = parts.find(i => i.types.includes('neighborhood'))?.long_name
    const _city = parts.find(i => i.types.includes('locality'))?.long_name
    const _county = parts.find(i => i.types.includes('administrative_area_level_2'))?.long_name
    const _state = parts.find(i => i.types.includes('administrative_area_level_1'))?.long_name
    const _zip = parts.find(i => i.types.includes('postal_code'))?.long_name

    if (_streetNumber && _route) streetAddress.value = `${_streetNumber} ${_route}` // TODO: Could be error prone
    if (_neighborhood) neighborhood.value = _neighborhood
    if (_city) city.value = _city
    if (_county) county.value = _county
    if (_state) state.value = _state
    if (_zip) zip.value = _zip
  }

  function handleAddressDeSelected() {
    setValue(null)
    latitude.value = null
    longitude.value = null
    streetAddress.value = null
    neighborhood.value = null
    city.value = null
    county.value = null
    state.value = null
    zip.value = null
  }

  // console.log('API KEY: ', API_KEY)

  return (
    <>
      {value ? (
        <p
          className=""
          style={{
            fontWeight: 'bold',
            display: 'flex',
            gap: '1rem',
            fontSize: '1.5rem',
            alignItems: 'center',
          }}
        >
          Address Selected: {value}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ width: '1.5rem', height: '1.5rem', color: 'red', cursor: 'pointer' }}
            onClick={() => handleAddressDeSelected()}
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              clipRule="evenodd"
            />
          </svg>
        </p>
      ) : (
        <p
          style={{
            fontWeight: 'bold',
            display: 'flex',
            gap: '1rem',
            fontSize: '1.5rem',
            alignItems: 'center',
          }}
        >
          Search for an address below...
        </p>
      )}
      <APIProvider apiKey={API_KEY}>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '2rem' }}>
          <label htmlFor={'Address'}>
            Property Address <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            placeholder="Address"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAddressQuery(e.target.value)
            }}
            value={addressQuery}
            style={{ padding: '1rem' }}
          />
          <AddressSearch addyQueryString={debouncedInputValue} setAddyList={setAddressList} />
          {addressList &&
            addressList.results.map(r => (
              <div
                className="bg-gray-300 hover:bg-gray-200 rounded-md p-4 cursor-pointer"
                onClick={() => {
                  handleAddressSelected(r)
                }}
                key={r.place_id}
              >
                <p>{r.formatted_address}</p>
              </div>
            ))}
        </div>
      </APIProvider>
    </>
  )
}
