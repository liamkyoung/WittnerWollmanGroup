import { IMAGE } from './media'

export const INVOLVEMENT_GROUPS = `
  query InvolvementGroups {
    InvolvementGroups(limit: 300) {
      docs {
        slug
        title
        categories {
          title
        }
        ${IMAGE}
      }
    }
  }
`

export const INVOLVEMENT_EVENTS = `
  query InvolvementEvents {
    InvolvementEvents(limit: 300) {
      docs {
        slug
        title
        categories {
          title
        }
        ${IMAGE}
      }
    }
  }
`
