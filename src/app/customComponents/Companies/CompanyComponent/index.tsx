import React, { Fragment } from 'react'
import Image from 'next/image'

import { Company } from '../../../../payload/payload-types'
import { Media } from '../../../_components/Media'

export const CompanyComponent: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: Company
  orientation?: 'horizontal' | 'vertical'
}> = props => {
  const { doc, className } = props

  const { name, image } = doc || {}

  return (
    <div className={`${className}`} style={{ display: 'block' }}>
      <Media imgClassName={''} resource={image} alt={name} />
      <h4>{name}</h4>
    </div>
  )
}
