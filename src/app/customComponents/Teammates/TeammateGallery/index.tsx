import Link from 'next/link'

import { TeammateCard } from '../TeammateCard'

import { ListingLinks } from '@/globalData/navigation/listings/listings'
import { Teammate } from '@/payload/payload-types'

type Props = {
  teammates: Teammate[]
  displayHeader: 'yes' | 'no'
}

export const TeammateGallery = ({ teammates, displayHeader = 'no' }: Props) => {
  const sortedTeammates = teammates.sort((a, b) => a.rank - b.rank)
  return (
    <div className="bg-wwRed pb-36">
      <div className="global-margin-x">
        {displayHeader === 'yes' && (
          <div className="bg-wwRed pt-24">
            <h2 className="text-white text-center">The Wittner Wollman Group</h2>
          </div>
        )}
        <div className="bg-wwRed place-items-center lg:place-items-start grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-24 py-24">
          {sortedTeammates.map((t, i) => (
            <TeammateCard doc={t} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
