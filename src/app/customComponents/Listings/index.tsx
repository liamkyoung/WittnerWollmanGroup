import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Listing } from '../../../payload/payload-types'
import { Media } from '../../_components/Media'

export const ListingCard: React.FC<{
  className?: string
  title?: string
  doc?: Listing
}> = props => {
  const { title: titleFromProps, doc, className } = props

  const { slug, title, meta, address, sqFt, bedCount, bathroomCount } = doc || {}
  const { description, image: metaImage } = meta || {}

  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/listings/${slug}`

  return (
    <div className={``}>
      <Link href={href}>
        {!metaImage && <div className={``}>No image</div>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media imgClassName={``} resource={metaImage} />
        )}
      </Link>
      <div>
        {titleToUse && (
          <h4>
            <Link href={href}>{titleToUse}</Link>
          </h4>
        )}
        {address}
        <p>Beds:{bedCount}</p>
        <p>Baths:{bathroomCount}</p>
      </div>
    </div>
  )
}
