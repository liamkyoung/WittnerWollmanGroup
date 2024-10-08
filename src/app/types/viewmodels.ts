export type Socials = {
  linkedin: string
  twitter: string
  facebook: string
  instagram: string
  address: string
  phoneNumber: string
  email: string
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
