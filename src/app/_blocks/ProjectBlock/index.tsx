import { StaticImageData } from 'next/image'

import { ColorScheme } from '../../../app/types/viewmodels'
import { Media as MType, Page } from '../../../payload/payload-types'
import ProjectBlockLeft from './ProjectBlockLeft'
import ProjectBlockRight from './ProjectBlockRight'

export type ProjectBlockProps = Extract<Page['layout'][0], { blockType: 'projectBlock' }> & {
  staticImage?: StaticImageData
  id?: string
}

export const ProjectBlock: React.FC<ProjectBlockProps> = props => {
  const { media, position, subheading, subheadingType, title, bgColor, links, description, facts } =
    props

  let caption
  if (media && typeof media === 'object') caption = media.caption

  // console.log('Position: ', props)

  let color = ColorScheme.DEFAULT
  if (bgColor === 'red') {
    color = ColorScheme.RED
  }

  // If position of Image == right
  if (position === 'right') {
    return (
      <ProjectBlockLeft
        links={links}
        colorScheme={color}
        title={title}
        image={media as MType}
        subheading={subheading}
        subheadingType={subheadingType}
        description={description}
        facts={facts}
      />
    )
  }

  return (
    <ProjectBlockRight
      links={links}
      colorScheme={color}
      title={title}
      image={media as MType}
      subheading={subheading}
      subheadingType={subheadingType}
      description={description}
      facts={facts}
    />
  )
}
