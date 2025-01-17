import React, { Fragment } from 'react'
import Link from 'next/link'

import { Media as MediaType, Post } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'
import { formatDateTime } from '../../_utilities/formatDateTime'

import classes from './index.module.scss'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const {
    id,
    title,
    meta: { image: metaImage, description } = {},
    publishedAt,
    populatedAuthors,
  } = post

  const img: MediaType = metaImage as MediaType

  return (
    <main className="mt-12">
      <Gutter
        className={`flex xl:items-center justify-between gap-4 lg:gap-16 xl:flex-row flex-col`}
      >
        <div>
          <div className="xl:max-w-[44rem]">
            {!metaImage && <div>No image</div>}
            {metaImage && typeof metaImage !== 'string' && (
              <Media
                imgClassName="object-cover min-w-64 h-auto"
                resource={metaImage as MediaType}
              />
            )}
          </div>
          {img && typeof metaImage !== 'string' && img?.caption && (
            <RichText content={img.caption} className={classes.caption} />
          )}
        </div>
        <div className="">
          <h1 className={`leading-tight`}>{title}</h1>
          <div className="mt-4">
            {publishedAt && (
              <p className="bg-wwRed py-2 px-4 rounded-md text-white font-semibold whitespace-nowrap max-w-min">
                {formatDateTime(publishedAt)}
              </p>
            )}
          </div>
        </div>
      </Gutter>
      <div className="mt-24 lg:w-3/4">
        <h5>{description}</h5>
      </div>
    </main>
  )
}
