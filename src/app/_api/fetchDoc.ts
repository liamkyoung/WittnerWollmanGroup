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
  const { collection, slug, draft } = args || {}

  const cfg = queryMap[collection]
  if (!cfg) throw new Error(`Collection ${collection as string} not found`)

  let token: RequestCookie | undefined

  if (draft) {
    const { cookies } = await import('next/headers')
    token = cookies().get(payloadToken)
  }

  const res = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token?.value && draft ? { Authorization: `JWT ${token.value}` } : {}),
    },
    next: { tags: [`${collection}_${slug}`] },
    body: JSON.stringify({
      query: cfg.query,
      variables: {
        slug,
        draft,
      },
    }),
  })

  let json: any
  try {
    json = await res.json()
  } catch (e) {
    throw new Error(`Failed to parse GraphQL JSON for ${collection}: ${String(e)}`)
  }

  if (Array.isArray(json?.errors) && json.errors.length > 0) {
    throw new Error(json.errors[0]?.message ?? `Error fetching ${collection}`)
  }

  const root = json?.data?.[cfg.key]
  if (!root || !Array.isArray(root.docs) || !root.docs[0]) {
    throw new Error(`Document not found for collection "${collection}" slug="${slug}"`)
  }

  return root.docs[0] as T
}
