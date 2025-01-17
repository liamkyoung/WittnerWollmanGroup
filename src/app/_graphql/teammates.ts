import { FAVORITE_PLACES } from './communityResources'
import { PROFILEPIC } from './media'

export const TEAMMATES = `
  query Teammates {
    Teammates(limit: 300) {
      docs {
        id
        title
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
        profileIntroduction
        jobTitle
        rank
        ${FAVORITE_PLACES}
        phoneNumber
        officeNumber
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
export const LISTING_AGENT = `
agents {
  title
  ${PROFILEPIC}
  phoneNumber
  email
}
`
