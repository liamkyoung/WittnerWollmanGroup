import React from 'react'

import { CollectionArchive } from '../../_components/CollectionArchive'
import { Gutter } from '../../_components/Gutter'
import RichText from '../../_components/RichText'
import { ArchiveBlockProps } from './types'

import classes from './index.module.scss'

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
  }
> = props => {
  const {
    introContent,
    id,
    relationTo,
    populateBy,
    limit,
    populatedDocs,
    populatedDocsTotal,
    selectedDocs,
    categories,
    bgColor,
    displayHeader,
  } = props

  // console.log('props: ', props)
  const color = bgColor === 'red' ? 'bg-wwRed' : 'bg-gray-50'

  return (
    <div id={`block-${id}`} className={`${classes.archiveBlock} ${color}`}>
      {introContent && (
        <Gutter className={classes.introContent}>
          <RichText content={introContent} />
        </Gutter>
      )}
      <CollectionArchive
        populateBy={populateBy}
        relationTo={relationTo}
        populatedDocs={populatedDocs}
        populatedDocsTotal={populatedDocsTotal}
        selectedDocs={selectedDocs}
        categories={categories}
        limit={limit}
        displayHeader={displayHeader}
        sort="-publishedAt"
      />
    </div>
  )
}
