import { useImageContext } from '~components/Context/ImageContext'
import type { HeightAndWidth, OnClickEvent, Title } from '~types'
import calculateScale from '~utils/calculateScale'
import clsx from '~utils/clsx'

export type ImagePreviewButtonProps = HeightAndWidth &
  OnClickEvent &
  Title & {
    active: boolean
    src: string
  }

export default function ImagePreviewButton({
  active,
  height,
  onClick,
  src,
  title,
  width
}: ImagePreviewButtonProps) {
  const newHeight = calculateScale(height, 10)
  const newWidth = calculateScale(width, 10)

  const backgroundImage = useImageContext().supportsWebp
    ? `url(${src}?fm=webp&h=${newHeight}&w=${newWidth})`
    : `url(${src}&h=${newHeight}&w=${newWidth})`

  return (
    <button
      role="option"
      aria-selected={active}
      aria-label={title}
      data-testid={`button-${title}`}
      id={`button-preview-${title}`}
      style={{ backgroundImage }}
      type="button"
      className={clsx(
        'mx-1.5 mb-2.5 h-preview min-w-preview cursor-pointer overflow-hidden rounded border-[0.1875rem] bg-cover bg-center bg-no-repeat p-0 duration-300 ease-in-out hover:opacity-100',
        active ? 'border-primary-25 opacity-100' : 'border-gray-200 opacity-40'
      )}
      onClick={onClick}
      tabIndex={-1}
    />
  )
}
