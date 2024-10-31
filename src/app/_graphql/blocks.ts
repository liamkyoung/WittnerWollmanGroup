import { LINK_FIELDS } from './link'
import { BACKGROUND_IMAGE, MEDIA } from './media'
import { META } from './meta'

export const CALL_TO_ACTION = `
...on Cta {
  blockType
  type
}
`

export const CONTENT = `
...on Content {
  blockType
  invertBackground
  columns {
    size
    richText
    enableLink
    link ${LINK_FIELDS()}
  }
}
`

export const MEDIA_BLOCK = `
...on MediaBlock {
  blockType
  invertBackground
  mediaPosition: position
  ${MEDIA}
}
`

export const PROJECT_BLOCK = `
...on ProjectBlock {
  blockType
  invertBackground
  position
  location
  title
  description
  bgColor
  facts {
    factStat
    factDescription
  }
  externalLink
  ${MEDIA}
}
`

export const STATS_AND_VIDEO_BLOCK = `
...on StatsAndVideoBlock {
  blockType
  title
  description
  ${BACKGROUND_IMAGE}
  facts {
    factStat
    factDescription
  }
  youtubeLink
}
`

export const CONTENT_AND_STATS_BLOCK = `
...on ContentAndStatsBlock {
  blockType
  title
  richText
  facts {
    factStat
    factDescription
  }
}
`

export const STAT_BLOCK = `
...on StatBlock {
  blockType
  title
  description
  facts {
    factStat
    factDescription
  }
}
`

export const GOOGLE_MAPS_BLOCK = `
...on GoogleMapsBlock {
  blockType
  locations {
    title
  }
}
`

export const ARCHIVE_BLOCK = `
...on Archive {
  blockType
  introContent
  populateBy
  relationTo
  limit
  selectedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
        ${META}
      }
      ...on Project {
        id
        slug
        title
        ${META}
      }
    }
  }
  populatedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
        ${META}
      }
      ...on Project {
        id
        slug
        title
        ${META}
      }
    }
  }
  populatedDocsTotal
}
`
