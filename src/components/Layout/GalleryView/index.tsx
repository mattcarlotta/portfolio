import { useCallback, useEffect, useState } from 'react'
import BackgroundImageViewer from '~components/Layout/BackgroundImage'
import Button from '~components/Layout/Button'
import CardTitle from '~components/Layout/CardTitle'
import DetailHeadline from '~components/Layout/DetailHeadline'
import Image from '~components/Layout/Image'
import ImagePreviewButton from '~components/Layout/ImagePreviewButton'
import Modal from '~components/Layout/Modal'
import PreviewCard from '~components/Layout/PreviewCard'
import { FaChevronLeft, FaChevronRight, FaTimes, IoImages } from '~icons'
import type {
  CONTENTFUL_IMAGE,
  HeightAndWidth,
  KeyboardEvent as onKeyEvent,
  Title
} from '~types'

export type ModalDialogState = HeightAndWidth &
  Title & {
    contentType: string
    currentIndex: number
    description: string
    open: boolean
    url: string
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

const ModalDialog = ({ snapshots }: { snapshots: Array<CONTENTFUL_IMAGE> }) => {
  const [state, setState] = useState<ModalDialogState>(initialImageState)
  const { description, currentIndex, open, title, url } = state
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

  const handleModalClose = (): void => {
    setState(initialImageState)
  }

  const handleKeyDown = useCallback(
    (event: KeyboardEvent): void => {
      if (!open) return

      const { key, shiftKey } = event
      const escKeyPressed = key === 'Esc' || key === 'Escape'
      const tabKeyPressed = key === 'Tab'
      const arrowLeftPressed = key === 'ArrowLeft'
      const arrowRightPressed = key === 'ArrowRight'

      if ((shiftKey && tabKeyPressed) || arrowLeftPressed) {
        event.preventDefault()
        handleNextImage(currentIndex - 1)
      } else if (tabKeyPressed || arrowRightPressed) {
        event.preventDefault()
        handleNextImage(currentIndex + 1)
      } else if (escKeyPressed) {
        event.stopPropagation()
        handleModalClose()
      }
    },
    [open, handleNextImage, handleModalClose, currentIndex]
  )

  const handleSelectImage = (
    event: onKeyEvent<HTMLDivElement>,
    selectedIndex: number
  ): void => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleImageClick(selectedIndex)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  useEffect(() => {
    const node = document.getElementById(`button-preview-${title}`)
    /* istanbul ignore next */
    if (node?.scrollIntoView)
      node.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      })
  }, [title])

  return (
    <>
      <section>
        <DetailHeadline id="snapshots">Snapshots:</DetailHeadline>
        <div
          className="my-4 flex flex-wrap items-center justify-center px-2.5"
          data-testid="snapshots-container"
        >
          {snapshots.map(({ title, ...rest }, idx) => (
            <section key={title}>
              <PreviewCard
                dataTestId={title}
                onClick={() => handleImageClick(idx)}
                onKeyDown={(event) => handleSelectImage(event, idx)}
              >
                <CardTitle id={title}>{title}</CardTitle>
                <Image
                  scale={25}
                  alt={rest.description}
                  {...rest}
                  className="mx-auto"
                />
              </PreviewCard>
            </section>
          ))}
        </div>
      </section>
      <Modal
        id="image-gallery-modal"
        description={description}
        open={open}
        onClose={handleModalClose}
      >
        <div className="fixed top-0 w-full">
          <div className="absolute top-5 left-5 font-plain text-2xl text-white">
            <IoImages className="mr-2.5 align-middle" />
            {currentIndex + 1} of {snapsLength}
          </div>
          <h2
            className="mt-10 p-5 text-center text-md text-white sm:mt-0 sm:text-2xl"
            id="snapshot-title"
            data-testid="modal-title"
          >
            {title}
          </h2>
          <button
            aria-label="close modal"
            data-testid="close-modal"
            className="pointer absolute top-2 right-5 border-0 bg-transparent p-1.5 text-3xl text-gray-100 duration-300 ease-in-out hover:text-fire"
            type="button"
            onClick={handleModalClose}
          >
            <FaTimes />
          </button>
        </div>
        <div className="fixed left-0 top-[calc(50%-35px)]">
          <Button
            ariaLabel="View previous image"
            dataTestId="previous-image"
            clickable={snapsLength > 1}
            onClick={() => handleNextImage(currentIndex - 1)}
          >
            <FaChevronLeft />
          </Button>
        </div>
        <div className="fixed bottom-24 left-20 right-20 top-20">
          <BackgroundImageViewer dataTestId={`image-${title}`} src={url} />
        </div>
        <div className="fixed right-0 top-[calc(50%-35px)]">
          <Button
            ariaLabel="View next image"
            dataTestId="next-image"
            clickable={snapsLength > 1}
            onClick={() => handleNextImage(currentIndex + 1)}
          >
            <FaChevronRight />
          </Button>
        </div>
        <div className="fixed left-0 bottom-0 w-full">
          <div className="overflow-y-auto whitespace-nowrap text-center">
            {snapshots.map(({ title, height, width, url }, idx) => (
              <ImagePreviewButton
                key={`preview${title}`}
                active={idx === currentIndex}
                onClick={() => selectImage(idx)}
                src={url}
                height={height}
                title={title}
                width={width}
              />
            ))}
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ModalDialog