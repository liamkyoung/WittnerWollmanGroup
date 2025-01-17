import React from 'react'
import { StaticImageData } from 'next/image'

import { Media as MediaType, Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'mediaBlock' }> & {
  staticImage?: StaticImageData
  id?: string
}

export const MediaBlock: React.FC<Props> = props => {
  const { media, position = 'default', staticImage } = props

  let caption
  if (media && typeof media === 'object') caption = media.caption

  return (
    <div>
      {position === 'fullscreen' && (
        <div className={`w-full h-screen`}>
          <Media resource={media as MediaType} src={staticImage} />
        </div>
      )}
      {position === 'default' && (
        <div className="mx-auto w-1/2 global-margin-y">
          <Media resource={media as MediaType} src={staticImage} />
        </div>
      )}
      {caption && (
        <Gutter className="text-semibold text-wwBlack mt-8">
          <RichText content={caption} />
        </Gutter>
      )}
    </div>
  )
}
