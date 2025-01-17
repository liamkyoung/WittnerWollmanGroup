import React from 'react'
import Link from 'next/link'

import { Media as MediaType, Project } from '../../../../payload/payload-types'
import { Media } from '../../../_components/Media'
import CardInfo from '../../CardInfo'
import PhotoGallery from '../../Gallery/PhotoGallery'

import { ProjectLinks } from '@/globalData/navigation/projects/projects'

export const SingularProjectHero: React.FC<{
  project: Project
}> = ({ project }) => {
  const {
    id,
    title,
    meta: { image: metaImage, description } = {},
    createdAt,
    price,
    neighborhood,
    website,
    instagram,
    slider,
  } = project

  const imgs: MediaType[] = slider
    .map(i => (typeof i.image !== 'number' ? (i.image as MediaType) : null))
    .filter(i => i !== null)

  const instagramUsername = instagram?.replace('@', '')

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mb-12">
        <div>
          <Link href={ProjectLinks.relLink}>
            <h6 className="text-gray-800">Projects /</h6>
          </Link>

          <h1 className="mb-2 mt-6 text-wwBlack">{title}</h1>
          <CardInfo address={neighborhood} />
        </div>
        <div className="flex lg:flex-row flex-col items-end justify-end gap-x-4 flex-wrap">
          <Link href={website}>
            <div className="inline-flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 text-wwRed"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <p className="text-wwRed hidden md:block">{website}</p>
            </div>
          </Link>

          <Link href={`https://instagram.com/${instagramUsername}`}>
            <div className="inline-flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="size-6 fill-wwRed"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>

              <p className="text-wwRed hidden md:block">{instagram}</p>
            </div>
          </Link>
        </div>
      </div>
      {imgs && imgs.length > 0 ? (
        <PhotoGallery imageGallery={imgs} />
      ) : (
        <div className="relative">
          {metaImage && typeof metaImage !== 'string' && (
            <Media
              imgClassName={`object-cover w-full max-h-[36rem]`}
              resource={metaImage as MediaType}
            />
          )}
        </div>
      )}
    </div>
  )
}
