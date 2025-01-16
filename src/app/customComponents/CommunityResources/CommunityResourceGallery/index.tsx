'use client'
import React, { useEffect, useState } from 'react'

import { CommunityResourceCard } from '../CommunityResourceCard'

import { Category, CommunityResource } from '@/payload/payload-types'

type Props = {
  communityResources: CommunityResource[]
  displayHeader?: 'yes' | 'no'
}

type Option = {
  label: string
  shorthand: string
  selected: boolean
}

export const CommunityResourceGallery = ({ communityResources, displayHeader = 'no' }: Props) => {
  const nonSelectedStyle =
    'text-black whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 hover:cursor-pointer'
  const selectedStyle =
    'text-black whitespace-nowrap border-b-2 border-wwRed px-1 py-4 text-sm font-medium text-wwRed'

  const [options, setOptions] = useState<Option[]>([
    {
      label: 'All',
      shorthand: 'a',
      selected: true,
    },
    {
      label: 'Exercise',
      shorthand: 'ex',
      selected: false,
    },
    {
      label: 'Enrichment',
      shorthand: 'en',
      selected: false,
    },
    {
      label: 'Government',
      shorthand: 'gov',
      selected: false,
    },
    {
      label: 'Entertainment',
      shorthand: 'ent',
      selected: false,
    },
    {
      label: 'Parks and Rec',
      shorthand: 'pr',
      selected: false,
    },
    {
      label: 'Disaster Relief',
      shorthand: 'dr',
      selected: false,
    },
    {
      label: 'Realtor Resources',
      shorthand: 'rr',
      selected: false,
    },
    {
      label: 'Dining',
      shorthand: 'din',
      selected: false,
    },
    {
      label: 'Shopping',
      shorthand: 'sh',
      selected: false,
    },
    {
      label: 'Volunteering',
      shorthand: 'v',
      selected: false,
    },
  ])

  const sortedResources = communityResources.sort((a, b) =>
    a.title?.toLowerCase().localeCompare(b.title?.toLowerCase()),)

  const findOptionByShorthand = (sh: string) => options.find(o => o.shorthand === sh)

  const selectedOption = options.find(o => o.selected)

  useEffect(() => {}, [options])

  const handleSelect = (o: Option) => {
    const updatedOptions = options.map(option => ({
      ...option, // spread the existing option object
      selected: option.shorthand === o.shorthand, // update only the selected property
    }))

    setOptions(updatedOptions) // set the new array as state
  }

  return (
    <div className="global-margin-x">
      {displayHeader === 'yes' && (
        <h2 className="mb-16 text-center lg:hidden block">Community Resources</h2>
      )}
      {sortedResources && sortedResources.length > 0 && (
        <>
          <div className="">
            <div className="md:hidden">
              <label htmlFor="tabs" className="sr-only">
                Select a tab
              </label>
              <select
                id="tabs"
                name="tabs"
                className="text-black block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-wwRed focus:outline-none focus:ring-wwRed sm:text-sm"
                onChange={e => handleSelect(findOptionByShorthand(e.target.value))}
              >
                {options && options.length > 0 ? (
                  options.map((o, i) => (
                    <option
                      key={i}
                      selected={o.selected}
                      onSelect={() => handleSelect(o)}
                      className=""
                      value={o.shorthand}
                    >
                      {o.label}
                    </option>
                  ))
                ) : (
                  <div className="flex glex-grow">There are no resources in this category</div>
                )}
              </select>
            </div>
            <div className="hidden md:block">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8 justify-start" aria-label="Tabs">
                  {options.map((o, i) => (
                    <div
                      className={o.selected ? selectedStyle : nonSelectedStyle}
                      onClick={() => handleSelect(o)}
                      key={i}
                    >
                      {o.label}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 my-24 lg:place-items-start place-items-center">
            {/* TODO: Put Category Selector Here */}
            {sortedResources &&
              sortedResources.length > 0 &&
              sortedResources?.map(r => {
                const category = r.categories as Category
                if (
                  selectedOption.label === 'All' ||
                  category?.title?.includes(selectedOption.label)
                ) {
                  return <CommunityResourceCard doc={r} key={r.id} />
                }
              })}
          </div>

          {(!communityResources || communityResources?.length == 0) && (
            <p className="text-center font-bold flex items-center justify-center my-24">
              There are no resources for this category
            </p>
          )}
        </>
      )}
    </div>
  )
}
