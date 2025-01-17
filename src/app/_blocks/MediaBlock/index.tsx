import React from 'react'
import { StaticImageData } from 'next/image'

import { Media as MediaType, Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'

type Props = Extract<Page['layout'][0], { blockType: 'mediaBlock' }> & {
  staticImage?: StaticImageData
  id?: string
}

export const MediaBlock: React.FC<Props> = props => {
  const { media, imgPosition = 'default', staticImage } = props

  let caption
  if (media && typeof media === 'object') caption = media.caption

  return (
    <div>
      {imgPosition === 'fullscreen' && (
        <div className={`max-h-96`}>
          <Media resource={media as MediaType} src={staticImage} />
        </div>
      )}
      {imgPosition === 'default' && (
        <div className="mx-auto w-full sm:w-3/4 my-16">
          <Media
            resource={media as MediaType}
            src={staticImage}
            imgClassName="object-contain max-h-[40rem]"
          />
        </div>
      )}
      {imgPosition === 'left' && (
        <div className="w-full sm:w-3/4 my-16">
          <Media
            resource={media as MediaType}
            src={staticImage}
            imgClassName="object-contain max-h-[40rem]"
          />
        </div>
      )}
      {imgPosition === 'right' && (
        <div className="ml-auto w-full sm:w-3/4 my-16">
          <Media
            resource={media as MediaType}
            src={staticImage}
            imgClassName="object-contain max-h-[40rem]"
          />
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
