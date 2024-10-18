export function formatDollarAmount(amount: string | number): string {
  // Convert the input to a number
  let num = typeof amount === 'string' ? parseFloat(amount) : amount

  // Ensure that the number is valid
  if (isNaN(num)) {
    return ''
  }

  // Round to the nearest whole number
  num = Math.round(num)

  // Format the number with commas and a dollar sign, no decimals
  return '$' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
