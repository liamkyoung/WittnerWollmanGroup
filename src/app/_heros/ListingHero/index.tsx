import React from 'react'
import Link from 'next/link'

import { formatDollarAmount } from '@/app/_utilities/formatDollarAmount'
import { formatPropertyType } from '@/app/_utilities/propertyTypeFormatter'
import { ListingLinks } from '@/globalData/navigation/listings/listings'

export type ListingHeroProps = {
  streetAddress: string
  isPriceNegotiable?: boolean
  city: string
  state: string
  zipCode: string
  sqFt: number
  propertyType: 'shoppingCenter' | 'bizOpportunity' | 'multiFamily' | 'office' | 'mixedUse'
  price: number
}

//import { Page } from '../../../payload/payload-types'

export const ListingHero: React.FC<ListingHeroProps> = ({
  streetAddress,
  city,
  state,
  zipCode,
  sqFt,
  propertyType,
  isPriceNegotiable,
  price,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center">
      <div className="space-y-4">
        <Link href={ListingLinks.relLink}>
          <h6 className="text-gray-600 hover:text-gray-400 text-center lg:text-left">Listings /</h6>
        </Link>
        <div className="text-center lg:text-left">
          <h3>{streetAddress}</h3>
          <h6>
            {city}, {state} {zipCode}
          </h6>
        </div>
        <div className="space-x-4 text-center lg:text-left">
          <span className="inline-flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-wwBlack"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
            </svg>
            {sqFt} sq ft
          </span>
          <span className="inline-flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
              <path
                fillRule="evenodd"
                d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z"
                clipRule="evenodd"
              />
            </svg>
            {formatPropertyType(propertyType)}
          </span>
        </div>
      </div>
      <h1 className="bg-wwRed p-6 text-white">
        {isPriceNegotiable ? 'Negotiable' : formatDollarAmount(price)}
      </h1>
    </div>
  )
}
