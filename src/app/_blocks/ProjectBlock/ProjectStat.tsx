import { ColorScheme } from '../../types/viewmodels'
import React from 'react'

type Props = {
  colorScheme?: ColorScheme
  stat: string
  description: string
}

function ProjectStat({ colorScheme = ColorScheme.DEFAULT, stat, description }: Props) {
  let textColor = 'text-wwBlack'
  let emphasisColor = 'text-wwRed'
  let borderColor = 'border-wwRed'

  // RED Background
  if (colorScheme === ColorScheme.RED) {
    textColor = 'text-white'
    emphasisColor = 'text-wwYellow'
    borderColor = 'border-wwYellow'
  }

  return (
    <div className="w-48 lg:w-72">
      <h5 className={`border-l-2 pl-4 ${emphasisColor} ${borderColor}`}>{stat}</h5>
      <p className={`pl-4 ${textColor}`}>{description}</p>
    </div>
  )
}

export default ProjectStat
