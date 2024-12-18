// "shoppingCenter" | "bizOpportunity" | "multiFamily" | "office" | "mixedUse"

export function formatPropertyType(propType: string): string {
  if (!propType) return ''
  switch (propType) {
    case 'All':
      return 'All'
    case 'shoppingCenter':
      return 'Shopping Center'
    case 'bizOpportunity':
      return 'Business Opprotunity'
    case 'multiFamily':
      return 'Multi-Family'
    case 'office':
      return 'Office'
    case 'mixedUse':
      return 'Mixed Use'
    default:
      return 'N/A'
  }

  return 'N/A'
}

export function formatZoningType(zType: string): string {
  if (!zType) return ''
  switch (zType[0]) {
    case 'C':
      return 'Commercial'
    case 'r':
      return 'Residential'
    case 'i':
      return 'Industrial'
    default:
      return 'N/A'
  }

  return 'N/A'
}
