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
      <Gutter className={`flex items-center justify-between gap-4 lg:flex-row flex-col-reverse`}>
        <h1 className={`${classes.title} leading-tight text-center lg:text-left`}>{title}</h1>
        {/* <p className={classes.meta}>{publishedAt && <p>{formatDateTime(publishedAt)}</p>}</p> */}
        <div className={classes.media}>
          <div className={classes.mediaWrapper}>
            {!metaImage && <div className={classes.placeholder}>No image</div>}
            {metaImage && typeof metaImage !== 'string' && (
              <Media
                imgClassName="object-fit-cover w-3/4 my-auto mx-auto min-w-64"
                resource={metaImage as MediaType}
              />
            )}
          </div>
          {img && typeof metaImage !== 'string' && img?.caption && (
            <RichText content={img.caption} className={classes.caption} />
          )}
        </div>
      </Gutter>
      <div className="mt-24 lg:w-3/4">
        <h5 className="text-center lg:text-left">{description}</h5>
      </div>
    </main>
  )
}
