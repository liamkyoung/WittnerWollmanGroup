export function formatDateTime(dateTime: string | Date): string {
  // Convert the input to a Date object if it's a string
  const dateObj = typeof dateTime === 'string' ? new Date(dateTime) : dateTime

  // Ensure the input is a valid date
  if (!dateObj || isNaN(dateObj.getTime())) {
    return ''
  }

  // Extract date components
  const year = dateObj.getFullYear()
  const month = String(dateObj.getMonth() + 1).padStart(2, '0') // Months are 0-based
  const day = String(dateObj.getDate()).padStart(2, '0')

  // Extract time components
  let hours = dateObj.getHours()
  const minutes = String(dateObj.getMinutes()).padStart(2, '0')
  const ampm = hours >= 12 ? 'PM' : 'AM'

  // Convert 24-hour to 12-hour format
  hours = hours % 12 || 12 // Convert 0 (midnight) to 12

  // Format the date and time
  return `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`
}
