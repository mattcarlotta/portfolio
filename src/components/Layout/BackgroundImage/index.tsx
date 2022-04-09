import { useImageContext } from '~components/ImageContext'
import type { ReactElement } from '~types'

export type BackImageViewerProps = {
  dataTestId: string
  src: string
}

const BackgroundImageViewer = ({
  dataTestId,
  src
}: BackImageViewerProps): ReactElement => {
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
