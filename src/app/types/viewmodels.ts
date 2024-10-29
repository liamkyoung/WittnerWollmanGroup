import { Listing, Media, Project } from '@/payload/payload-types'

export type Socials = {
  linkedin: SocialMediaInfo
  twitter: SocialMediaInfo
  facebook: SocialMediaInfo
  instagram: SocialMediaInfo
  address: string
  phoneNumber: string
  email: string
}

export type SocialMediaInfo = {
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

export type NavGrouping = {
  title: string
  relLink: string
  subNavigation?: NavGrouping[]
}

export type MapSettings = {
  mapCenter: MapCoords
}

export type MapCoords = {
  lat: number
  lng: number
}

export type GoogleMapPin = {
  name: string
  coords: MapCoords
  slug: string
  coverImg?: Media
  address?: string
  price?: number
}
