import { ColorScheme } from '../../types/viewmodels'
import React from 'react'

type Props = {
  colorScheme?: ColorScheme
}

function ProjectStat({ colorScheme = ColorScheme.DEFAULT }: Props) {
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
      <h5 className={`border-l-2 pl-4 ${emphasisColor} ${borderColor}`}>11.9%</h5>
      <p className={`pl-4 ${textColor}`}>
        average revenue uplift for businesses using WW-Group&apos;s Leasing Services
      </p>
    </div>
  )
}

export default ProjectStat
