import {
  ARCHIVE_BLOCK,
  CALL_TO_ACTION,
  CONTENT,
  MEDIA_BLOCK,
  PROJECT_BLOCK,
  STATS_AND_VIDEO_BLOCK,
} from './blocks'
import { LINK_FIELDS } from './link'
import { IMAGE, MEDIA } from './media'
import { META } from './meta'

export const PROJECTS = `
  query Projects {
    Projects(limit: 300) {
      docs {
        slug
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
        categories {
          title
        }
        createdAt
        price
        address
        neighborhood
        website
        instagram
        hero {
          type
          richText
          links {
            link ${LINK_FIELDS()}
          }
          ${MEDIA}
        }
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
