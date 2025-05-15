import type { NavGrouping } from '../../../app/types/viewmodels'

export const NewsLink: NavGrouping = {
  title: 'News',
  relLink: 'https://blog.wittnerwollman.com',
}

export const CommunityResourcesLink: NavGrouping = {
  title: 'Community Resources',
  relLink: '/community-resources',
}

export const CommunityLinks: NavGrouping = {
  title: 'Community',
  relLink: 'https://blog.wittnerwollman.com',
  subNavigation: [NewsLink, CommunityResourcesLink],
}
