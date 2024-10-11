import {
  ARCHIVE_BLOCK,
  CALL_TO_ACTION,
  CONTENT,
  CONTENT_AND_STATS_BLOCK,
  MEDIA_BLOCK,
  PROJECT_BLOCK,
  STATS_AND_VIDEO_BLOCK,
  STAT_BLOCK,
  GOOGLE_MAPS_BLOCK,
} from './blocks'
import { LINK_FIELDS } from './link'
import { MEDIA } from './media'
import { META } from './meta'

export const PAGES = `
  query Pages {
    Pages(limit: 300)  {
      docs {
        slug
      }
    }
  }
`

export const PAGE = `
  query Page($slug: String, $draft: Boolean) {
    Pages(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
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
          ${GOOGLE_MAPS_BLOCK}
        }
        ${META}
      }
    }
  }
`
