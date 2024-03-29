import { useImageContext } from '~components/Context/ImageContext'
import type { DataTestId } from '~types'

export type BackImageViewerProps = DataTestId & {
  src: string
}

const BackgroundImageViewer = ({ dataTestId, src }: BackImageViewerProps) => {
  const backgroundImage = useImageContext().supportsWebp
    ? `url(${src}?fm=webp)`
    : `url(${src})`

  return (
    <div
      style={{ backgroundImage }}
      className="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center bg-contain bg-center bg-no-repeat"
      data-testid={dataTestId}
    />
  )
}

export default BackgroundImageViewer
