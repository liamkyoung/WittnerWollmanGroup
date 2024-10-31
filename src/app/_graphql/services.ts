import {
  ARCHIVE_BLOCK,
  CALL_TO_ACTION,
  CONTENT,
  CONTENT_AND_STATS_BLOCK,
  MEDIA_BLOCK,
  PROJECT_BLOCK,
  STAT_BLOCK,
  STATS_AND_VIDEO_BLOCK,
} from './blocks'
import { LINK_FIELDS } from './link'
import { MEDIA } from './media'
import { META } from './meta'

export const SERVICES = `
  query Services {
    Services(limit: 300) {
      docs {
        slug
      }
    }
  }
`

export const SERVICE = `
query Services($slug: String) {
    Services(where: { slug: { equals: $slug }}, limit: 1) {
      docs {
        id
        slug
        title
        shortDescription
        hero {
          type
          richText
          headerText
          links {
            link ${LINK_FIELDS()}
          }
          ${MEDIA}
        }
        layout {
          ${CONTENT}
          ${CALL_TO_ACTION}
          ${CONTENT}
          ${MEDIA_BLOCK}
          ${PROJECT_BLOCK}
          ${ARCHIVE_BLOCK}
          ${STATS_AND_VIDEO_BLOCK}
          ${CONTENT_AND_STATS_BLOCK}
          ${STAT_BLOCK}
        }
        ${META}
      }
    }
  }
`
