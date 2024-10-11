import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Listing } from '../../../payload/payload-types'
import { Media } from '../../_components/Media'
import CardInfo from '../CardInfo'

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
  const href = `/listings/${slug}`

  return (
    <div>
      <Link href={href}>
        {!coverImage && <div className={``}>No image</div>}
        {coverImage && typeof coverImage !== 'string' && (
          <Media imgClassName={``} resource={coverImage} />
        )}
      </Link>
      <div>
        {titleToUse && <h5>{titleToUse}</h5>}
        <CardInfo
          address={address}
          additionalInfo={[`${sqFt} sq ft`, `${bedCount} beds`, `${bathroomCount} baths`]}
        />
      </div>
    </div>
  )
}
