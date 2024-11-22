import {
  ARCHIVE_BLOCK,
  CONTENT,
  MEDIA_BLOCK,
  PROJECT_BLOCK,
  STAT_BLOCK,
  STATS_AND_VIDEO_BLOCK,
} from './blocks'
import { COVERIMAGE, IMAGE } from './media'
import { LISTING_AGENT } from './teammates'

export const LISTINGS = `
  query Listings {
    Listings(limit: 300) {
      docs {
        slug
      }
    }
  }
`

// TODO: ADD BACK ADDRESS
export const LISTING = `
query Listings($slug: String) {
    Listings(where: { slug: { equals: $slug }}, limit: 1) {
      docs {
        id
        slug
        title
        streetAddress
        zipCode
        city
        latitude
        longitude
        propertyType
        propertySubtype
        sqFt
        neighborhood
        sqFtLand
        sqFtLot
        bathroomCount
        bedCount
        price
        yearBuilt
        overview
        areaOverview
        tenancyType
        occupancy
        zoningType
        ${LISTING_AGENT}
        ${COVERIMAGE}
        imageGallery {
          id
          ${IMAGE}
        }
        layout {
          ${CONTENT}
          ${MEDIA_BLOCK}
          ${PROJECT_BLOCK}
          ${STAT_BLOCK}
          ${STATS_AND_VIDEO_BLOCK}
          ${ARCHIVE_BLOCK}
        }
      }
    }
  }
`

// Must have agentId input as an array (ex: { "agentIds": [2] })
// TODO: ADD BACK ADDRESS
export const LISTINGBYAGENT = `
query ListingsByAgents($agentIds: [JSON]!, $limit: Int = 300) {
  Listings(limit: $limit, where: { agent: { in: $agentIds } }) {
    docs {
      id
      slug
      title
      streetAddress
      latitude
      longitude
      propertyType
      sqFt
      bathroomCount
      bedCount
      price
      ${COVERIMAGE}
    }
  }
}
`
