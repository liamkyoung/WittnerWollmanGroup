import { Socials, MapSettings } from '@/app/types/viewmodels'

export const DefaultSocials: Socials = {
  phoneNumber: '(813) 456-7890',
  email: 'liamkingstonyoung@gmail.com',
  address: '360 Central Ave, St. Petersburg, FL 33701',
  linkedin: {
    platformName: 'linkedin',
    username: 'liamkyoung',
    profileLink: 'https://www.linkedin.com/in/liamkyoung',
  },
  twitter: {
    platformName: 'twitter',
    username: 'liamkyoung',
    profileLink: 'https://www.x.com/liamkyoung',
  },

  instagram: {
    platformName: 'instagram',
    username: 'liamkyoung',
    profileLink: 'https://www.instagram.com/liamkyoung',
  },
  facebook: {
    platformName: 'facebook',
    username: 'liamkyoung',
    profileLink: 'https://www.facebook.com',
  },
}

export const FakeRealtorSocials: Socials = {
  phoneNumber: '(123) 456-7890',
  email: 'realtor@kw.com',
  address: '123 Happy Drive, St. Petersburg, FL 33701',
  linkedin: {
    platformName: 'linkedin',
    username: 'realtor',
    profileLink: 'https://www.linkedin.com/in/realtor',
  },
  twitter: {
    platformName: 'twitter',
    username: 'realtor',
    profileLink: 'https://www.x.com/realtor',
  },

  instagram: {
    platformName: 'instagram',
    username: 'realtor',
    profileLink: 'https://www.instagram.com/realtor',
  },
  facebook: {
    platformName: 'facebook',
    username: 'realtor',
    profileLink: 'https://www.facebook.com',
  },
}

export const GoogleMapsDefaults: MapSettings = {
  mapCenter: { lat: 27.77, lng: -82.64 },
}

export const NewsletterEmail = 'liamkingstonyoung@gmail.com'
