import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Teammate } from '../../../../payload/payload-types'
import { fetchDoc } from '../../../_api/fetchDoc'
import { fetchDocs } from '../../../_api/fetchDocs'
import { generateTeammateMetadata } from '../../../_utilities/generateMeta'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export default async function Page({ params: { slug } }) {
  const { isEnabled: isDraftMode } = draftMode()
  let teammate: Teammate | null = null
  try {
    teammate = await fetchDoc<Teammate>({
      collection: 'teammates',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {
    console.error(error) // eslint-disable-line no-console
  }
  if (!teammate) {
    notFound()
  }
  const { title, bio } = teammate
  return (
    <div>
      <h1 className="text-3xl">Name: {title}</h1>
      <p>${bio}</p>
    </div>
  )
  // return <div></div>
}

// TODO: Can Remove? Copied from Listings
export async function generateStaticParams() {
  try {
    const teammates = await fetchDocs<Teammate>('teammates')
    console.log('team Members: ', teammates)
    return teammates?.map(({ slug }) => slug)
  } catch (error) {
    console.log("(Couldn't generate teammates)", error)
    return []
  }
}

export async function generateMetadata({ params: { slug } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let teammates: Teammate | null = null

  try {
    teammates = await fetchDoc<Teammate>({
      collection: 'teammates',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {}

  return generateTeammateMetadata({ doc: teammates })
}
