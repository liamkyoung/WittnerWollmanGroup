import { InvolvementGroupCard } from '../InvolvementGroupCard'

import { InvolvementGroup } from '@/payload/payload-types'

type Props = {
  groups: InvolvementGroup[]
  displayHeader: 'yes' | 'no'
}

export const InvolvementGroupGallery = ({ groups, displayHeader = 'yes' }: Props) => {
  return (
    <div className="my-24">
      <div className="w-full h-full mt-16">
        <div className="global-margin-x space-y-16">
          {displayHeader === 'yes' && <h2 className="text-center sm:text-left">Our Involvement</h2>}
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 lg:place-items-start place-items-center gap-16">
            {groups.map(g => (
              <InvolvementGroupCard doc={g} key={g.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
