import React, { Fragment } from 'react'
import Link from 'next/link'

import { Media, Project } from '../../../../payload/payload-types'

import classes from './index.module.scss'
import DefaultCard from '../../DefaultCard'

export const ProjectCard: React.FC<{
  className?: string
  doc?: Project
}> = props => {
  const { className, doc } = props

  const { slug, title, categories, meta, publishedAt, price } = doc || {}
  const { description, image: metaImage } = meta || {}

  const href = `/projects/${slug}`

  return <DefaultCard title={title} accentText={price} link={href} image={metaImage as Media} />
}
