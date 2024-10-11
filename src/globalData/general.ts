import { Socials, MapSettings } from '@/app/types/viewmodels'

export const DefaultSocials: Socials = {
  phoneNumber: '(813) 456-7890',
  email: 'wwgroup@kw.com',
  address: '360 Central Ave, St. Petersburg, FL 33701',
  linkedin: 'https://www.linkedin.com',
  twitter: 'https://www.x.com',
  instagram: 'https://www.instagram.com',
  facebook: 'https://www.facebook.com',
}

export const FakeRealtorSocials: Socials = {
  phoneNumber: '(123) 456-7890',
  email: 'realtor@kw.com',
  address: '123 Happy Drive, St. Petersburg, FL 33701',
  linkedin: 'https://www.linkedin.com/realtor',
  twitter: 'https://www.x.com/realtor',
  instagram: 'https://www.instagram.com/realtor',
  facebook: 'https://www.facebook.com/realtor',
}

export const GoogleMapsDefaults: MapSettings = {
  mapCenter: { lat: 27.77, lng: -82.64 },
}
