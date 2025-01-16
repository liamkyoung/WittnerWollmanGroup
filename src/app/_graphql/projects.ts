import {
  ARCHIVE_BLOCK,
  CALL_TO_ACTION,
  CONTENT,
  MEDIA_BLOCK,
  PROJECT_BLOCK,
  STATS_AND_VIDEO_BLOCK,
} from './blocks'
import { IMAGE } from './media'
import { META } from './meta'

export const PROJECTS = `
  query Projects {
    Projects(limit: 300) {
      docs {
        id
        slug
        title
        latitude
        longitude
      }
    }
  }
`

export const PROJECT = `
  query Project($slug: String, $draft: Boolean) {
    Projects(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        createdAt
        price
        address
        neighborhood
        latitude
        longitude
        website
        instagram
        slider {
          id
          title
          caption
          ${IMAGE}
        }
        layout {
          ${CONTENT}
          ${CALL_TO_ACTION}
          ${CONTENT}
          ${MEDIA_BLOCK}
          ${PROJECT_BLOCK}
          ${STATS_AND_VIDEO_BLOCK}
          ${ARCHIVE_BLOCK}
        }
        ${META}
      }
    }
  }
`

// ADD BACK TO GET RELATED PROJECTS
// relatedProjects {
//   id
//   slug
//   title
//   ${META}
// }
