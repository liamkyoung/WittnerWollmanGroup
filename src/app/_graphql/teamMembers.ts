import { PROFILEPIC } from './media'

export const TEAM_MEMBERS = `
  query TeamMembers {
    Team(limit: 300) {
      docs {
        slug
      }
    }
  }
`

export const TEAM_MEMBER = `
query TeamMembers($slug: String) {
    TeamMembers(where: { slug: { equals: $slug }}, limit: 1) {
      docs {
        id
        name
        bio
        ${PROFILEPIC}
        strengths
        yearsOfExperience
      }
    }
  }
`
