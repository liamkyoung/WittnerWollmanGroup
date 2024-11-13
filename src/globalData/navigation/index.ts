import type { NavGrouping } from '../../app/types/viewmodels'
import { AboutLinks } from './about/about'
import { CommunityLinks } from './community/community'
import { ListingLinks } from './listings/listings'
import { ServiceLinks } from './services/services'

export const InternalLinks: NavGrouping[] = [ServiceLinks, ListingLinks, AboutLinks, CommunityLinks]
