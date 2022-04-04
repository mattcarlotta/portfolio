import { css } from '@emotion/react'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { useImageContext } from '~components/ImageContext'
import LoadingPlaceholder from '~components/Layout/LoadingPlaceholder'
import { useScrollHeight } from '~components/ScrollHeightContext'
import calculateScale from '~utils/calculateScale'

export type ImageProps = {
  alt?: string
  containerStyle?: string
  contentType: string
  height: number
  priority?: boolean
  scale?: number
  styles?: string
  width: number
  url: string
}

export default function Image({
  alt,
  containerStyle,
  contentType,
  height,
  priority = false,
  scale = 0,
  styles,
  url,
  width
}: ImageProps) {
  const { supportsWebp } = useImageContext()
  const imageRef = useRef<HTMLImageElement | null>(null)
  const { clientHeight, scrollHeight } = useScrollHeight()
  const [isLoading, setLoading] = useState(true)
  const isRescaled = scale !== 0
  const newHeight = isRescaled ? calculateScale(height, scale) : height
  const newWidth = isRescaled ? calculateScale(width, scale) : width
  const rescale = isRescaled ? `fit=scale&h=${newHeight}&w=${newWidth}` : ''

  useEffect(() => {
    if (imageRef.current && clientHeight > 0 && isLoading) {
      const { top: topOfImage } = imageRef.current.getBoundingClientRect()
      /* istanbul ignore next */
      if (clientHeight >= topOfImage || scrollHeight >= topOfImage)
        setLoading(false)
    }
  }, [isLoading, scrollHeight, clientHeight])

  return (
    <>
      <picture
        ref={imageRef}
        data-testid="picture"
        css={css`
          ${containerStyle}
        `}
      >
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
              css={css`
                ${styles}
              `}
              src={url}
              height={newHeight}
              width={newWidth}
              alt={alt}
            />
          </>
        ) : (
          <LoadingPlaceholder
            data-testid="placeholder"
            height={height}
            width={width}
            isLoading={isLoading}
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
