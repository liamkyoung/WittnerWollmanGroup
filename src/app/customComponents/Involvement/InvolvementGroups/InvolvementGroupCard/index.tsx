import React from 'react'
import Link from 'next/link'

import { InvolvementGroup, Media as MType } from '../../../../../payload/payload-types'
import DefaultCard from '../../../DefaultCard'

import { Media } from '@/app/_components/Media'
import CardInfo from '@/app/customComponents/CardInfo'

export const InvolvementGroupCard: React.FC<{
  className?: string
  doc?: InvolvementGroup
}> = props => {
  const { doc } = props

  const { title, image, description, highlight, linkToGroupWebsite } = doc || {}

  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  return (
    <div className={`min-w-64`}>
      {linkToGroupWebsite ? (
        <Link href={linkToGroupWebsite ? linkToGroupWebsite : '/'} className="hover:opacity-90">
          <div className={`max-w-64`}>
            <div className="relative">
              <Media resource={image as MType} imgClassName={'size-64 object-contain'} />
            </div>
            <div className="my-4 space-y-3">
              <h4>{title}</h4>
              {highlight && (
                <div className="flex items-center gap-2">
                  <div className="inline-flex gap-2">
                    <div className="p-1 rounded-full bg-wwRed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4 text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm font-bold">{highlight}</p>
                </div>
              )}

              <p>{sanitizedDescription}</p>
            </div>
          </div>
        </Link>
      ) : (
        <div className={`max-w-64`}>
          <div className="relative">
            <Media resource={image as MType} imgClassName={'size-64 object-contain'} />
          </div>
          <div className="my-4 space-y-3">
            <h4>{title}</h4>
            {highlight && (
              <div className="flex items-center gap-2">
                <div className="inline-flex gap-2">
                  <div className="p-1 rounded-full bg-wwRed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-sm font-bold">{highlight}</p>
              </div>
            )}
            <p>{sanitizedDescription}</p>
          </div>
        </div>
      )}
    </div>
  )
}
