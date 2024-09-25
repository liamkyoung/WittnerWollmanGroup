export const MEDIA_FIELDS = `
mimeType
filename
width
height
alt
caption
`

export const MEDIA = `media {
  ${MEDIA_FIELDS}
}`

export const IMAGE = `image {
  ${MEDIA_FIELDS}
}`

export const PROFILEPIC = `profilePic {
  ${MEDIA_FIELDS}
}`

export const COVERIMAGE = `coverImage {
  ${MEDIA_FIELDS}
}
`
