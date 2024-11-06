import React from 'react'
import Link from 'next/link'

import { Listing, Media as MediaType } from '../../../payload/payload-types'
import { Media } from '../../_components/Media'
import CardInfo from '../CardInfo'
import { ListingLinks } from '@/globalData/navigation/listings/listings'

export const ListingCard: React.FC<{
  className?: string
  title?: string
  doc?: Listing
}> = props => {
  const { title: titleFromProps, doc, className } = props

  const { slug, title, meta, address, sqFt, bedCount, bathroomCount, coverImage } = doc || {}
  const { description, image: metaImage } = meta || {}

  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `${ListingLinks.relLink}/${slug}`

  return (
    <div>
      <Link href={href}>
        {!coverImage && <div className={``}>No image</div>}
        {coverImage && typeof coverImage !== 'string' && (
          <Media imgClassName={`mx-auto`} resource={coverImage as MediaType} />
        )}
      </Link>
      <div>
        {titleToUse && <h5 className="my-2 text-center lg:text-left">{titleToUse}</h5>}
        <div className="mx-auto">
          <CardInfo
            address={address}
            additionalInfo={[`${sqFt} sq ft`, `${bedCount} bedrooms`, `${bathroomCount} bathrooms`]}
          />
        </div>
      </div>
    </div>
  )
}
