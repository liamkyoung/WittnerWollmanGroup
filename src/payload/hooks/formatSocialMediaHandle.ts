import type { FieldHook } from 'payload/types'

export const formatSocialMediaHandle: FieldHook = ({ value }) => {
  if (!value) return value // If the field is empty, return as is.
  if (value.startsWith('@')) {
    return value // If the username already starts with '@', return as is.
  }
  return `@${value}` // Prepend '@' to the username.
}
