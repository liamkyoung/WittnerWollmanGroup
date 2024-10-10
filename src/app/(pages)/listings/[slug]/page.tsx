import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Listing } from '../../../../payload/payload-types'
import { fetchDoc } from '../../../_api/fetchDoc'
import { fetchDocs } from '../../../_api/fetchDocs'
import { generateListingMetadata } from '../../../_utilities/generateMeta'
import Image from 'next/image'
import { ListingHero } from '@/app/_heros/ListingHero'
import PhotoGallery from '@/app/customComponents/Gallery/PhotoGallery'
import Features from './Features'
import { GoogleMap } from '@/app/customComponents/GoogleMap/GoogleMap'

export const dynamic = 'force-dynamic'

export default async function Page({ params: { slug } }) {
  const { isEnabled: isDraftMode } = draftMode()
  let listing: Listing | null = null
  try {
    listing = await fetchDoc<Listing>({
      collection: 'listings',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {
    console.error(error) // eslint-disable-line no-console
  }
  if (!listing) {
    notFound()
  }
  const {
    title,
    price,
    sqFt,
    streetAddress,
    city,
    address,
    sqFtLand,
    coverImage,
    propertyType,
    bedCount,
    bathroomCount,
    yearBuilt,
    areaOverview,
    tenancyType,
    occupancy,
    zoningType,
    neighborhood,
    latitude,
    longitude,
    zipCode,
    imageGallery,
  } = listing
  return (
    <div className="global-margin-x mt-24">
      <GoogleMap />
      {/* {typeof coverImage !== 'number' && (
        <Image
          height={200}
          width={200}
          src={`/media/${coverImage.filename}`}
          alt={coverImage.alt}
          className="rounded-full"
        />
      )} */}
      <ListingHero
        streetAddress={streetAddress}
        price={price}
        city={city}
        zipCode={zipCode}
        state={'FL'}
        propertyType={propertyType}
        sqFt={sqFt}
      />
      <PhotoGallery imageGallery={imageGallery} />
      <Features
        sqFtLand={sqFtLand}
        sqFt={sqFt}
        yearBuilt={yearBuilt}
        bedrooms={bedCount}
        bathrooms={bathroomCount}
        area={neighborhood}
        zipCode={zipCode}
        price={price}
        propertyType={propertyType}
        status={'Active'}
        zoningType={'Placeholder'}
        occupany={occupancy}
      />
      {/* <h1 className="text-xl">Name: {title}</h1>
      <p className="text-red-100">${price}</p> */}
      {/* <p>{streetAddress}</p>
      <p>{zipCode}</p>
      <p>
        {latitude} LAT <b>MISSING</b>
      </p>
      <p>
        {longitude} LONG <b>MISSING</b>
      </p>
      <p>Neighborhood {neighborhood}</p>
      <p>{sqFt} sqft</p>
      <p>{sqFtLand} land sqft</p>
      <p>{propertyType}</p>
      <p>Beds {bedCount}</p>
      <p>Baths: {bathroomCount}</p>
      <p>Year Built: {yearBuilt}</p>
      <p>Area Overview: {areaOverview}</p>
      <p>Tenancy Type: {tenancyType}</p>
      <p>Occupancy: {occupancy}%</p>
      <p>Zoning Type: {zoningType}</p>
      <p>
        Image Gallery <b>MISSING</b>
      </p> */}
    </div>
  )
  //   return <div>This is a Listing {slug}</div>
}

export async function generateStaticParams() {
  try {
    const listings = await fetchDocs<Listing>('listings')
    console.log('listings: ', listings)
    return listings?.map(({ slug }) => slug)
  } catch (error) {
    console.log("Couldn't generate listings", error)
    return []
  }
}

export async function generateMetadata({ params: { slug } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let listing: Listing | null = null

  try {
    listing = await fetchDoc<Listing>({
      collection: 'listings',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {}

  // console.log(Listing)
  return generateListingMetadata({ doc: listing })
}
