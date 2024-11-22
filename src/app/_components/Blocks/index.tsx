import React, { Fragment } from 'react'

import { Page } from '../../../payload/payload-types.js'
import { ArchiveBlock } from '../../_blocks/ArchiveBlock'
import { CallToActionBlock } from '../../_blocks/CallToAction'
import { ContentBlock } from '../../_blocks/Content'
import { ContentAndStatsBlock } from '../../_blocks/ContentAndStatsBlock'
import { GoogleMapsBlock, type GoogleMapsBlockProps } from '../../_blocks/GoogleMapsBlock'
import { MediaBlock } from '../../_blocks/MediaBlock'
import { ProjectBlock, type ProjectBlockProps } from '../../_blocks/ProjectBlock'
import { RelatedPosts, type RelatedPostsProps } from '../../_blocks/RelatedPosts'
import { StatBlock, type StatBlockProps } from '../../_blocks/StatBlock'
import { type StatAndVideoBlockProps, StatsAndVideoBlock } from '../../_blocks/StatsAndVideoBlock'
import { VideoBlock, type VideoBlockProps } from '../../_blocks/VideoBlock'
import { toKebabCase } from '../../_utilities/toKebabCase'
import { BackgroundColor } from '../BackgroundColor'
import { VerticalPadding, VerticalPaddingOptions } from '../VerticalPadding'

const blockComponents = {
  cta: CallToActionBlock,
  content: ContentBlock,
  mediaBlock: MediaBlock,
  projectBlock: ProjectBlock,
  statsAndVideoBlock: StatsAndVideoBlock,
  contentAndStatsBlock: ContentAndStatsBlock,
  statBlock: StatBlock,
  archive: ArchiveBlock,
  relatedPosts: RelatedPosts,
  googleMapsBlock: GoogleMapsBlock,
  videoBlock: VideoBlock,
}

export const Blocks: React.FC<{
  blocks: (
    | Page['layout'][0]
    | RelatedPostsProps
    | ProjectBlockProps
    | StatAndVideoBlockProps
    | VideoBlockProps
    | StatBlockProps
    | GoogleMapsBlockProps
  )[]
  disableTopPadding?: boolean
}> = props => {
  const { disableTopPadding, blocks } = props

  // console.log('Block Props: ', props)

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            // the cta block is containerized, so we don't consider it to be inverted at the block-level
            const blockIsInverted =
              'invertBackground' in block && blockType !== 'cta' ? block.invertBackground : false
            const prevBlock = blocks[index - 1]

            const prevBlockInverted =
              prevBlock && 'invertBackground' in prevBlock && prevBlock?.invertBackground

            const isPrevSame = Boolean(blockIsInverted) === Boolean(prevBlockInverted)

            let paddingTop: VerticalPaddingOptions = 'large'
            let paddingBottom: VerticalPaddingOptions = 'large'

            if (prevBlock && isPrevSame) {
              paddingTop = 'none'
            }

            if (index === blocks.length - 1) {
              paddingBottom = 'large'
            }

            if (disableTopPadding && index === 0) {
              paddingTop = 'none'
            }

            if (Block) {
              return (
                <BackgroundColor key={index} invert={blockIsInverted}>
                  <VerticalPadding top={paddingTop} bottom={paddingBottom}>
                    {/* @ts-expect-error */}
                    <Block id={toKebabCase(blockName)} {...block} />
                  </VerticalPadding>
                </BackgroundColor>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
