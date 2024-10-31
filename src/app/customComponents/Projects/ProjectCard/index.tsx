import React from 'react'

import { formatDollarAmount } from '../../../../app/_utilities/formatDollarAmount'
import { Media, Project } from '../../../../payload/payload-types'
import DefaultCard from '../../DefaultCard'

export const ProjectCard: React.FC<{
  className?: string
  doc?: Project
}> = props => {
  const { doc } = props

  const { slug, title, meta, price } = doc || {}
  const { image: metaImage } = meta || {}

  const href = `/projects/${slug}`

  return (
    <DefaultCard
      title={title}
      accentText={formatDollarAmount(price)}
      link={href}
      image={metaImage as Media}
    />
  )
}
