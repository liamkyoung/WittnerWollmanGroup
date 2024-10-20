import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Listing, Service } from '../../../../payload/payload-types'
import { fetchDoc } from '../../../_api/fetchDoc'
import { fetchDocs } from '../../../_api/fetchDocs'
import { generateServiceMetadata } from '../../../_utilities/generateMeta'
import Image from 'next/image'
import { ListingHero } from '@/app/_heros/ListingHero'
import PhotoGallery from '@/app/customComponents/Gallery/PhotoGallery'
import { GoogleMap } from '@/app/customComponents/GoogleMap/GoogleMap'
import AdminAddressSearch from '@/app/customComponents/GoogleMap/AdminAddressSearch'
import { Blocks } from '@/app/_components/Blocks'
import { Hero } from '@/app/_components/Hero'

export const dynamic = 'force-dynamic'

export default async function Page({ params: { slug } }) {
  const { isEnabled: isDraftMode } = draftMode()

  let service: Service | null = null
  try {
    service = await fetchDoc<Service>({
      collection: 'services',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {
    console.error(error) // eslint-disable-line no-console
  }
  if (!service) {
    notFound()
  }
  const { title, layout, hero } = service
  return (
    <>
      <Hero {...hero} />
      <Blocks blocks={layout} />
    </>
  )
}

export async function generateStaticParams() {
  try {
    const services = await fetchDocs<Service>('services')
    console.log('services: ', services)
    return services?.map(({ slug }) => slug)
  } catch (error) {
    console.log("Couldn't generate services", error)
    return []
  }
}

export async function generateMetadata({ params: { slug } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let service: Service | null = null

  try {
    service = await fetchDoc<Service>({
      collection: 'services',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {}

  // console.log(Listing)
  return generateServiceMetadata({ doc: service })
}
