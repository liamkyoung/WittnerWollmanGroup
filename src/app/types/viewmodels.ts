import type { Media } from '../../payload/payload-types'

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
