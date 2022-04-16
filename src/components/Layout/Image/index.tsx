import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { useImageContext } from '~components/Context/ImageContext'
import { useScrollHeight } from '~components/Context/ScrollHeightContext'
import calculateScale from '~utils/calculateScale'

export type ImageProps = {
  alt?: string
  className?: string
  contentType: string
  height: number
  priority?: boolean
  scale?: number
  width: number
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
