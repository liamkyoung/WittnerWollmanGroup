import React from 'react'

import { formatDollarAmount } from '../../../../app/_utilities/formatDollarAmount'
import { Media, Project } from '../../../../payload/payload-types'
import DefaultCard from '../../DefaultCard'

import { ProjectLinks } from '@/globalData/navigation/projects/projects'

export const ProjectCard: React.FC<{
  className?: string
  doc?: Project
}> = props => {
  const { doc } = props

  const { slug, title, meta, price, description } = doc || {}
  const { image: metaImage } = meta || {}

  const href = `${ProjectLinks.relLink}/${slug}`
  const limitedDescription =
    description && description.length >= 100 ? description.substring(0, 100) + '...' : description

  return (
    <DefaultCard
      title={title}
      description={limitedDescription}
      link={href}
      image={metaImage as Media}
      squareImage
    />
  )
}
