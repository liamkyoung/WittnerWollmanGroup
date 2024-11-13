import Link from 'next/link'

import { Media } from '../../../app/_components/Media'
import { Media as MType } from '../../../payload/payload-types'
import ProjectStat from '../../customComponents/Projects/ProjectStat'
import { ColorScheme, FactStat } from '../../types/viewmodels'

type Props = {
  colorScheme?: ColorScheme
  links?: { link: string; buttonName: string }[]
  title: string
  subheading: string
  subheadingType: 'location' | 'text' | 'none'
  image: MType
  description: string
  facts: FactStat[]
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
    <div className={`grid lg:grid-cols-2 ${bgColor}`}>
      <div className="lg:ml-32 mr-8 my-auto relative p-8 lg:p-0 lg:mr-16">
        <div className="relative md:py-10 lg:py-8">
          <h2 className={`${textColor} text-center lg:text-left`}>{title}</h2>
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
        {facts && (
          <div className={`hidden 2xl:flex gap-4 absolute top-32 ${bgColor} p-4`}>
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
            facts && facts.length > 0 && '2xl:mt-48'
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

        {links &&
          links.length > 0 &&
          links.map((l, i) => (
            <div className="flex justify-center lg:block py-8" key={i}>
              <Link href={l.link} className={`${buttonStyle} `}>
                {l.buttonName}
              </Link>
            </div>
          ))}
      </div>
      <Media
        resource={image}
        alt="property image"
        imgClassName="w-full max-h-96 lg:max-h-none lg:h-full object-cover"
      />
    </div>
  )
}

export default ProjectBlockLeft
