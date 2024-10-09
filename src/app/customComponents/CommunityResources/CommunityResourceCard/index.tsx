import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { CommunityResource } from '../../../../payload/payload-types'
import { Media } from '../../../_components/Media'
import CardInfo from '../../CardInfo'

export const CommunityResourceCard: React.FC<{
  className?: string
  doc?: CommunityResource
}> = props => {
  const { doc, className } = props

  const { title, categories, image, description, address } = doc || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space

  return (
    <div className={`${className} w-96 lg:w-72 space-y-4`}>
      <div className="space-y-2">
        <h4>{title}</h4>
        <CardInfo address={address} />
      </div>

      <Media imgClassName={`w-full h-full`} resource={image} />
      <p className="border-l-4 border-wwRed pl-2">{sanitizedDescription}</p>
    </div>
  )
}

// function FavoritePlaceCard() {
//   return (
//     <div className="w-96 lg:w-72 space-y-4">
//       <div className="space-y-2">
//         <h4>Mangosteen</h4>
//         <CardInfo address="777 3rd Ave N, St. Petersburg" />
//       </div>

//       <Image src={Mangosteen} alt="place-img" className="w-full h-full" />
//       <p className="border-l-4 border-wwRed pl-2">
//         “I love Mangosteen because X, Y, Z. It&apos;s a fantastic restaurant
//         cause it is so tasty and good prices.”
//       </p>
//     </div>
//   )
// }

// export default FavoritePlaceCard
