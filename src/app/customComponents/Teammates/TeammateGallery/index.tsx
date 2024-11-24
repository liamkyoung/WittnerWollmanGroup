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
          <div className="bg-wwRed flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-between pt-24">
            <h2 className="text-white">Our Team</h2>
          </div>
        )}
        <div className="bg-wwRed place-items-center lg:place-items-start grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 py-24">
          {teammates.map(t => (
            <TeammateCard doc={t} key={t.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
