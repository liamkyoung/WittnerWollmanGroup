import React from 'react'
import { StaticImageData } from 'next/image'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'projectBlock' }> & {
  staticImage?: StaticImageData
  id?: string
}

export const ProjectBlock: React.FC<Props> = props => {
  const { media, position = 'left', staticImage, title, location, description, facts } = props

  let caption
  if (media && typeof media === 'object') caption = media.caption

  return (
    <div className={classes.mediaBlock}>
      {title && <div>{title}</div>}
      {location && <div>{location}</div>}
      {description && <div>{description}</div>}
      {facts &&
        facts.map((i, index) => (
          <div key={index}>
            {i.factStat} | {i.factDescription}
          </div>
        ))}
      {position === 'left' && (
        <Gutter>
          <Media resource={media} src={staticImage} />
        </Gutter>
      )}
    </div>
  )
}
