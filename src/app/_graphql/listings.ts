import { COVERIMAGE, IMAGE } from './media'

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
        sqFt
        neighborhood
        sqFtLand
        bathroomCount
        bedCount
        price
        yearBuilt
        areaOverview
        tenancyType
        occupancy
        zoningType
        ${COVERIMAGE}
        imageGallery {
          id
          ${IMAGE}
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
