import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Listing } from '../../../../payload/payload-types'
import { fetchDoc } from '../../../_api/fetchDoc'
import { fetchDocs } from '../../../_api/fetchDocs'
import { generateListingMetadata } from '../../../_utilities/generateMeta'
import Image from 'next/image'

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
  const { title, price, sqFt, coverImage } = listing
  return (
    <div>
      <h1 className="text-3xl">Name: {title}</h1>
      <p>${price}</p>
      <p>{sqFt} sqft</p>
      {typeof coverImage !== 'number' && (
        <Image
          height={200}
          width={200}
          src={`/media/${coverImage.filename}`}
          alt={coverImage.alt}
          className="rounded-full"
        />
      )}
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
