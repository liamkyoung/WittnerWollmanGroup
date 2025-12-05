import { LISTINGBYAGENT } from '../_graphql/listings'
import { GRAPHQL_API_URL } from './shared'
import { payloadToken } from './token'
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

export const fetchListingsByAgent = async <T>(
  agentIds: string[],
  draft?: boolean,
  limit = 100,
): Promise<T[]> => {
  let token: RequestCookie | undefined

  if (draft) {
    try {
      const { cookies } = await import('next/headers')
      token = cookies().get(payloadToken)
    } catch (err) {
      console.warn('fetchListingsByAgent: failed to read draft token from cookies', {
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
      body: JSON.stringify({
        query: LISTINGBYAGENT,
        variables: {
          agentIds,
          limit,
        },
      }),
    })
  } catch (err) {
    console.error('fetchListingsByAgent: network error while calling GraphQL API', {
      agentIds,
      draft,
      limit,
      error: (err as any)?.message ?? String(err),
    })
    throw new Error('Failed to fetch listings by agent from GraphQL API')
  }

  if (!res.ok) {
    let bodyText = ''
    try {
      bodyText = await res.text()
    } catch {
      // ignore body parse errors
    }

    console.error('fetchListingsByAgent: non-OK HTTP response from GraphQL API', {
      agentIds,
      draft,
      limit,
      status: res.status,
      statusText: res.statusText,
      body: bodyText?.slice(0, 1000),
    })

    throw new Error(
      `GraphQL request failed when fetching listings by agent: ${res.status} ${res.statusText}`,
    )
  }

  let json: any
  try {
    json = await res.json()
  } catch (err) {
    console.error('fetchListingsByAgent: failed to parse JSON from GraphQL API', {
      agentIds,
      draft,
      limit,
      error: (err as any)?.message ?? String(err),
    })
    throw new Error('Invalid JSON response when fetching listings by agent')
  }

  const errors = Array.isArray(json?.errors) ? json.errors : []
  if (errors.length > 0) {
    console.error('fetchListingsByAgent: GraphQL returned errors', {
      agentIds,
      draft,
      limit,
      errors,
    })

    const firstMessage =
      errors[0]?.message ?? errors[0]?.toString?.() ?? 'Error fetching listings by agent'

    throw new Error(firstMessage)
  }

  const listingsRoot = json?.data?.Listings
  if (!listingsRoot || !Array.isArray(listingsRoot.docs)) {
    console.warn('fetchListingsByAgent: Listings.docs missing or invalid in GraphQL response', {
      agentIds,
      draft,
      limit,
      receivedData: json?.data?.Listings,
    })
    // Return empty array instead of undefined, to avoid downstream crashes
    return []
  }

  return listingsRoot.docs as T[]
}
