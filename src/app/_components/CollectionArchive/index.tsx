'use client'

import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import qs from 'qs'

import type {
  Post,
  Project,
  Listing,
  Teammate,
  InvolvementGroup,
  InvolvementEvent,
  Testimonial,
  Company,
  Service,
  CommunityResource,
} from '../../../payload/payload-types'
import type { ArchiveBlockProps } from '../../_blocks/ArchiveBlock/types'
import { Card } from '../Card'
import { Gutter } from '../Gutter'
import { PageRange } from '../PageRange'
import { Pagination } from '../Pagination'

import { CompanyComponent } from '@/app/customComponents/Companies/CompanyComponent'
import { CommunityResourceCard } from '@/app/customComponents/CommunityResources/CommunityResourceCard'
import { CommunityResourceGallery } from '@/app/customComponents/CommunityResources/CommunityResourceGallery'
import { ServiceCard } from '@/app/customComponents/Services/ServiceCard'
import { TestimonialCard } from '@/app/customComponents/Testimonials/TestimonialCard'
import { InvolvementEventCard } from '@/app/customComponents/Involvement/InvolvementEvents/InvolvementEventCard'
import { InvolvementEventGallery } from '@/app/customComponents/Involvement/InvolvementEvents/InvolvementEventGallery'

import { InvolvementGroupCard } from '@/app/customComponents/Involvement/InvolvementGroups/InvolvementGroupCard'
import { InvolvementGroupGallery } from '@/app/customComponents/Involvement/InvolvementGroups/InvolvementGroupGallery'

import { TeammateCard } from '@/app/customComponents/Teammates/TeammateCard'
import { ListingCard } from '@/app/customComponents/Listings'

import classes from './index.module.scss'
import { NewsCard } from '@/app/customComponents/NewsCard'
import { ProjectGallery } from '@/app/customComponents/Projects/ProjectGallery'
import DefaultCard from '@/app/customComponents/DefaultCard'
import TestimonialGallery from '@/app/customComponents/Testimonials/TestimonialGallery'
import { ListingGallery } from '@/app/customComponents/Listings/ListingGallery'
import { TeammateGallery } from '@/app/customComponents/Teammates/TeammateGallery'
import { CompanyGallery } from '@/app/customComponents/Companies/CompanyGallery'
import { ServiceGallery } from '@/app/customComponents/Services/ServiceGallery'

type Result = {
  docs: (
    | Post
    | Project
    | Listing
    | Teammate
    | InvolvementGroup
    | InvolvementEvent
    | Testimonial
    | Company
    | Service
    | CommunityResource
    | string
  )[]
  hasNextPage: boolean
  hasPrevPage: boolean
  nextPage: number
  page: number
  prevPage: number
  totalDocs: number
  totalPages: number
}

export type Props = {
  categories?: ArchiveBlockProps['categories']
  className?: string
  limit?: number
  onResultChange?: (result: Result) => void // eslint-disable-line no-unused-vars
  populateBy?: 'collection' | 'selection'
  populatedDocs?: ArchiveBlockProps['populatedDocs']
  populatedDocsTotal?: ArchiveBlockProps['populatedDocsTotal']
  relationTo?:
    | 'posts'
    | 'projects'
    | 'listings'
    | 'teammates'
    | 'involvementGroups'
    | 'involvementEvents'
    | 'testimonials'
    | 'companies'
    | 'services'
    | 'communityResources'
  selectedDocs?: ArchiveBlockProps['selectedDocs']
  showPageRange?: boolean
  sort?: string
}

export const CollectionArchive: React.FC<Props> = props => {
  const {
    categories: catsFromProps,
    className,
    limit = 10,
    onResultChange,
    populateBy,
    populatedDocs,
    populatedDocsTotal,
    relationTo,
    selectedDocs,
    showPageRange,
    sort = '-createdAt',
  } = props

  const [results, setResults] = useState<Result>({
    docs: (populateBy === 'collection'
      ? populatedDocs
      : populateBy === 'selection'
      ? selectedDocs
      : []
    )?.map(doc => doc.value),
    hasNextPage: false,
    hasPrevPage: false,
    nextPage: 1,
    page: 1,
    prevPage: 1,
    totalDocs: typeof populatedDocsTotal === 'number' ? populatedDocsTotal : 0,
    totalPages: 1,
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)
  const scrollRef = useRef<HTMLDivElement>(null)
  const hasHydrated = useRef(false)
  const isRequesting = useRef(false)
  const [page, setPage] = useState(1)

  const categories = (catsFromProps || [])
    .map(cat => (typeof cat === 'object' ? cat.id : cat))
    .join(',')

  const scrollToRef = useCallback(() => {
    const { current } = scrollRef
    if (current) {
      // current.scrollIntoView({
      //   behavior: 'smooth',
      // })
    }
  }, [])

  useEffect(() => {
    if (!isLoading && typeof results.page !== 'undefined') {
      // scrollToRef()
    }
  }, [isLoading, scrollToRef, results])

  useEffect(() => {
    let timer: NodeJS.Timeout = null

    if (populateBy === 'collection' && !isRequesting.current) {
      isRequesting.current = true

      // hydrate the block with fresh content after first render
      // don't show loader unless the request takes longer than x ms
      // and don't show it during initial hydration
      timer = setTimeout(() => {
        if (hasHydrated.current) {
          setIsLoading(true)
        }
      }, 500)

      const searchQuery = qs.stringify(
        {
          depth: 1,
          limit,
          page,
          sort,
          where: {
            ...(categories
              ? {
                  categories: {
                    in: categories,
                  },
                }
              : {}),
          },
        },
        { encode: false },
      )

      const makeRequest = async () => {
        try {
          const req = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/${relationTo}?${searchQuery}`,
          )

          const json = await req.json()
          clearTimeout(timer)

          const { docs } = json as { docs: (Post | Project)[] }

          if (docs && Array.isArray(docs)) {
            setResults(json)
            setIsLoading(false)
            if (typeof onResultChange === 'function') {
              onResultChange(json)
            }
          }
        } catch (err) {
          console.warn(err) // eslint-disable-line no-console
          setIsLoading(false)
          setError(`Unable to load "${relationTo} archive" data at this time.`)
        }

        isRequesting.current = false
        hasHydrated.current = true
      }

      void makeRequest()
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [page, categories, relationTo, onResultChange, sort, limit, populateBy])

  const renderGallery = () => {
    if (!results.docs) return <></>
    switch (relationTo) {
      case 'testimonials':
        return <TestimonialGallery testimonials={results.docs as Testimonial[]} />
      case 'listings':
        return <ListingGallery listings={results.docs as Listing[]} />
      case 'teammates':
        return <TeammateGallery teammates={results.docs as Teammate[]} />
      case 'companies':
        return <CompanyGallery companies={results.docs as Company[]} />
      case 'communityResources':
        return <CommunityResourceGallery communityResources={results.docs as CommunityResource[]} />
      case 'involvementEvents':
        return <InvolvementEventGallery events={results.docs as InvolvementEvent[]} />
      case 'involvementGroups':
        return <InvolvementGroupGallery groups={results.docs as InvolvementGroup[]} />
      case 'services':
        return <ServiceGallery services={results.docs as Service[]} />
      case 'projects':
        return <ProjectGallery projects={results.docs as Project[]} />
      default:
        return <></>
    }

    return <></>
  }

  return (
    <div className={[classes.collectionArchive, className].filter(Boolean).join(' ')}>
      <div className={classes.scrollRef} ref={scrollRef} />
      {!isLoading && error && <Gutter>{error}</Gutter>}
      <Fragment>
        {showPageRange !== false && populateBy !== 'selection' && (
          <Gutter>
            <div className={classes.pageRange}>
              <PageRange
                collection={relationTo}
                currentPage={results.page}
                limit={limit}
                totalDocs={results.totalDocs}
              />
            </div>
          </Gutter>
        )}
        <Gutter>
          {/* Rendering Proper Showcases for Each Item */}
          {renderGallery()}

          <div className={classes.grid}>
            {results.docs?.map((result, index) => {
              if (typeof result === 'object' && result !== null) {
                switch (relationTo) {
                  case 'posts':
                    return (
                      <div className={classes.column} key={index}>
                        <NewsCard doc={result as Post} relationTo={relationTo} />
                      </div>
                    )
                  default:
                    return <></>
                }
              }

              return null
            })}
          </div>
          {results.totalPages > 1 && populateBy !== 'selection' && (
            <Pagination
              className={classes.pagination}
              onClick={setPage}
              page={results.page}
              totalPages={results.totalPages}
            />
          )}
        </Gutter>
      </Fragment>
    </div>
  )
}
