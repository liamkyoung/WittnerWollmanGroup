import { LINK_FIELDS } from './link'
import { BACKGROUND_IMAGE, MEDIA, YOUTUBE_THUMBNAIL } from './media'
import { META } from './meta'

export const CALL_TO_ACTION = `
...on Cta {
  blockType
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
  imgPosition
  ${MEDIA}
}
`

export const PROJECT_BLOCK = `
...on ProjectBlock {
  blockType
  position
  title
  subheading
  subheadingType
  description
  bgColor
  facts {
    factStat
    factDescription
  }
  links {
    link ${LINK_FIELDS()}
  }
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
  ${YOUTUBE_THUMBNAIL}
  youtubeLink
}
`

export const VIDEO_BLOCK = `
...on VideoBlock {
  blockType
  title
  ${BACKGROUND_IMAGE}
  ${YOUTUBE_THUMBNAIL}
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
  ${BACKGROUND_IMAGE}
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
  displayHeader
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
