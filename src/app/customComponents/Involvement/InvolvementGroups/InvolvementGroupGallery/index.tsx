import { InvolvementGroupCard } from '../InvolvementGroupCard'

import { InvolvementGroup } from '@/payload/payload-types'

type Props = {
  groups: InvolvementGroup[]
}

export const InvolvementGroupGallery = ({ groups }: Props) => {
  return (
    <div className="my-24">
      <div className="w-full h-full mt-16">
        <div className="global-margin-x space-y-16">
          <h2 className="text-center lg:text-left">Our Involvement</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
            {groups.map(g => (
              <InvolvementGroupCard doc={g} key={g.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
