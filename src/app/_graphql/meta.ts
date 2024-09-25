export const MEDIA_FIELDS = `
mimeType
filename
width
height
alt
caption
`

export const META = `meta {
  title
  image {
    ${MEDIA_FIELDS}
  }
  description
}`

export const MEDIA = `media {
  ${MEDIA_FIELDS}
}`

export const PROFILEPIC = `profilePic {
  ${MEDIA_FIELDS}
}`

export const COVERIMAGE = `coverImage {
  ${MEDIA_FIELDS}
}
`
