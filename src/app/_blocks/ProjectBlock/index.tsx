import React from 'react'
import { StaticImageData } from 'next/image'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'
import ProjectBlockLeft from './ProjectBlockLeft'
import ProjectBlockRight from './ProjectBlockRight'

import { FactsList } from '../../../payload/payload-types'
import classes from './index.module.scss'
import Link from 'next/link'

type Props = Extract<Page['layout'][0], { blockType: 'projectBlock' }> & {
  staticImage?: StaticImageData
  id?: string
}

export const ProjectBlock: React.FC<Props> = props => {
  const {
    media,
    position = 'left',
    staticImage,
    title,
    location,
    description,
    facts,
    externalLink,
  } = props

  let caption
  if (media && typeof media === 'object') caption = media.caption

  if (position === 'left') {
    return <ProjectBlockLeft />
  }

  return <ProjectBlockRight />
}
