/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-implicit-any-catch */
/* eslint-disable no-console */
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

import type { Config } from '../../payload/payload-types'
import { LISTING } from '../_graphql/listings'
import { PAGE } from '../_graphql/pages'
import { POST } from '../_graphql/posts'
import { PROJECT } from '../_graphql/projects'
import { SERVICE } from '../_graphql/services'
import { TEAMMATE } from '../_graphql/teammates'
import { GRAPHQL_API_URL } from './shared'
import { payloadToken } from './token'

// INSERT SINGLUAR QUERIES FOR COLLECTIONS HERE
const queryMap = {
  pages: {
    query: PAGE,
    key: 'Pages',
  },
  posts: {
    query: POST,
    key: 'Posts',
  },
  projects: {
    query: PROJECT,
    key: 'Projects',
  },
  listings: {
    query: LISTING,
    key: 'Listings',
  },
  teammates: {
    query: TEAMMATE,
    key: 'Teammates',
  },
  services: {
    query: SERVICE,
    key: 'Services',
  },
}

export const fetchDoc = async <T>(args: {
  collection: keyof Config['collections']
  slug?: string
  id?: string
  draft?: boolean
}): Promise<T> => {
  console.log('fetchDoc')
  const { collection, slug, draft } = args || {}

  if (!queryMap[collection]) throw new Error(`Collection ${collection} not found`)

  console.log(`fetchDocs::${collection}`)

  let token: RequestCookie | undefined

  if (draft) {
    const { cookies } = await import('next/headers')
    token = cookies().get(payloadToken)
  }

  const doc: T = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token?.value && draft ? { Authorization: `JWT ${token.value}` } : {}),
    },
    next: { tags: [`${collection}_${slug}`] },
    body: JSON.stringify({
      query: queryMap[collection].query,
      variables: {
        slug,
        draft,
      },
    }),
  })
    ?.then(res => res.json())
    ?.then(res => {
      console.log('fetchDoc.then().then()')
      if (res.errors) throw new Error(res?.errors?.[0]?.message ?? 'Error fetching doc')
      return res?.data?.[queryMap[collection].key]?.docs?.[0]
    })

  return doc
}
