/* eslint-disable function-paren-newline */

'use client'
import React, { useEffect, useRef,useState  } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

import { GoogleMapPin, ListingCardDTO, SortListingsEnum } from '../../../app/types/viewmodels'
import { PropertyTypes } from '../../../payload/collections/Listings'
import { Listing, Media, Teammate } from '../../../payload/payload-types'
import { GoogleMap } from '../GoogleMap/GoogleMap'
import { ListingCard } from './index'
import ListingFilter from './ListingFilter'

import { ListingLinks } from '@/globalData/navigation/listings/listings'

type Props = {
  listings: ListingCardDTO[]
  displayHeader: 'yes' | 'no'
  isLoading?: boolean
}

function convertListingsToPins(listings: ListingCardDTO[]) {
  const pins: GoogleMapPin[] = listings.map(m => {
    return {
      name: m.title,
      coords: { lat: m.latitude, lng: m.longitude },
      slug: m.slug,
      coverImg: m.coverImage as Media,
      address: m.address,
      price: m.price,
    }
  })

  return pins
}

// Used to put negotiable listings first
const sortWithNullsFirst = (
  a: ListingCardDTO,
  b: ListingCardDTO,
  comparator: (a: ListingCardDTO, b: ListingCardDTO) => number,
) => {
  if (a.price === null && b.price === null) {
    return 0
  }
  if (a.price === null) {
    return -1
  }
  if (b.price === null) {
    return 1
  }
  return comparator(a, b)
}

const sortListings = (listings: ListingCardDTO[], sortType: SortListingsEnum) => {
  switch (sortType) {
    case SortListingsEnum.NEWEST:
      return listings.sort(
        (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
      )
    case SortListingsEnum.LEAST_EXPENSIVE:
      return listings.sort((a, b) => sortWithNullsFirst(a, b, (a, b) => a.price - b.price))
    case SortListingsEnum.MOST_EXPENSIVE:
      return listings.sort((a, b) => sortWithNullsFirst(a, b, (a, b) => b.price - a.price))

    default:
      break
  }

  return listings
}

const filterBySelectedAgents = (
  listings: ListingCardDTO[],
  agents: Map<string, boolean>,
): ListingCardDTO[] => {
  const filteredListings = listings.filter(listing => {
    if (agents.get('All')) return true
    if (!listing.agents || listing.agents.length === 0) return false // No Agent

    const listingAgentNames = (listing.agents as Teammate[]).map(t => t.title)
    return listingAgentNames.some(item => agents.has(item) && agents.get(item))
  })

  return filteredListings
}

const filterByPropertyType = (
  listings: ListingCardDTO[],
  propertyTypes: Map<string, boolean>,
): ListingCardDTO[] => {
  if (propertyTypes.get('All')) return listings

  const filteredListings = listings.filter(i => {
    return (
      i.propertyTypes && propertyTypes.has(i.propertyTypes) && propertyTypes.get(i.propertyTypes)
    )
  })

  return filteredListings
}

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const FadeInOnScroll = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  return (
    <motion.div
      ref={ref}
      variants={fadeInUpVariants}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

export const ListingGallery = ({ listings, displayHeader, isLoading = false }: Props) => {
  // Filters being applied
  const [sortType, setSortType] = useState(SortListingsEnum.MOST_EXPENSIVE)
  const [selectedAgents, setSelectedAgents] = useState<Map<string, boolean>>(
    new Map([
      ['All', true],
      ['Kyla Flesher', false],
      ['Gregg Rossman', false],
      ['Marlee Wittner', false],
      ['Wayne Tubel', false],
      ['Nicole Potts Hart', false],
      ['Jon Wittner', false],
      ['Jay Wittner', false],
      ['Justine Fite', false],
      ['Rachael Manzanares', false],
      ['Amber Bennett', false],
      ['Morgan Dyer', false],
    ]),
  )

  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<Map<string, boolean>>(
    new Map(
      [
        { label: 'All', value: 'All' }, // Add "All" to the array
        ...PropertyTypes,
      ]
        .sort((a, b) =>
          a.value === 'All' ? -1 : b.value === 'All' ? 1 : a.value.localeCompare(b.value),
        )
        .map(({ value }) => [value, value === 'All']), // Map values to entries, setting "All" to true
    ),
  )

  const sorted = sortListings(listings, sortType)
  const filteredByAgent = filterBySelectedAgents(sorted, selectedAgents)
  const finalList = filterByPropertyType(filteredByAgent, selectedPropertyTypes)

  const [filteredListings, setFilteredListings] = useState<ListingCardDTO[]>(finalList)

  useEffect(() => {
    const sorted = sortListings(listings, sortType)
    const filteredByAgent = filterBySelectedAgents(sorted, selectedAgents)
    const finalList = filterByPropertyType(filteredByAgent, selectedPropertyTypes)
    setFilteredListings(finalList)
  }, [listings, sortType, selectedAgents, selectedPropertyTypes])

  const pins = convertListingsToPins(filteredListings)

  return (
    <div className="global-margin-x global-margin-y overflow-x-hidden">
      {displayHeader === 'yes' ? (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-between mb-16">
          <h2>Current Listings</h2>
          <Link href={ListingLinks.relLink} className="btn-primary hidden lg:block">
            VIEW ALL LISTINGS
          </Link>
        </div>
      ) : (
        <div className="mb-16">
          <h2>Our Listings</h2>
        </div>
      )}

      <ListingFilter
        setSortType={setSortType}
        agents={selectedAgents}
        propertyTypes={selectedPropertyTypes}
        setSelectedAgents={setSelectedAgents}
        setSelectedPropertyTypes={setSelectedPropertyTypes}
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8 overflow-y-scroll h-[44rem]">
          {filteredListings &&
            filteredListings.map((l, i) => (
              <FadeInOnScroll key={l.id || `${l.title}-${i}`}>
                <ListingCard doc={l} isLoading={isLoading} />
              </FadeInOnScroll>
            ))}
        </div>
        <div className="">
          <GoogleMap pins={pins} pinType="listing" />
        </div>
      </div>

      {displayHeader === 'yes' && (
        <div className="lg:hidden flex flex-col gap-8 lg:gap-0 items-center my-8">
          <Link href={ListingLinks.relLink} className="btn-primary">
            VIEW ALL LISTINGS
          </Link>
        </div>
      )}
    </div>
  )
}
