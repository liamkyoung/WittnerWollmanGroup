// "shoppingCenter" | "bizOpportunity" | "multiFamily" | "office" | "mixedUse"

export function formatPropertyType(propType: string) {
  if (!propType) return ''
  switch (propType[0]) {
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
