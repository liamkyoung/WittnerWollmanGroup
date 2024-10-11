import React from 'react'

type Props = {}

export const YoutubeVideo = () => {
  return (
    <iframe
      src="https://www.youtube.com/embed/vm5vGhWd1yM?si=j_xwC5x63Q60dBxF"
      title="About Us Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="w-full aspect-video"
    ></iframe>
  )
}
