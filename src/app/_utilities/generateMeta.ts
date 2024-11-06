import type { Metadata } from 'next'

import type { Listing, Page, Post, Project, Service, Teammate } from '../../payload/payload-types'
import { mergeOpenGraph } from './mergeOpenGraph'

export const generateMeta = async (args: { doc: Page | Project | Post }): Promise<Metadata> => {
  const { doc } = args || {}

  const ogImage =
    typeof doc?.meta?.image === 'object' &&
    doc?.meta?.image !== null &&
    'url' in doc?.meta?.image &&
    `${process.env.NEXT_PUBLIC_SERVER_URL}${doc.meta.image.url}`

  return {
    title: doc?.meta?.title || 'Wittner Wollman Group',
    description: doc?.meta?.description,
    openGraph: mergeOpenGraph({
      title: doc?.meta?.title || 'Wittner Wollman Group Website',
      description: doc?.meta?.description,
      url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
    }),
  }
}

export const generateTeammateMetadata = async (args: { doc: Teammate }): Promise<Metadata> => {
  const { doc } = args || {}

  return {
    title: `${doc?.title} | Wittner Wollman Group`,
    description: doc?.bio,
  }
}

export const generateListingMetadata = async (args: { doc: Listing }): Promise<Metadata> => {
  const { doc } = args || {}

  return {
    title: `${doc?.title} | ${doc?.streetAddress}`,
    description: `Learn more about the listing ${doc?.title} at ${doc?.streetAddress}`,
  }
}

export const generateServiceMetadata = async (args: { doc: Service }): Promise<Metadata> => {
  const { doc } = args || {}

  return {
    title: `${doc?.title} Service | Wittner Wollman Group`,
    description: `Learn more about ${doc?.title}`,
  }
}
