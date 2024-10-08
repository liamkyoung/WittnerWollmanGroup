'use client'
import React, { useEffect } from 'react'

import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import ReflectionPhoto from '../../assets/images/reflection_pool_wide.png'
import { useState } from 'react'
import Image from 'next/image'
import { Listing, Media as Img } from '@/payload/payload-types'
import { Media } from '../../_components/Media'
import StaticImg from '../../assets/images/mangosteen.png'

export default function PhotoGallery({ imageGallery }: Listing) {
  const [open, setOpen] = useState(false)
  const imgArray: Img[] = imageGallery?.map(i => typeof i !== 'number' && i.image)

  const slideImages = imgArray?.map(img => {
    return {
      src: `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${img.filename}`,
      alt: `${img.alt}`,
      width: `${img.width}`,
      height: `${img.height}`,
    }
  })

  return (
    <div>
      <div className="flex gap-4 mt-8">
        <div className="lg:w-3/4 w-full">
          {imageGallery.map(
            (img, index) =>
              index === 0 && (
                <div key={img.id}>
                  <Media resource={img.image} />
                </div>
              ),
          )}
        </div>
        <div className="hidden w-1/4 lg:flex flex-col gap-8">
          {imageGallery.map(
            (img, index) =>
              index !== 0 &&
              index < 3 && (
                <div key={img.id}>
                  <Media resource={img.image} />
                </div>
              ),
          )}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button type="button" className="btn-primary" onClick={() => setOpen(true)}>
          SEE FULL GALLERY
        </button>
      </div>
      {slideImages && <Lightbox open={open} close={() => setOpen(false)} slides={slideImages} />}
    </div>
  )
}
