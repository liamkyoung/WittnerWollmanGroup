import type { NavGrouping } from '../app/types/viewmodels'

const Services: NavGrouping = {
  title: 'Services',
  relLink: '/services',
  subNavigation: [
    {
      title: 'Leasing',
      relLink: '/services/leasing',
    },
    {
      title: 'Sales',
      relLink: '/services/sales',
    },
    {
      title: 'Acquisition',
      relLink: '/services/acquisition',
    },
    {
      title: 'Consulting',
      relLink: '/services/consulting',
    },
  ],
}

const Listings: NavGrouping = {
  title: 'Listings',
  relLink: '/listings',
}

const About: NavGrouping = {
  title: 'About Us',
  relLink: '/teammates',
  subNavigation: [
    {
      title: 'Our Team',
      relLink: '/teammates',
    },
    {
      title: 'Our Projects',
      relLink: '/projects',
    },
    {
      title: 'Involvement',
      relLink: '/involvement',
    },
  ],
}

const Projects: NavGrouping = {
  title: 'Projects',
  relLink: '/projects',
  subNavigation: [
    {
      title: 'Reflection',
      relLink: '/projects/reflection',
    },
    {
      title: 'The Factory',
      relLink: '/projects/reflection',
    },
  ],
}

const Community: NavGrouping = {
  title: 'Community',
  relLink: '/news',
  subNavigation: [
    {
      title: 'News',
      relLink: '/news',
    },
    {
      title: 'Resources',
      relLink: '/community-resources',
    },
  ],
}

export const InternalLinks: NavGrouping[] = [Services, Listings, About, Projects, Community]
