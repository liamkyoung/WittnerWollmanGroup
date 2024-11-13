'use client'

import React, { useState } from 'react'

import { Media } from '@/app/_components/Media'
import { Media as MediaType } from '@/payload/payload-types'

type Props = {
  title: string
  src: string
  coverImage: MediaType | number
}

export const YoutubeVideo = ({ title, src, coverImage }: Props) => {
  const srcWithAutoPlay = !src.includes('?autoplay=1') ? src + '?autoplay=1' : src
  const [play, setPlay] = useState(false)

  return (
    <>
      {!play ? (
        <Media
          resource={coverImage as MediaType}
          imgClassName="w-full aspect-video cursor-pointer"
          onClick={() => setPlay(true)}
        />
      ) : (
        <iframe
          src={srcWithAutoPlay}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full aspect-video"
        ></iframe>
      )}
    </>
  )
}
