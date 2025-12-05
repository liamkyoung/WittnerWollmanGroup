/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-implicit-any-catch */
import type { Settings } from '../../payload/payload-types'
import { SETTINGS_QUERY } from '../_graphql/globals'
import { GRAPHQL_API_URL } from './shared'

export async function fetchSettings(): Promise<Settings | null> {
  if (!GRAPHQL_API_URL) {
    console.error('fetchSettings: GRAPHQL_API_URL / NEXT_PUBLIC_SERVER_URL not found') // eslint-disable-line no-console
    throw new Error('GRAPHQL_API_URL not configured')
  }

  let res: Response
  try {
    res = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: SETTINGS_QUERY,
      }),
    })
  } catch (err) {
    // eslint-disable-line no-console
    console.error('fetchSettings: network error while calling GraphQL API', {
      error: (err as any)?.message ?? String(err),
    }) // eslint-disable-line no-console
    throw new Error('Failed to fetch settings from GraphQL API')
  }

  if (!res.ok) {
    let bodyText = ''
    try {
      bodyText = await res.text()
    } catch {
      // ignore body parse issues
    }

    console.error('fetchSettings: non-OK HTTP response from GraphQL API', {
      status: res.status,
      statusText: res.statusText,
      body: bodyText?.slice(0, 1000),
    }) // eslint-disable-line no-console

    throw new Error(
      `GraphQL request failed when fetching settings: ${res.status} ${res.statusText}`,
    )
  }

  let json: any
  try {
    json = await res.json()
  } catch (err) {
    console.error('fetchSettings: failed to parse JSON from GraphQL API', {
      status: res.status,
      statusText: res.statusText,
      error: (err as any)?.message ?? String(err),
    }) // eslint-disable-line no-console
    throw new Error('Invalid JSON response when fetching settings')
  }

  const errors = Array.isArray(json?.errors) ? json.errors : []
  if (errors.length > 0) {
    console.error('fetchSettings: GraphQL returned errors', {
      errors,
    }) // eslint-disable-line no-console

    const firstMessage = errors[0]?.message ?? errors[0]?.toString?.() ?? 'Error fetching settings'

    throw new Error(firstMessage)
  }

  const settings = json?.data?.Settings ?? null

  if (!settings) {
    console.warn('fetchSettings: Settings missing or null in GraphQL response', {
      receivedData: json?.data,
    }) // eslint-disable-line no-console
    return null
  }

  return settings as Settings
}

// export async function fetchHeader(): Promise<Header> {
//   if (!GRAPHQL_API_URL) throw new Error('NEXT_PUBLIC_SERVER_URL not found')

//   const header = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: HEADER_QUERY,
//     }),
//   })
//     ?.then(res => {
//       if (!res.ok) throw new Error('Error fetching doc')
//       return res.json()
//     })
//     ?.then(res => {
//       if (res?.errors) throw new Error(res?.errors[0]?.message || 'Error fetching header')
//       return res.data?.Header
//     })

//   return header
// }

// export async function fetchFooter(): Promise<Footer> {
//   if (!GRAPHQL_API_URL) throw new Error('NEXT_PUBLIC_SERVER_URL not found')

//   const footer = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: FOOTER_QUERY,
//     }),
//   })
//     .then(res => {
//       if (!res.ok) throw new Error('Error fetching doc')
//       return res.json()
//     })
//     ?.then(res => {
//       if (res?.errors) throw new Error(res?.errors[0]?.message || 'Error fetching footer')
//       return res.data?.Footer
//     })

//   return footer
// }

export const fetchGlobals = async (): Promise<{
  settings: Settings
  // header: Header
  // footer: Footer
}> => {
  // initiate requests in parallel, then wait for them to resolve
  // this will eagerly start to the fetch requests at the same time
  // see https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
  const settingsData = fetchSettings()
  // const headerData = fetchHeader()
  // const footerData = fetchFooter()

  const [settings]: [Settings] = await Promise.all([
    await settingsData,
    // await headerData,
    // await footerData,
  ])

  return {
    settings,
    // header,
    // footer,
  }
}
