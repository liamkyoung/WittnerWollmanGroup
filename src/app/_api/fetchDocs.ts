import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

import type { Config } from '../../payload/payload-types'
import { PAGES } from '../_graphql/pages'
import { POSTS } from '../_graphql/posts'
import { PROJECTS } from '../_graphql/projects'
import { LISTINGS } from '../_graphql/listings'
import { GRAPHQL_API_URL } from './shared'
import { payloadToken } from './token'
import { TEAMMATES } from '../_graphql/teammates'
import { INVOLVEMENT_GROUPS, INVOLVEMENT_EVENTS } from '../_graphql/involvement'
import { SERVICES } from '../_graphql/services'

// INSERT GROUP QUERIES FOR COLLECTIONS HERE
const queryMap = {
  pages: {
    query: PAGES,
    key: 'Pages',
  },
  posts: {
    query: POSTS,
    key: 'Posts',
  },
  projects: {
    query: PROJECTS,
    key: 'Projects',
  },
  listings: {
    query: LISTINGS,
    key: 'Listings',
  },
  teammates: {
    query: TEAMMATES,
    key: 'Teammates',
  },
  involvementGroups: {
    query: INVOLVEMENT_GROUPS,
    key: 'InvolvementGroups',
  },
  involvementEvents: {
    query: INVOLVEMENT_EVENTS,
    key: 'InvolvementEvents',
  },
  services: {
    query: SERVICES,
    key: 'Services',
  },
}

export const fetchDocs = async <T>(
  collection: keyof Config['collections'],
  draft?: boolean,
  variables?: Record<string, unknown>,
): Promise<T[]> => {
  if (!queryMap[collection]) throw new Error(`Collection ${collection} not found`)

  let token: RequestCookie | undefined

  if (draft) {
    const { cookies } = await import('next/headers')
    token = cookies().get(payloadToken)
  }

  const docs: T[] = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token?.value && draft ? { Authorization: `JWT ${token.value}` } : {}),
    },
    cache: 'no-store',
    next: { tags: [collection] },
    body: JSON.stringify({
      query: queryMap[collection].query,
      variables,
    }),
  })
    ?.then(res => res.json())
    ?.then(res => {
      if (res.errors) throw new Error(res?.errors?.[0]?.message ?? 'Error fetching docs')

      return res?.data?.[queryMap[collection].key]?.docs
    })

  return docs
}
