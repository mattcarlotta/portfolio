/* istanbul ignore file */
import type {
  Block,
  Document,
  Inline,
  Mark,
  Node as ContentfulNode,
  Text
} from '@contentful/rich-text-types'
import type { ParsedUrlQuery } from 'querystring'
import type { ReactNode } from 'react'

export type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage
} from 'next'
export type { AppProps } from 'next/app'
export type {
  ChangeEvent,
  ComponentType,
  FC,
  FormEvent,
  KeyboardEvent,
  MouseEvent,
  ReactElement,
  ReactNode,
  Ref
} from 'react'
/// contentful types
export { Block, ContentfulNode, Document, Inline, Mark, Text }
export type BlockOrInline = Block | Inline
export type CommonNode = Text | BlockOrInline
export interface RenderNode {
  [k: string]: { (node: BlockOrInline, children: ReactNode): ReactNode }
}
export interface RenderMark {
  [k: string]: (text: ReactNode) => ReactNode
}
export interface RenderText {
  (text: string): ReactNode
}
export interface Options {
  renderNode?: RenderNode
  renderMark?: RenderMark
  renderText?: RenderText
}
///

export type AriaLabel = {
  ariaLabel: string
}

export type Children = {
  children: ReactNode
}

export type ChildrenWithId = Children & {
  id: string
}

export type DataTestId = {
  dataTestId: string
}

export type Href = {
  href: string
}

export type OptionalClassName = {
  className?: string
}

export type ContextParams = {
  params: ParsedUrlQuery
}

export type CONTENTFUL_ID = {
  sys: {
    id: string
  }
}

export type HeightAndWidth = {
  height: number
  width: number
}

export type OnClickEvent = {
  onClick: () => void
}

export type Title = {
  title: string
}

export type CONTENTFUL_IMAGE = HeightAndWidth &
  Title & {
    contentType: string
    description: string
    url: string
  }

export type CONTENTFUL_TITLE = Title

export type CONTENTFUL_SLUG = {
  slug: string
}

export type CONTENTFUL_JSON = {
  json: any
}

export type CONTENTFUL_DESCRIPTION = {
  description: CONTENTFUL_JSON
}

export type CONTENTFUL_BACKGROUND_PAGE = {
  profileImage: CONTENTFUL_IMAGE
  location: string
  rank: string
  email: string
  tech: {
    data: Array<{ level: number; technology: string }>
  }
  education: {
    data: Array<{ url: string; title: string }>
  }
} & CONTENTFUL_ID &
  CONTENTFUL_TITLE &
  CONTENTFUL_DESCRIPTION

export type CONTENTFUL_EXPLORATIONS_PAGE = {
  imagePriority: boolean
  sandboxId: string
  preview: CONTENTFUL_IMAGE
} & CONTENTFUL_ID &
  CONTENTFUL_TITLE &
  CONTENTFUL_SLUG

export type CONTENTFUL_PAGE_CARD = {
  description: string
  imagePriority: boolean
  preview: CONTENTFUL_IMAGE
} & CONTENTFUL_ID &
  CONTENTFUL_TITLE &
  CONTENTFUL_SLUG

export type CONTENTFUL_PROJECTS_PAGE = {
  imagePriority: boolean
  seoDescription: string
  active: boolean
  status: string
  location?: string | null
  source: string
  preview: CONTENTFUL_IMAGE
  tech: Array<string>
  snapshotsCollection: {
    items: Array<CONTENTFUL_IMAGE>
  }
} & CONTENTFUL_ID &
  CONTENTFUL_TITLE &
  CONTENTFUL_DESCRIPTION &
  CONTENTFUL_SLUG

type AsyncReturnType<T> = T extends (...args: any[]) => Promise<infer R>
  ? R
  : any

type Filter<T, U> = T extends U ? T : never

export type InferNextProps<T> = Filter<
  AsyncReturnType<T>,
  { props: any }
>['props']
