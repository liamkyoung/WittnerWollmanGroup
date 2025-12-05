import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

import type { Config } from '../../payload/payload-types'
import { COMMUNITY_RESOURCES } from '../_graphql/communityResources'
import { INVOLVEMENT_EVENTS, INVOLVEMENT_GROUPS } from '../_graphql/involvement'
import { LISTINGS } from '../_graphql/listings'
import { PAGES } from '../_graphql/pages'
import { POSTS } from '../_graphql/posts'
import { PROJECTS } from '../_graphql/projects'
import { SERVICES } from '../_graphql/services'
import { TEAMMATES } from '../_graphql/teammates'
import { GRAPHQL_API_URL } from './shared'
import { payloadToken } from './token'

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
  communityResources: {
    query: COMMUNITY_RESOURCES,
    key: 'CommunityResources',
  },
} as const

export const fetchDocs = async <T>(
  collection: keyof Config['collections'],
  draft?: boolean,
  variables?: Record<string, unknown>,
): Promise<T[]> => {
  const cfg = queryMap[collection as keyof typeof queryMap]

  if (!cfg) {
    console.error('fetchDocs: unknown collection', { collection })
    throw new Error(`Collection ${String(collection)} not found`)
  }

  let token: RequestCookie | undefined

  if (draft) {
    try {
      const { cookies } = await import('next/headers')
      token = cookies().get(payloadToken)
    } catch (err) {
      // In some contexts (edge / non-request), cookies() may not be available
      console.warn('fetchDocs: failed to read draft token from cookies', {
        collection,
        error: (err as any)?.message ?? String(err),
      })
    }
  }

  let res: Response
  try {
    res = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token?.value && draft ? { Authorization: `JWT ${token.value}` } : {}),
      },
      next: { tags: [collection] },
      body: JSON.stringify({
        query: cfg.query,
        variables,
      }),
    })
  } catch (err) {
    console.error('fetchDocs: network error while calling GraphQL API', {
      collection,
      draft,
      variables,
      error: (err as any)?.message ?? String(err),
    })
    throw new Error(`Failed to fetch ${String(collection)} from GraphQL API`)
  }

  if (!res.ok) {
    let bodyText = ''
    try {
      bodyText = await res.text()
    } catch {
      // ignore body parse errors
    }

    console.error('fetchDocs: non-OK HTTP response from GraphQL API', {
      collection,
      draft,
      variables,
      status: res.status,
      statusText: res.statusText,
      body: bodyText?.slice(0, 1000), // avoid huge logs
    })

    throw new Error(
      `GraphQL request failed for ${String(collection)}: ${res.status} ${res.statusText}`,
    )
  }

  let json: any
  try {
    json = await res.json()
  } catch (err) {
    console.error('fetchDocs: failed to parse JSON from GraphQL API', {
      collection,
      draft,
      variables,
      error: (err as any)?.message ?? String(err),
    })
    throw new Error(`Invalid JSON response when fetching ${String(collection)} docs`)
  }

  const errors = Array.isArray(json?.errors) ? json.errors : []
  if (errors.length > 0) {
    console.error('fetchDocs: GraphQL returned errors', {
      collection,
      draft,
      variables,
      errors,
    })

    const firstMessage =
      errors[0]?.message ?? errors[0]?.toString?.() ?? `Error fetching ${String(collection)} docs`

    throw new Error(firstMessage)
  }

  const dataKey = cfg.key
  const root = json?.data?.[dataKey]

  if (!root || !Array.isArray(root.docs)) {
    console.warn('fetchDocs: docs array missing or invalid in GraphQL response', {
      collection,
      draft,
      variables,
      dataKey,
      receivedData: json?.data?.[dataKey],
    })
    // Return empty array instead of undefined to avoid downstream crashes
    return []
  }

  return root.docs as T[]
}
