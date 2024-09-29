import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Teammate } from '../../../payload/payload-types'
import { Media } from '../../_components/Media'

export const TeammateCard: React.FC<{
  className?: string
  title?: string
  doc?: Teammate
}> = props => {
  const { title: titleFromProps, doc } = props

  const { slug, title, meta } = doc || {}
  const { description, image: metaImage } = meta || {}

  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/teammates/${slug}`

  return (
    <div className={``}>
      <Link href={href} className={``}>
        {!metaImage && <div className={``}>No image</div>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media imgClassName={``} resource={metaImage} fill />
        )}
      </Link>
      <div className={``}>
        {titleToUse && (
          <h4 className={``}>
            <Link href={href} className={``}>
              {titleToUse}
            </Link>
          </h4>
        )}
        {description && (
          <div className={``}>{description && <p className={``}>{sanitizedDescription}</p>}</div>
        )}
      </div>
    </div>
  )
}
