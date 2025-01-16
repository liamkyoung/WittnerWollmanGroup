import React, { Fragment } from 'react'
import escapeHTML from 'escape-html'
import Link from 'next/link'
import { Text } from 'slate'

import { Label } from '../Label'
import { LargeBody } from '../LargeBody'
import { CMSLink } from '../Link'

// eslint-disable-next-line no-use-before-define
type Children = Leaf[]

type Leaf = {
  type: string
  value?: {
    url: string
    alt: string
  }
  children?: Children
  url?: string
  [key: string]: unknown
}

const serialize = (children?: Children, textColor: string = 'text-black'): React.ReactNode[] =>
  children?.map((node, i) => {
    if (Text.isText(node)) {
      let text = <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />

      if (node.bold) {
        text = (
          <strong key={i} className={textColor}>
            {text}
          </strong>
        )
      }

      if (node.code) {
        text = (
          <code key={i} className={textColor}>
            {text}
          </code>
        )
      }

      if (node.italic) {
        text = (
          <em key={i} className={textColor}>
            {text}
          </em>
        )
      }

      if (node.underline) {
        text = (
          <span style={{ textDecoration: 'underline' }} key={i} className={textColor}>
            {text}
          </span>
        )
      }

      if (node.strikethrough) {
        text = (
          <span style={{ textDecoration: 'line-through' }} key={i} className={textColor}>
            {text}
          </span>
        )
      }

      return (
        <span key={i} className={textColor}>
          {text}
          <br />
        </span>
      )
    }

    if (!node) {
      return null
    }

    switch (node.type) {
      case 'h1':
        return (
          <h1 key={i} className={textColor}>
            {serialize(node?.children)}
          </h1>
        )
      case 'h2':
        return (
          <h2 key={i} className={textColor}>
            {serialize(node?.children)}
          </h2>
        )
      case 'h3':
        return (
          <h3 key={i} className={textColor}>
            {serialize(node?.children)}
          </h3>
        )
      case 'h4':
        return (
          <h4 key={i} className={textColor}>
            {serialize(node?.children)}
          </h4>
        )
      case 'h5':
        return (
          <h5 key={i} className={textColor}>
            {serialize(node?.children)}
          </h5>
        )
      case 'h6':
        return (
          <h6 key={i} className={textColor}>
            {serialize(node?.children)}
          </h6>
        )
      case 'quote':
        return (
          <blockquote key={i} className={textColor}>
            {serialize(node?.children)}
          </blockquote>
        )
      case 'ul':
        return (
          <ul key={i} className={textColor}>
            {serialize(node?.children)}
          </ul>
        )
      case 'ol':
        return (
          <ol key={i} className={textColor}>
            {serialize(node.children)}
          </ol>
        )
      case 'li':
        return (
          <li key={i} className={textColor}>
            {serialize(node.children)}
          </li>
        )
      case 'link':
        return (
          <CMSLink
            key={i}
            type={node.linkType === 'internal' ? 'reference' : 'custom'}
            url={node.url}
            reference={node.doc as any}
            newTab={Boolean(node?.newTab)}
            className={textColor}
          >
            {serialize(node?.children)}
          </CMSLink>
        )

      case 'label':
        return <Label key={i}>{serialize(node?.children)}</Label>

      case 'large-body': {
        return <LargeBody key={i}>{serialize(node?.children)}</LargeBody>
      }

      default:
        return (
          <p key={i} className={textColor}>
            {serialize(node?.children, textColor)}
          </p>
        )
    }
  }) || []

export default serialize
