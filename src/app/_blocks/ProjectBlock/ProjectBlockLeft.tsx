import Link from 'next/link'

import { Media } from '../../../app/_components/Media'
import { Media as MType, Page } from '../../../payload/payload-types'
import ProjectStat from '../../customComponents/Projects/ProjectStat'
import { ColorScheme, FactStat } from '../../types/viewmodels'

import { CMSLink } from '@/app/_components/Link'

type Props = {
  colorScheme?: ColorScheme
  links?:
    | {
        link: {
          type?: ('reference' | 'custom') | null
          newTab?: boolean | null
          reference?: {
            relationTo: 'pages'
            value: number | Page
          } | null
          url?: string | null
          label: string
          appearance?: ('default' | 'primary' | 'secondary') | null
        }
        id?: string | null
      }[]
    | null
  title: string
  subheading: string
  subheadingType: 'location' | 'text' | 'none'
  image: MType
  description: string
  facts?: FactStat[]
}

function ProjectBlockLeft({
  links,
  colorScheme = ColorScheme.DEFAULT,
  title,
  subheading,
  subheadingType,
  image,
  description,
  facts,
}: Props) {
  let bgColor = 'bg-gray-50'
  let textColor = 'text-wwBlack'
  let buttonStyle = 'btn-primary'
  let emphasisColor = 'text-wwRed'

  if (colorScheme === ColorScheme.RED) {
    bgColor = 'bg-wwRed'
    textColor = 'text-white'
    buttonStyle = 'btn-secondary'
    emphasisColor = 'text-wwYellow'
  }

  return (
    <div className={`grid lg:grid-cols-2 ${bgColor} overflow-x-hidden`}>
      <div className="p-8 ml-8 lg:mr-8 my-auto relative 2xl:ml-32 2xl:mr-16">
        <div className="relative md:py-10 lg:py-8">
          <h2 className={`${textColor} text-center lg:text-left text-4xl lg:text-5xl`}>{title}</h2>
          <div className="lg:inline-flex flex gap-2 mt-2 justify-center">
            {subheading && subheadingType === 'location' && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-6 ${emphasisColor}`}
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className={emphasisColor}>{subheading}</p>
              </>
            )}

            {subheadingType === 'text' && subheading && (
              <p className={emphasisColor}>{subheading}</p>
            )}
          </div>
        </div>
        {facts && facts.length > 0 && (
          <div className={`hidden 2xl:flex gap-4 ${bgColor} p-4`}>
            {facts.map((f, i) => (
              <ProjectStat
                colorScheme={colorScheme}
                stat={f.factStat}
                description={f.factDescription}
                key={i}
              />
            ))}
          </div>
        )}

        <p
          className={`mb-10 pt-8 md:pt-4 ${
            facts && facts.length > 0 && '2xl:mt-8'
          } ${textColor} text-center lg:text-left`}
        >
          {description}
        </p>
        {facts && (
          <div
            className={`2xl:hidden flex flex-row flex-wrap justify-center lg:justify-start gap-8 p-4`}
          >
            {facts.map((f, i) => (
              <ProjectStat
                colorScheme={colorScheme}
                stat={f.factStat}
                description={f.factDescription}
                key={i}
              />
            ))}
          </div>
        )}
        {links && (
          <div className="flex flex-col lg:justify-start justify-center sm:flex-row items-center gap-4 py-8">
            {links.map((l, i) => (
              <CMSLink className={`${buttonStyle}`} {...l.link} key={l.id || i} />
            ))}
          </div>
        )}
      </div>
      <Media
        resource={image}
        imgClassName="sm:w-full max-h-96 lg:max-h-none lg:h-full object-cover"
      />
    </div>
  )
}

export default ProjectBlockLeft
