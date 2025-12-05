import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

import { PROJECTS_BY_AGENT } from '../_graphql/projects'
import { GRAPHQL_API_URL } from './shared'
import { payloadToken } from './token'

export const fetchProjectsByAgent = async <T>(
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
      console.warn('fetchProjectsByAgent: failed to read draft token from cookies', {
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
        query: PROJECTS_BY_AGENT,
        variables: {
          agentIds,
          limit,
        },
      }),
    })
  } catch (err) {
    console.error('fetchProjectsByAgent: network error while calling GraphQL API', {
      agentIds,
      draft,
      limit,
      error: (err as any)?.message ?? String(err),
    })
    throw new Error('Failed to fetch projects by agent from GraphQL API')
  }

  if (!res.ok) {
    let bodyText = ''
    try {
      bodyText = await res.text()
    } catch {
      // ignore body parse errors
    }

    console.error('fetchProjectsByAgent: non-OK HTTP response from GraphQL API', {
      agentIds,
      draft,
      limit,
      status: res.status,
      statusText: res.statusText,
      body: bodyText?.slice(0, 1000),
    })

    throw new Error(
      `GraphQL request failed when fetching projects by agent: ${res.status} ${res.statusText}`,
    )
  }

  let json: any
  try {
    json = await res.json()
  } catch (err) {
    console.error('fetchProjectsByAgent: failed to parse JSON from GraphQL API', {
      agentIds,
      draft,
      limit,
      error: (err as any)?.message ?? String(err),
    })
    throw new Error('Invalid JSON response when fetching projects by agent')
  }

  const errors = Array.isArray(json?.errors) ? json.errors : []
  if (errors.length > 0) {
    console.error('fetchProjectsByAgent: GraphQL returned errors', {
      agentIds,
      draft,
      limit,
      errors,
    })

    const firstMessage =
      errors[0]?.message ?? errors[0]?.toString?.() ?? 'Error fetching projects by agent'

    throw new Error(firstMessage)
  }

  const projectsRoot = json?.data?.Projects
  if (!projectsRoot || !Array.isArray(projectsRoot.docs)) {
    console.warn('fetchProjectsByAgent: Projects.docs missing or invalid in GraphQL response', {
      agentIds,
      draft,
      limit,
      receivedData: json?.data?.Projects,
    })
    // Return empty array instead of undefined to avoid downstream crashes
    return []
  }

  return projectsRoot.docs as T[]
}
