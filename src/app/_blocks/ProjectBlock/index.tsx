import React from 'react'
import { StaticImageData } from 'next/image'

import { Media as MType, Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import RichText from '../../_components/RichText'
import ProjectBlockLeft from './ProjectBlockLeft'
import ProjectBlockRight from './ProjectBlockRight'

import { FactsList } from '../../../payload/payload-types'
import classes from './index.module.scss'
import Link from 'next/link'
import { ColorScheme } from '@/app/types/viewmodels'

export type ProjectBlockProps = Extract<Page['layout'][0], { blockType: 'projectBlock' }> & {
  staticImage?: StaticImageData
  id?: string
}

export type FactStat = {
  factStat: string
  factDescription: string
  id?: string | null
}

export const ProjectBlock: React.FC<ProjectBlockProps> = props => {
  const { media, position, location, title, bgColor, externalLink, description, facts } = props

  let caption
  if (media && typeof media === 'object') caption = media.caption

  // console.log('Position: ', props)

  let color = ColorScheme.DEFAULT
  if (bgColor === 'red') {
    color = ColorScheme.RED
  }

  // If position of Image == right
  if (position === 'right') {
    return (
      <ProjectBlockLeft
        link={externalLink}
        colorScheme={color}
        title={title}
        image={media as MType}
        location={location}
        description={description}
        facts={facts}
      />
    )
  }

  return (
    <ProjectBlockRight
      link={externalLink}
      colorScheme={color}
      title={title}
      image={media as MType}
      location={location}
      description={description}
      facts={facts}
    />
  )
}
