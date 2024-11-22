import React from 'react'
import Image, { StaticImageData } from 'next/image'

import { Media as MType, Page } from '../../../payload/payload-types'
import { Media } from '../../_components/Media'
import BGImage from '../../assets/images/bg_backdrop.png'
import { YoutubeVideo } from '../../customComponents/YoutubeVideo'

export type VideoBlockProps = Extract<Page['layout'][0], { blockType: 'videoBlock' }> & {
  id?: string
}

export const VideoBlock: React.FC<VideoBlockProps> = props => {
  const { title, description, bgImage, youtubeThumbnail, youtubeLink } = props

  return (
    <div className="relative">
      <div className="absolute z-10 w-full h-screen xl:h-auto mt-16">
        <div className="global-margin-x">
          <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-4">
            <h2 className="flex-1 text-center">{title}</h2>
            {/* <p className="text-center xl:text-right max-w-3xl">{description}</p> */}
          </div>

          <div className="flex flex-col-reverse xl:flex-row items-center mt-16 gap-8">
            <div className="w-full">
              <YoutubeVideo
                src={youtubeLink}
                title={`${title} video`}
                coverImage={youtubeThumbnail}
              />
            </div>
          </div>
        </div>
      </div>
      {!bgImage ? (
        <>
          {' '}
          <Image
            src={BGImage}
            alt="stats-video-bg-img"
            className="w-full min-h-[48rem] xl:h-auto opacity-20 object-cover"
          />
        </>
      ) : (
        <>
          <Media
            resource={bgImage as MType}
            imgClassName="w-full min-h-[48rem] xl:h-auto opacity-20 object-cover"
          />
        </>
      )}
    </div>
  )
}
