import React, { Fragment } from 'react'
import Link from 'next/link'

import { Post, Project } from '../../../../payload/payload-types'
import { Media } from '../../../_components/Media'
import { formatDateTime } from '@/app/_utilities/formatDateTime'
import { Media as MType } from '../../../../payload/payload-types'

import classes from './index.module.scss'
import DefaultCard from '../../DefaultCard'

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
  const {
    relationTo,
    showCategories,
    title: titleFromProps,
    doc,
    className,
    orientation = 'vertical',
  } = props

  const { slug, title, categories, meta, publishedAt } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/news/${slug}`

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
