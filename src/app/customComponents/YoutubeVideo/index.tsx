import React from 'react'

type Props = {
  title: string
  src: string
}

export const YoutubeVideo = ({ title, src }: Props) => {
  return (
    <iframe
      src={src}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="w-full aspect-video"
      loading={'lazy'}
    ></iframe>
  )
}
