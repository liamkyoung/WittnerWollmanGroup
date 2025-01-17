// "shoppingCenter" | "bizOpportunity" | "multiFamily" | "office" | "mixedUse"

export function formatPropertyType(propType: string): string {
  if (!propType) return ''
  switch (propType) {
    case 'All':
      return 'All'
    case 'singleFamily':
      return 'Single-Family'
    case 'multiFamily':
      return 'Multi-Family'
    case 'townhouse':
      return 'Townhouse'
    case 'condo':
      return 'Condominium'
    case 'co-op':
      return 'Co-op'
    case 'apt':
      return 'Apartment'
    case 'mobileHome':
      return 'Mobile Home'
    case 'vacationHome':
      return 'Vacation Home'
    case 'seniorLivingHome':
      return 'Senior Living Home'
    case 'shoppingCenter':
      return 'Shopping Center'
    case 'bizOpportunity':
      return 'Business Opportunity'
    case 'office':
      return 'Office'
    case 'retail':
      return 'Retail Property'
    case 'industrial':
      return 'Industrial Property'
    case 'mixedUse':
      return 'Mixed Use'
    case 'hotel':
      return 'Hotel'
    case 'motel':
      return 'Motel'
    case 'restaurant':
      return 'Restaurant'
    case 'healthcareFacility':
      return 'Healthcare Facility'
    case 'storageUnit':
      return 'Storage Unit'
    case 'vacantLand':
      return 'Vacant Land'
    case 'agriculturalLand':
      return 'Agricultiral Land'
    case 'timberland':
      return 'Timberland'
    case 'ranchLand':
      return 'Ranch Land'
    case 'recreationalLand':
      return 'Recreational Land'
    case 'developmentLand':
      return 'Development Land'
    case 'religion':
      return 'Religious Building'
    case 'school':
      return 'School'
    case 'university':
      return 'University'
    case 'governmentBuilding':
      return 'Government Building'
    case 'cemetery':
      return 'Cemetery'
    case 'airport':
      return 'Airport'
    case 'utility':
      return 'Utility'
    case 'reit':
      return 'Real Estate Investment Trust (REIT)'
    case 'rentalProperty':
      return 'Rental Property'
    case 'fixAndFlip':
      return 'Fix-and-Flip Property'
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

export function formatListingType(listingType: string): string {
  if (!listingType) return ''
  switch (listingType) {
    case 'forSale':
      return 'For Sale'
    case 'lease':
      return 'Lease'
    case 'forSaleLease':
      return 'For Sale / Lease'
    default:
      return 'N/A'
  }

  return 'N/A'
}

export function formatPaymentFrequency(paymentFreq: string): string {
  if (!paymentFreq) return ''
  switch (paymentFreq) {
    case 'oneTime':
      return ''
    case 'dollarPerSqPerYear':
      return '/ sqft / yr'
    case 'monthly':
      return '/ month'
    case 'yearly':
      return '/ yr'
    default:
      return 'N/A'
  }

  return 'N/A'
}
