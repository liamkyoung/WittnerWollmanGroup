import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Blocks } from '../../../../app/_components/Blocks'
import { ListingHero } from '../../../../app/_heros/ListingHero'
import { formatDollarAmount } from '../../../../app/_utilities/formatDollarAmount'
import PhotoGallery from '../../../../app/customComponents/Gallery/PhotoGallery'
import ListingCTA from '../../../../app/customComponents/Listings/ListingCTA'
import { Listing, Media, Teammate } from '../../../../payload/payload-types'
import { fetchDoc } from '../../../_api/fetchDoc'
import { fetchDocs } from '../../../_api/fetchDocs'
import { generateListingMetadata } from '../../../_utilities/generateMeta'
import Features from './Features'
import ProjectBlockLeft from '@/app/_blocks/ProjectBlock/ProjectBlockLeft'

import { CallToActionBlock } from '@/app/_blocks/CallToAction'
import CTA from '@/app/customComponents/CTA'
import { formatPropertyType } from '@/app/_utilities/propertyTypeFormatter'
import { ColorScheme, GoogleMapPin } from '@/app/types/viewmodels'
import { GoogleMap } from '@/app/customComponents/GoogleMap/GoogleMap'

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
    isPriceNegotiable,
    price,
    sqFt,
    streetAddress,
    city,
    address,
    state,
    sqFtLand,
    sqFtLot,
    coverImage,
    propertyType,
    bedCount,
    bathroomCount,
    yearBuilt,
    overview,
    areaOverview,
    tenancyType,
    occupancy,
    zoningType,
    neighborhood,
    latitude,
    longitude,
    zipCode,
    imageGallery,
    agents,
    cool,
    heat,
    lighting,
    electricity,
    water,
    waste,
    sewer,
    internet,
    hasParking,
    parkingSpots,
    buildingClass,
    layout,
  } = listing

  const agent = agents && agents.length > 0 ? agents[0] : null
  const imgs: Media[] = imageGallery
    .map(i => (typeof i.image !== 'number' ? (i.image as Media) : null))
    .filter(i => i !== null)
  const listingPin: GoogleMapPin = {
    name: '',
    coords: {
      lat: latitude,
      lng: longitude,
    },
    slug: slug,
    coverImg: coverImage as Media,
    address: streetAddress,
    price: price,
  }
  //const heroProps: ListingHeroProps = {s,treetAddress: streetAddress, price: price, city: city, zipCode: zipCode, state: state, propertyType: propertyType, sqFt: sqFt}
  return (
    <>
      <div className="global-margin-x mt-24 space-y-24">
        <ListingHero
          streetAddress={streetAddress}
          price={price}
          city={city}
          zipCode={zipCode}
          state={state}
          propertyType={propertyType}
          sqFt={sqFt}
        />
        <PhotoGallery imageGallery={imgs} />
      </div>

      {overview && coverImage && streetAddress && (
        <div className="my-24">
          <ProjectBlockLeft
            title={title}
            subheading={streetAddress}
            subheadingType={'location'}
            image={coverImage as Media}
            colorScheme={ColorScheme.RED}
            description={overview}
          />
        </div>
      )}

      <div className="global-margin-x">
        <Features
          sqFtLand={sqFtLand}
          sqFt={sqFt}
          sqFtLot={sqFtLot}
          yearBuilt={yearBuilt}
          bedrooms={bedCount}
          bathrooms={bathroomCount}
          area={neighborhood}
          zipCode={zipCode}
          isPriceNegotiable={isPriceNegotiable}
          price={price}
          buildingClass={buildingClass}
          propertyType={propertyType}
          status={'Active'}
          zoningType={zoningType}
          occupancy={occupancy}
          cool={cool}
          heat={heat}
          electricity={electricity}
          water={water}
          internet={internet}
          hasParking={hasParking}
          parkingSpots={parkingSpots}
        />
      </div>

      <GoogleMap fullscreen pins={[listingPin]} />

      {agent ? <ListingCTA agent={agent as Teammate} address={streetAddress} /> : <CTA />}
    </>
  )
}

export async function generateStaticParams() {
  try {
    const listings = await fetchDocs<Listing>('listings')
    // console.log('listings: ', listings)
    return listings?.map(({ slug }) => slug)
  } catch (error) {
    // console.log("Couldn't generate listings", error)
    return ['/']
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
