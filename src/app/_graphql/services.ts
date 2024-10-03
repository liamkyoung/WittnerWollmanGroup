import { ARCHIVE_BLOCK, CALL_TO_ACTION, CONTENT, MEDIA_BLOCK, PROJECT_BLOCK } from './blocks'
import { LINK_FIELDS } from './link'
import { MEDIA } from './media'
import { META } from './meta'

export const SERVICES = `
  query Listings {
    Listings(limit: 300) {
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
        longDescription
        hero {
          type
          richText
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
        }
        ${META}
      }
    }
  }
`
