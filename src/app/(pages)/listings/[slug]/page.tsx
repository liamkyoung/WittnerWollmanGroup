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
import AdminAddressSearch from '@/app/customComponents/GoogleMap/AdminAddressSearch'
import { CallToActionBlock } from '@/app/_blocks/CallToAction'
import { ProjectBlock } from '@/app/_blocks/ProjectBlock'
import { formatDollarAmount } from '@/app/_utilities/formatDollarAmount'
import { Blocks } from '@/app/_components/Blocks'
import ListingCTA from '@/app/customComponents/Listings/ListingCTA'
import { Teammate } from '../../../../payload/payload-types'

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
    layout,
  } = listing

  const agent = agents && agents.length > 0 ? agents[0] : null
  return (
    <>
      <div className="global-margin-x mt-24 space-y-24">
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
        <Blocks blocks={[...layout]} />
        {/* {overview && coverImage && streetAddress && (
          <ProjectBlock
            title={title}
            location={streetAddress}
            media={coverImage}
            bgColor={'white'}
            position={'left'}
            description={overview}
          />
        )} */}

        <Features
          sqFtLand={sqFtLand}
          sqFt={sqFt}
          yearBuilt={yearBuilt}
          bedrooms={bedCount}
          bathrooms={bathroomCount}
          area={neighborhood}
          zipCode={zipCode}
          price={formatDollarAmount(price)}
          propertyType={propertyType}
          status={'Active'}
          zoningType={'Placeholder'}
          occupany={occupancy}
        />
      </div>
      {agent && <ListingCTA agent={agent as Teammate} address={streetAddress} />}
    </>
  )
  //   return <div>This is a Listing {slug}</div>
}

export async function generateStaticParams() {
  try {
    const listings = await fetchDocs<Listing>('listings')
    // console.log('listings: ', listings)
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
