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
    'whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 hover:cursor-pointer'
  const selectedStyle =
    'whitespace-nowrap border-b-2 border-wwRed px-1 py-4 text-sm font-medium text-wwRed'

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
      label: 'Volunteering',
      shorthand: 'v',
      selected: false,
    },
  ])

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
    <>
      {displayHeader === 'yes' && <h2 className="mb-16">Community Resources</h2>}
      {communityResources && communityResources.length > 0 && (
        <>
          <div className="global-margin-x">
            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">
                Select a tab
              </label>
              <select
                id="tabs"
                name="tabs"
                className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                {options && options.length > 0 ? (
                  options.map(o => (
                    <option selected={o.selected} onSelect={() => handleSelect(o)}></option>
                  ))
                ) : (
                  <div className="flex glex-grow">There are no resources in this category</div>
                )}
              </select>
            </div>
            <div className="hidden sm:block">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  {options.map(o => (
                    <div
                      className={o.selected ? selectedStyle : nonSelectedStyle}
                      onClick={() => handleSelect(o)}
                    >
                      {o.label}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 my-24 place-items-center mx-20">
            {/* TODO: Put Category Selector Here */}
            {communityResources &&
              communityResources.length > 0 &&
              communityResources?.map(r => {
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
    </>
  )
}
