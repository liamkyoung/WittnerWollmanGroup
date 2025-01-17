import {
  ARCHIVE_BLOCK,
  CONTENT,
  MEDIA_BLOCK,
  PROJECT_BLOCK,
  STAT_BLOCK,
  STATS_AND_VIDEO_BLOCK,
} from './blocks'
import { COVERIMAGE, IMAGE, LISTING_FLYER } from './media'
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
        propertyTypes
        propertySubtype
        sqFt
        neighborhood
        sqFtLand
        sqFtLot
        bathroomCount
        bedCount
        isPriceNegotiable
        price
        rentalPrice
        paymentFrequency
        listingType
        ${LISTING_FLYER}
        zillowLink
        virtualTourLink
        yearBuilt
        yearRenovated
        overview
        areaOverview
        fullDescription
        tenancyType
        occupancy
        zoningType
        buildingClass
        highlights {
          highlightText
        }
        heat
        cool
        electricity
        water
        waste
        sewer
        internet
        lighting
        hasParking
        parkingDescription
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
query ListingsByAgents($agentIds: [JSON]!, $limit: Int = 100) {
  Listings(limit: $limit, where: { agents: { in: $agentIds } }) {
    docs {
      id
      slug
      title
      streetAddress
      propertyTypes
      propertySubtype
      latitude
      longitude
      propertyTypes
      sqFt
      sqFtLand
      paymentFrequency
      sqFtLot
      bathroomCount
      bedCount
      price
      rentalPrice
      isPriceNegotiable
      ${COVERIMAGE}
    }
  }
}
`
