import { CommunityResource } from '@/payload/payload-types'
import React from 'react'
import { CommunityResourceCard } from '../CommunityResourceCard'

type Props = {
  communityResources: CommunityResource[]
}

export const CommunityResourceGallery = ({ communityResources }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 mt-24 place-items-center">
      {/* TODO: Put Category Selector Here */}
      {communityResources?.map(r => (
        <CommunityResourceCard doc={r} key={r.id} />
      ))}
    </div>
  )
}
