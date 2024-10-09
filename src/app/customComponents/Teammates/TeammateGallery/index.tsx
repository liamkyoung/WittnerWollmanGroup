import { TeammateCard } from '../TeammateCard'
import { Teammate } from '@/payload/payload-types'

type Props = {
  teammates: Teammate[]
}

export const TeammateGallery = ({ teammates }: Props) => {
  return (
    <div className=" bg-wwRed global-margin-x place-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 py-24">
      {teammates.map(t => (
        <TeammateCard doc={t} />
      ))}
    </div>
  )
}
