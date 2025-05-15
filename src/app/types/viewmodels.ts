import type { Listing, Media, Teammate } from '../../payload/payload-types'

// COULD BREAK IF UNDERLYING Listing Type changes
export interface ListingCardDTO {
  id: number
  slug?: string | null
  title: string
  address: string
  sqFt?: number | null
  sqFtLand?: number | null
  sqFtLot?: number | null
  bedCount?: number | null
  bathroomCount?: number | null
  coverImage: number | Media
  price?: number | null
  isPriceNegotiable: boolean
  listingType?: ('forSale' | 'lease' | 'forSaleLease') | null
  paymentFrequency?: ('oneTime' | 'dollarPerSqPerYear' | 'monthly' | 'yearly') | null
  latitude?: number | null
  longitude?: number | null
  updatedAt: string
  agents?: Array<number | Teammate> | null
  propertyTypes?:
    | (
        | 'singleFamily'
        | 'multiFamily'
        | 'townhouse'
        | 'condo'
        | 'co-op'
        | 'apt'
        | 'mobileHome'
        | 'vacationHome'
        | 'seniorLivingHome'
        | 'shoppingCenter'
        | 'bizOpportunity'
        | 'office'
        | 'retail'
        | 'industrial'
        | 'mixedUse'
        | 'hotel'
        | 'motel'
        | 'restaurant'
        | 'healthcareFacility'
        | 'storageUnit'
        | 'vacantLand'
        | 'agriculturalLand'
        | 'timberland'
        | 'ranchLand'
        | 'recreationalLand'
        | 'developmentLand'
        | 'religion'
        | 'school'
        | 'university'
        | 'governmentBuilding'
        | 'cemetery'
        | 'airport'
        | 'utility'
        | 'reit'
        | 'rentalProperty'
        | 'fixAndFlip'
      )
    | null
}

export function toListingCardDTO(listing: Listing): ListingCardDTO {
  return {
    id: listing.id,
    slug: listing.slug, // you may need to create this yourself
    title: listing.title,
    address: listing.address,
    sqFt: listing.sqFt ?? null, // only if it's part of Listing
    sqFtLand: listing.sqFtLand ?? null,
    sqFtLot: listing.sqFtLot ?? null,
    bedCount: listing.bedCount ?? null,
    bathroomCount: listing.bathroomCount ?? null,
    coverImage: listing.coverImage,
    price: listing.price ?? null,
    isPriceNegotiable: listing.isPriceNegotiable,
    listingType: listing.listingType ?? null,
    paymentFrequency: listing.paymentFrequency ?? null,
    latitude: listing.latitude ?? null,
    longitude: listing.longitude ?? null,
    updatedAt: listing.updatedAt,
    agents: listing.agents ?? null,
    propertyTypes: listing.propertyTypes ?? null,
  }
}

export interface Socials {
  linkedin?: SocialMediaInfo
  twitter?: SocialMediaInfo
  facebook: SocialMediaInfo
  instagram: SocialMediaInfo
  address: string
  phoneNumber: string
  email: string
}

export interface SocialMediaInfo {
  platformName: string
  username: string
  profileLink: string
}

export enum CardSize {
  SMALL,
  MEDIUM,
  LARGE,
  EXTRALARGE,
  HALF_SCREEN,
  FULL_SCREEN,
}

export enum ColorScheme {
  DEFAULT,
  WHITE,
  RED,
  YELLOW,
}

export interface NavGrouping {
  title: string
  relLink: string
  subNavigation?: NavGrouping[]
}

export interface MapSettings {
  mapCenter: MapCoords
}

export interface MapCoords {
  lat: number
  lng: number
}

export interface GoogleMapPin {
  name: string
  coords: MapCoords
  slug: string
  coverImg?: Media
  address?: string
  price?: number
}

export interface FactStat {
  factStat: string
  factDescription: string
  id?: string | null
}

export enum SortListingsEnum {
  NEWEST,
  LEAST_EXPENSIVE,
  MOST_EXPENSIVE,
}

export type PropertyType =
  | 'singleFamily'
  | 'multiFamily'
  | 'townhouse'
  | 'condo'
  | 'co-op'
  | 'apt'
  | 'mobileHome'
  | 'vacationHome'
  | 'seniorLivingHome'
  | 'shoppingCenter'
  | 'bizOpportunity'
  | 'office'
  | 'retail'
  | 'industrial'
  | 'mixedUse'
  | 'hotel'
  | 'motel'
  | 'restaurant'
  | 'healthcareFacility'
  | 'storageUnit'
  | 'vacantLand'
  | 'agriculturalLand'
  | 'timberland'
  | 'ranchLand'
  | 'recreationalLand'
  | 'developmentLand'
  | 'religion'
  | 'school'
  | 'university'
  | 'governmentBuilding'
  | 'cemetery'
  | 'airport'
  | 'utility'
  | 'reit'
  | 'rentalProperty'
  | 'fixAndFlip'
