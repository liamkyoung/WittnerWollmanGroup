import { FAVORITE_PLACES } from './communityResources'
import { PROFILEPIC } from './media'

export const TEAMMATES = `
  query Teammates {
    Teammates(limit: 300) {
      docs {
        slug
      }
    }
  }
`

export const TEAMMATE = `
query Teammates($slug: String) {
    Teammates(where: { slug: { equals: $slug }}, limit: 1) {
      docs {
        id
        title
        bio
        ${FAVORITE_PLACES}
        phoneNumber
        instagram
        Facebook
        Linkedin
        email
        ${PROFILEPIC}
        strengths
        yearsOfExperience
      }
    }
  }
`
