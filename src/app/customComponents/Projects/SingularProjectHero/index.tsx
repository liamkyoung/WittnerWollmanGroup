import React, { Fragment } from 'react'
import Link from 'next/link'

import { Project } from '../../../../payload/payload-types'
import { Gutter } from '../../../_components/Gutter'
import { Media } from '../../../_components/Media'
import RichText from '../../../_components/RichText'
import { formatDateTime } from '../../../_utilities/formatDateTime'

export const SingularProjectHero: React.FC<{
  project: Project
}> = ({ project }) => {
  const {
    id,
    title,
    categories,
    meta: { image: metaImage, description } = {},
    createdAt,
    price,
    neighborhood,
    website,
    instagram,
    slider,
  } = project

  return (
    <Fragment>
      <Gutter className={''}>
        <div className={''}>
          <div className={''}>
            <div className={''}>
              {createdAt && formatDateTime(createdAt)}
              &nbsp; &mdash; &nbsp;
              {categories?.map((category, index) => {
                if (typeof category === 'object' && category !== null) {
                  const { title: categoryTitle } = category

                  const titleToUse = categoryTitle || 'Untitled category'

                  const isLast = index === categories.length - 1

                  return (
                    <Fragment key={index}>
                      {titleToUse}
                      {!isLast && <Fragment>, &nbsp;</Fragment>}
                    </Fragment>
                  )
                }

                return null
              })}
            </div>
          </div>
          <h1>{title}</h1>
          <div>
            <p>
              {`${description ? `${description} ` : ''}To edit this project, `}
              <Link href={`${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/projects/${id}`}>
                navigate to the admin dashboard
              </Link>
              {'.'}
            </p>
          </div>
          {price && <div>{price}</div>}
          {neighborhood && <div>{neighborhood}</div>}
          {website && <div>{website}</div>}
          {instagram && <div>{instagram}</div>}
          {slider && slider.map(i => <Media resource={i.image} alt={i.title} key={i.id} />)}
        </div>
        <div className={``}>
          <div className={``}>
            {!metaImage && <div className={``}>No image</div>}
            {metaImage && typeof metaImage !== 'string' && (
              <Media imgClassName={``} resource={metaImage} fill />
            )}
          </div>
          {metaImage && typeof metaImage !== 'string' && metaImage?.caption && (
            <RichText content={metaImage.caption} />
          )}
        </div>
      </Gutter>
    </Fragment>
  )
}
