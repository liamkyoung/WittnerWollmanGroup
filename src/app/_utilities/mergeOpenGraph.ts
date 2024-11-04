import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'Wittner Wollman Group',
  title: 'Wittner Wollman Group',
  description:
    'We are the premier real estate team in the Tampa Bay Area and St. Pete. Meet the team that will help you ',
  images: [
    {
      url: 'https://ww-group.nyc3.cdn.digitaloceanspaces.com/ww-logo.png',
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
