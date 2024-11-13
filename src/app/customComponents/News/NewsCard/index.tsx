import React from 'react'

import { formatDateTime } from '../../../../app/_utilities/formatDateTime'
import { Media as MType, Post } from '../../../../payload/payload-types'
import DefaultCard from '../../DefaultCard'

import { NewsLink } from '@/globalData/navigation/community/community'

export const NewsCard: React.FC<{
  alignItems?: 'center'
  className?: string
  showCategories?: boolean
  hideImagesOnMobile?: boolean
  title?: string
  relationTo?: 'posts'
  doc?: Post
  orientation?: 'horizontal' | 'vertical'
}> = props => {
  const { title: titleFromProps, doc } = props

  const { slug, title, meta, publishedAt } = doc || {}
  const { description, image: metaImage } = meta || {}

  const titleToUse = titleFromProps || title
  // const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `${NewsLink.relLink}/${slug}`

  return (
    <DefaultCard
      title={titleToUse}
      image={metaImage as MType}
      accentText={formatDateTime(publishedAt)}
      description={description}
      link={href}
    />
  )
}
