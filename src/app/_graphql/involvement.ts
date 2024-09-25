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

// TODO: Need to add query to return involvement by category type.
