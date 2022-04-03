import { forwardRef, useEffect, useCallback, useState } from 'react'
import { Slide, Dialog, withStyles } from '@material-ui/core'
import { useImageContext } from '~components/ImageContext'
import BackgroundImageViewer from '~components/Layout/BackgroundImage'
import Button from '~components/Layout/Button'
import CardTitle from '~components/Layout/CardTitle'
import Center from '~components/Layout/Center'
import CloseModalButton from '~components/Layout/CloseModalButton'
import DetailHeadline from '~components/Layout/DetailHeadline'
import Fixed from '~components/Layout/Fixed'
import Flex from '~components/Layout/Flex'
import Image from '~components/Layout/Image'
import ImageCounter from '~components/Layout/ImageCounter'
import ImagePreviewButton from '~components/Layout/ImagePreviewButton'
import ImageTitle from '~components/Layout/ImageTitle'
import PreviewCard from '~components/Layout/PreviewCard'
import SnapshotContainer from '~components/Layout/SnapshotContainer'
import { FaChevronLeft, FaChevronRight, FaTimes, IoImages } from '~icons'
import calculateScale from '~utils/calculateScale'
import type {
  CONTENTFUL_IMAGE,
  ReactElement,
  Ref,
  TransitionProps
} from '~types'

const ImageViewer = withStyles(() => ({
  paper: {
    backgroundColor: '#00020e'
  }
}))(Dialog)

const SlideTransition = forwardRef(
  (
    props: TransitionProps & { children?: ReactElement<any, any> },
    ref: Ref<unknown>
  ) => <Slide direction="right" ref={ref} {...props} />
)

export type ModalDialogState = {
  open: boolean
  currentIndex: number
  url: string
  description: string
  contentType: string
  height: number
  width: number
  title: string
}

const initialImageState = {
  open: false,
  currentIndex: 0,
  url: '',
  description: '',
  contentType: '',
  height: 0,
  width: 0,
  title: ''
}

const ModalDialog = ({
  snapshots
}: {
  snapshots: Array<CONTENTFUL_IMAGE>
}): ReactElement => {
  const { supportsWebp } = useImageContext()
  const [state, setState] = useState<ModalDialogState>(initialImageState)
  const { open, currentIndex, url, title } = state
  const snapsLength = snapshots.length

  const selectImage = (selectedIndex: number): void => {
    const image = snapshots[selectedIndex]
    setState((prevState) => ({
      ...prevState,
      currentIndex: selectedIndex,
      ...image
    }))
  }

  const handleImageClick = (selectedIndex: number): void => {
    const image = snapshots[selectedIndex]
    setState({
      open: true,
      currentIndex: selectedIndex,
      ...image
    })
  }

  const handleNextImage = useCallback(
    (nextIndex: number): void => {
      const snapsIndexLength = snapsLength - 1
      let selectedIndex = currentIndex

      if (nextIndex >= 0 && nextIndex <= snapsIndexLength) {
        selectedIndex = nextIndex
      } else if (nextIndex < 0) {
        selectedIndex = snapsIndexLength
      } else {
        selectedIndex = 0
      }

      selectImage(selectedIndex)
    },
    [currentIndex, snapsLength]
  )

  const handleModalExit = (): void => {
    setState(initialImageState)
  }

  const handleModalClose = (): void => {
    setState((prevState) => ({ ...prevState, open: false }))
  }

  const handleKeyDown = useCallback(
    (event: KeyboardEvent): void => {
      if (!open) return

      const { key, shiftKey } = event
      const tabKeyPressed = key === 'Tab'
      const arrowLeftPressed = key === 'ArrowLeft'
      const arrowRightPressed = key === 'ArrowRight'

      if ((shiftKey && tabKeyPressed) || arrowLeftPressed) {
        handleNextImage(currentIndex - 1)
      } else if (tabKeyPressed || arrowRightPressed) {
        handleNextImage(currentIndex + 1)
      }
    },
    [open, handleNextImage, currentIndex]
  )

  const handleSelectImage = (
    { key }: { key: string },
    selectedIndex: number
  ): void => {
    switch (key) {
      case 'Enter':
        handleImageClick(selectedIndex)
        break
      default:
        break
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  useEffect(() => {
    const previewImage = title
      ? document.getElementById(`button-preview-${title}`)
      : null
    /* istanbul ignore next */
    if (previewImage?.scrollIntoView)
      previewImage.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      })
  }, [title])

  return (
    <>
      <section>
        <header>
          <DetailHeadline>Snapshots:</DetailHeadline>
        </header>
        <SnapshotContainer data-testid="snapshots">
          {snapshots.map(({ title, ...rest }, idx) => (
            <section key={title}>
              <PreviewCard
                data-testid={title}
                tabIndex={0}
                onClick={() => handleImageClick(idx)}
                onKeyDown={(event) => handleSelectImage(event, idx)}
              >
                <header>
                  <CardTitle>{title}</CardTitle>
                </header>
                <Image
                  scale={25}
                  alt={rest.description}
                  {...rest}
                  styles="margin: 0 auto;"
                />
              </PreviewCard>
            </section>
          ))}
        </SnapshotContainer>
      </section>
      <ImageViewer
        fullScreen
        scroll="body"
        id="modal"
        open={open}
        onClose={handleModalClose}
        aria-labelledby="actions-dialog"
        TransitionComponent={SlideTransition}
        TransitionProps={{ onExited: handleModalExit }}
      >
        <Fixed top="0px" width="100%">
          <ImageCounter>
            <IoImages
              style={{ position: 'relative', top: 3, marginRight: 10 }}
            />
            {currentIndex + 1} of {snapsLength}
          </ImageCounter>
          <ImageTitle data-testid="modal-title">{title}</ImageTitle>
          <CloseModalButton
            data-testid="close-modal"
            aria-label="close modal"
            type="button"
            onClick={handleModalClose}
          >
            <FaTimes />
          </CloseModalButton>
        </Fixed>
        <Fixed top="calc(50% - 35px)" left="0px">
          <Flex justify="flex-start" width="120px">
            <Button
              aria-label="View previous image"
              data-testid="previous-image"
              type="button"
              clickable={snapsLength > 1}
              onClick={() => handleNextImage(currentIndex - 1)}
            >
              <FaChevronLeft />
            </Button>
          </Flex>
        </Fixed>
        <Fixed bottom="100px" left="80px" right="80px" top="80px">
          <Flex justify="center">
            <BackgroundImageViewer dataTestId={`image-${title}`} src={url} />
          </Flex>
        </Fixed>
        <Fixed top="calc(50% - 35px)" right="0px">
          <Flex justify="flex-end" width="120px">
            <Button
              data-testid="next-image"
              aria-label="View next image"
              type="button"
              clickable={snapsLength > 1}
              onClick={() => handleNextImage(currentIndex + 1)}
            >
              <FaChevronRight />
            </Button>
          </Flex>
        </Fixed>
        <Fixed left="0px" bottom="0px" width="100%">
          <Center
            style={{
              overflowY: 'auto',
              whiteSpace: 'nowrap'
            }}
          >
            {snapshots.map(({ title, height, width, url }, idx) => (
              <ImagePreviewButton
                key={`preview${title}`}
                tabIndex={-1}
                active={idx === currentIndex}
                aria-selected={idx === currentIndex}
                onClick={() => selectImage(idx)}
                type="button"
                supportsWebp={supportsWebp}
                src={url}
                height={calculateScale(height, 10)}
                width={calculateScale(width, 10)}
                aria-label={`View the ${title} image`}
                id={`button-preview-${title}`}
                data-testid={`button-${title}`}
              />
            ))}
          </Center>
        </Fixed>
      </ImageViewer>
    </>
  )
}

export default ModalDialog
