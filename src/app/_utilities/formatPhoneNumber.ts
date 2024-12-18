export function formatPhoneNumber(phoneNumber: string | number): string {
  // Convert input to string and remove all non-digit characters
  const digits = phoneNumber.toString().replace(/\D/g, '')

  // Ensure the input has exactly 10 digits
  if (digits.length !== 10) {
    throw new Error('Input must be a 10-digit phone number.')
  }

  // Format the phone number into (123) 456-7890
  const formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  return formatted
}
