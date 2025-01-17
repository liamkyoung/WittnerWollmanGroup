import type { NavGrouping } from '../../../app/types/viewmodels'

export const ProjectLinks: NavGrouping = {
  title: 'Featured Deals',
  relLink: '/projects',
}

export const ReflectionLink: NavGrouping = {
  title: 'Reflection',
  relLink: '/projects/reflection',
}

export const TheFactoryLink: NavGrouping = {
  title: 'The Factory',
  relLink: '/projects/reflection',
}

export const Projects: NavGrouping = {
  title: 'Featured Deals',
  relLink: '/projects',
  subNavigation: [ReflectionLink, TheFactoryLink],
}
