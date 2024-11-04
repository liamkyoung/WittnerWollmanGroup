export const MEDIA_FIELDS = `
mimeType
filename
width
height
alt
caption
url
`

export const MEDIA = `media {
  ${MEDIA_FIELDS}
}`

export const IMAGE = `image {
  ${MEDIA_FIELDS}
}`

export const BACKUP_IMAGE = `backupImage {
  ${MEDIA_FIELDS}
}`

export const BACKGROUND_IMAGE = `bgImage {
  ${MEDIA_FIELDS}
}`

export const PROFILEPIC = `profilePic {
  ${MEDIA_FIELDS}
}`

export const COVERIMAGE = `coverImage {
  ${MEDIA_FIELDS}
}
`
