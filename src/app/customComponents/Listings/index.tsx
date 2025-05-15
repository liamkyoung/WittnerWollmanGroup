import React from 'react'
import Link from 'next/link'

import { Listing, Media as MediaType } from '../../../payload/payload-types'
import { Media } from '../../_components/Media'
import { formatDollarAmount } from '../../_utilities/formatDollarAmount'
import { formatListingType, formatPaymentFrequency } from '../../_utilities/propertyTypeFormatter'
import CardInfo from '../CardInfo'

import { ListingCardDTO } from '@/app/types/viewmodels'
import { Skeleton } from '@/components/ui/skeleton'
import { ListingLinks } from '@/globalData/navigation/listings/listings'

export const ListingCard: React.FC<{
  className?: string
  title?: string
  doc?: ListingCardDTO
  isLoading?: boolean
}> = props => {
  const { title: titleFromProps, doc, className, isLoading } = props

  const {
    slug,
    title,
    address,
    sqFt,
    sqFtLand,
    sqFtLot,
    bedCount,
    bathroomCount,
    coverImage,
    price,
    isPriceNegotiable,
    listingType,
    paymentFrequency,
  } = doc || {}

  const titleToUse = titleFromProps || title
  const href = `${ListingLinks.relLink}/${slug}`
  const additionalInfo = [
    sqFt !== null ? `${sqFt} sq ft` : '',
    sqFtLot !== null ? `${sqFtLot} acres` : '',
    sqFtLand !== null ? `${sqFtLand} sq ft land` : '',
    bedCount !== null ? ` ${bedCount} bed` : '',
    bathroomCount !== null ? ` ${bathroomCount} bath` : '',
  ]
    .filter(info => info !== '') // Do not render empty items
    .filter((_, i) => i < 3) // Only take first 3 items

  const accentText = isPriceNegotiable ? 'Negotiable' : formatDollarAmount(price?.toString())

  if (!coverImage) {
    return (
      <div className="flex flex-col space-y-3">
        <Skeleton className="size-64 rounded-md" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <Link href={href}>
          <div className="relative">
            <div className="bg-gray-50 absolute -bottom-1 -left-1 p-3 rounded-md">
              {accentText && (
                <span className="text-wwRed font-bold">
                  {accentText} {formatPaymentFrequency(paymentFrequency)}
                </span>
              )}
              {listingType && (
                <span className="text-wwBlack font-medium">
                  {' '}
                  | {formatListingType(listingType)}
                </span>
              )}
            </div>
            {!coverImage && <div className={``}>No image</div>}
            {coverImage && typeof coverImage !== 'string' && (
              <Media
                imgClassName={`mx-auto rounded-md h-64 object-cover`}
                resource={coverImage as MediaType}
              />
            )}
          </div>
        </Link>
        <div>
          {titleToUse && <h5 className="my-2 text-center lg:text-left">{titleToUse}</h5>}
          <div className="mx-auto">
            <CardInfo address={address} additionalInfo={additionalInfo} />
          </div>
        </div>
      </div>
    )
  }
}
