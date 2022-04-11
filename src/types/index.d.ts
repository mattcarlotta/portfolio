/* istanbul ignore file */
import type { Document, NodeData } from '@contentful/rich-text-types'
import { ParsedUrlQuery } from 'querystring'

export type { EmotionCache } from '@emotion/react'
export type { TooltipProps } from '@mui/material/Tooltip'
export type { TransitionProps } from '@mui/material/transitions'
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
  CSSProperties,
  FC,
  FormEvent,
  KeyboardEvent,
  MouseEvent,
  ReactElement,
  ReactNode,
  Ref
} from 'react'
export { Document, NodeData }

export type ContextParams = {
  params: ParsedUrlQuery
}

export type CONTENTFUL_ID = {
  sys: {
    id: string
  }
}

export type CONTENTFUL_IMAGE = {
  url: string
  description: string
  contentType: string
  height: number
  width: number
  title: string
}

export type CONTENTFUL_TITLE = {
  title: string
}

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
