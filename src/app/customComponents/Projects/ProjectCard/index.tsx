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

  const { slug, title, meta, price } = doc || {}
  const { image: metaImage } = meta || {}

  const href = `${ProjectLinks.relLink}/${slug}`

  return (
    <DefaultCard
      title={title}
      accentText={formatDollarAmount(price)}
      link={href}
      image={metaImage as Media}
    />
  )
}
