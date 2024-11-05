import { TeammateCard } from '../TeammateCard'

import { Teammate } from '@/payload/payload-types'

import Link from 'next/link'

type Props = {
  teammates: Teammate[]
  displayHeader: 'yes' | 'no'
}

export const TeammateGallery = ({ teammates, displayHeader = 'no' }: Props) => {
  return (
    <div>
      {displayHeader === 'yes' && (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-between mb-16">
          <h2>Testimonials</h2>
          <Link href="/listings" className="btn-primary">
            VIEW ALL LISTINGS
          </Link>
        </div>
      )}
      <div className=" bg-wwRed global-margin-x place-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 py-24">
        {teammates.map(t => (
          <TeammateCard doc={t} />
        ))}
      </div>
    </div>
  )
}
