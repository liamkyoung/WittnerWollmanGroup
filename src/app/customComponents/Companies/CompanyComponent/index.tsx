import React from 'react'

import { Company, Media as MType } from '../../../../payload/payload-types'
import { Media } from '../../../_components/Media'

export const CompanyComponent: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: Company
  orientation?: 'horizontal' | 'vertical'
}> = props => {
  const { doc } = props

  const { name, image } = doc || {}

  return (
    <Media imgClassName={'h-full w-auto object-contain'} resource={image as MType} alt={name} />
  )
}
