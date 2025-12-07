/* eslint-disable no-console */
import { LISTINGBYAGENT } from '../_graphql/listings'
import { GRAPHQL_API_URL } from './shared'
import { payloadToken } from './token'

export const fetchListingsByAgent = async <T>(
  agentIds: string[],
  draft?: boolean,
  limit = 100,
): Promise<T[]> => {
  console.log('fetchListingsByAgent()')
  const token = draft ? (await import('next/headers')).cookies().get(payloadToken) : undefined

  const docs: T[] = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
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
    .then(res => res.json())
    .then(res => {
      console.log('fetchListingsByAgent().then().then()')
      if (res.errors) {
        throw new Error(res.errors[0]?.message || 'Error fetching listings')
      }
      return res.data?.Listings?.docs || []
    })

  return docs
}
