import Link from 'next/link'

import { TeammateCard } from '../TeammateCard'

import { ListingLinks } from '@/globalData/navigation/listings/listings'
import { Teammate } from '@/payload/payload-types'

type Props = {
  teammates: Teammate[]
  displayHeader: 'yes' | 'no'
}

export const TeammateGallery = ({ teammates, displayHeader = 'no' }: Props) => {
  return (
    <div className="bg-wwRed">
      <div className="global-margin-x">
        {displayHeader === 'yes' && (
          <div className="bg-wwRed pt-24">
            <h2 className="text-white text-center">The Wittner Wollman Group</h2>
          </div>
        )}
        <div className="bg-wwRed place-items-center lg:place-items-start grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-24 py-24">
          {teammates.map(t => (
            <TeammateCard doc={t} key={t.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
