import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Project } from '../../../../payload/payload-types'
import { fetchDoc } from '../../../_api/fetchDoc'
import { fetchDocs } from '../../../_api/fetchDocs'
import { RelatedPosts } from '../../../_blocks/RelatedPosts'
import { Blocks } from '../../../_components/Blocks'
import { generateMeta } from '../../../_utilities/generateMeta'
import { SingularProjectHero } from '../../../customComponents/Projects/SingularProjectHero'

import { GoogleMap } from '@/app/customComponents/GoogleMap/GoogleMap'
import { GoogleMapPin } from '@/app/types/viewmodels'

// Force this page to be dynamic so that Next.js does not cache it
// See the note in '../../../[slug]/page.tsx' about this
export const dynamic = 'force-dynamic'

export default async function Project({ params: { slug } }) {
  const { isEnabled: isDraftMode } = draftMode()

  let project: Project | null = null

  try {
    project = await fetchDoc<Project>({
      collection: 'projects',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {
    console.error(error) // eslint-disable-line no-console
  }

  if (!project) {
    notFound()
  }

  const { layout, title, latitude, longitude } = project

  const pin: GoogleMapPin = {
    name: title,
    coords: { lat: latitude, lng: longitude },
    coverImg: null,
    slug: slug,
  }

  return (
    <React.Fragment>
      <SingularProjectHero project={project} />
      <Blocks blocks={[...layout]} />
      <GoogleMap fullscreen pins={[pin]} zoom="far" pinType="project" />
    </React.Fragment>
  )
}

export async function generateStaticParams() {
  try {
    const projects = await fetchDocs<Project>('projects')
    return projects?.map(({ slug }) => slug)
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params: { slug } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let project: Project | null = null

  try {
    project = await fetchDoc<Project>({
      collection: 'projects',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {}

  return generateMeta({ doc: project })
}
