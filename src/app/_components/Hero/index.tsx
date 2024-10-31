import React from 'react'

import { Page } from '../../../payload/payload-types'
import { DefaultHero } from '../../_heros/DefaultHero'
import { FullscreenHero } from '../../_heros/FullscreenHero'
import { HighImpactHero } from '../../_heros/HighImpact'
import { LowImpactHero } from '../../_heros/LowImpact'
import { MediumImpactHero } from '../../_heros/MediumImpact'
import { ProjectHero } from '../../_heros/ProjectHero'

const heroes = {
  highImpact: HighImpactHero,
  mediumImpact: MediumImpactHero,
  lowImpact: LowImpactHero,
  fullscreen: FullscreenHero,
  default: DefaultHero,
  projectHero: ProjectHero,
}

export const Hero: React.FC<Page['hero']> = props => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
