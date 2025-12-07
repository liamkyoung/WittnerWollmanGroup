/* eslint-disable no-console */
import { PROJECTS_BY_AGENT } from '../_graphql/projects'
import { GRAPHQL_API_URL } from './shared'
import { payloadToken } from './token'

export const fetchProjectsByAgent = async <T>(
  agentIds: string[],
  draft?: boolean,
  limit = 100,
): Promise<T[]> => {
  console.log('fetchProjectsByAgent()')
  const token = draft ? (await import('next/headers')).cookies().get(payloadToken) : undefined

  const docs: T[] = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token?.value && draft ? { Authorization: `JWT ${token.value}` } : {}),
    },
    body: JSON.stringify({
      query: PROJECTS_BY_AGENT,
      variables: {
        agentIds,
        limit,
      },
    }),
  })
    .then(res => res.json())
    .then(res => {
      console.log('fetchProjectsByAgent().then().then()')
      if (res.errors) {
        throw new Error(res.errors[0]?.message || 'Error fetching projects')
      }
      return res.data?.Projects?.docs || []
    })

  return docs
}
