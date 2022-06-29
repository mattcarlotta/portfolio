import Head from 'next/head'
import { useRef } from 'react'
import { useImageContext } from '~components/Context/ImageContext'
import type { HeightAndWidth, OptionalClassName } from '~types'
import calculateScale from '~utils/calculateScale'
import useLoadingElement from '~utils/useLoadingElement'

export type ImageProps = HeightAndWidth &
  OptionalClassName & {
    alt?: string
    contentType: string
    priority?: boolean
    scale?: number
    url: string
  }

export default function Image({
  alt,
  className,
  contentType,
  height,
  priority = false,
  scale = 0,
  url,
  width
}: ImageProps) {
  const { supportsWebp } = useImageContext()
  const imageRef = useRef<HTMLImageElement | null>(null)
  const isLoading = useLoadingElement(imageRef)
  const isRescaled = scale !== 0
  const newHeight = isRescaled ? calculateScale(height, scale) : height
  const newWidth = isRescaled ? calculateScale(width, scale) : width
  const rescale = isRescaled ? `fit=scale&h=${newHeight}&w=${newWidth}` : ''

  return (
    <>
      <picture ref={imageRef} data-testid="picture">
        {!isLoading ? (
          <>
            <source
              srcSet={`${url}?fm=webp${isRescaled ? `&${rescale}` : ''}`}
              type="image/webp"
            />
            <source
              srcSet={`${url}${isRescaled ? `?${rescale}` : ''}`}
              type={contentType}
            />
            <img
              data-testid="image"
              src={url}
              height={newHeight}
              width={newWidth}
              alt={alt}
              className={className}
            />
          </>
        ) : (
          <div
            className="mx-auto animate-pulse rounded bg-primary-800"
            data-testid="placeholder"
            style={{
              height,
              width
            }}
          />
        )}
      </picture>
      {priority ? (
        <Head>
          <link
            rel="preload"
            as="image"
            href={
              supportsWebp
                ? `${url}?fm=webp${isRescaled ? `&${rescale}` : ''}`
                : `${url}${isRescaled ? `?${rescale}` : ''}`
            }
          />
        </Head>
      ) : null}
    </>
  )
}
