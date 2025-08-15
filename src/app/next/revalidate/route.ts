import { revalidateTag } from 'next/cache'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function GET(request: NextRequest): Promise<Response> {
  const collection = request.nextUrl.searchParams.get('collection')
  const slug = request.nextUrl.searchParams.get('slug')
  const secret = request.nextUrl.searchParams.get('secret')

  if (
    !secret ||
    secret !== process.env.REVALIDATION_KEY ||
    typeof collection !== 'string' ||
    typeof slug !== 'string'
  ) {
    console.log('Revalidation request failed - invalid parameters') // eslint-disable-line no-console
    return new Response('Invalid request', { status: 400 })
  }

  if (typeof collection === 'string' && typeof slug === 'string') {
    revalidateTag(`${collection}_${slug}`)
    return NextResponse.json({ revalidated: true, now: Date.now() })
  }

  return NextResponse.json({ revalidated: false, now: Date.now() })
}
