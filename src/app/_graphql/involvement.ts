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
        description
        highlight
        ${IMAGE}
      }
    }
  }
`

export const INVOLVEMENT_EVENTS = `
  query InvolvementEvents {
    InvolvementEvents(where: { eventDate: { gte: "now" } }, limit: 300) {
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
