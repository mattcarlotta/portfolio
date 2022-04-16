import { render, waitFor } from '@testing-library/react'
import Image from '../index'

jest.mock('~components/Context/ScrollHeightContext', () => ({
  __esModule: true,
  useScrollHeight: jest
    .fn()
    .mockReturnValueOnce({
      clientHeight: 0,
      scrollHeight: 0
    })
    .mockReturnValue({
      clientHeight: 1000,
      scrollHeight: 0
    })
}))

jest.mock('~components/Context/ImageContext', () => ({
  __esModule: true,
  useImageContext: jest
    .fn()
    .mockReturnValueOnce({
      supportsWebp: false
    })
    .mockReturnValueOnce({
      supportsWebp: false
    })
    .mockReturnValueOnce({
      supportsWebp: false
    })
    .mockReturnValueOnce({
      supportsWebp: false
    })
    .mockReturnValueOnce({
      supportsWebp: false
    })
    .mockReturnValueOnce({
      supportsWebp: false
    })
    .mockReturnValue({
      supportsWebp: true
    })
}))

const initProps = {
  alt: '',
  contentType: 'image/png',
  placeholder: true,
  url: 'example',
  height: 250,
  width: 250
}

const priorityProps = {
  ...initProps,
  priority: true
}

const scaleProps = {
  ...priorityProps,
  scale: 25
}

describe('Image', () => {
  it('renders without errors and displays a placeholder', () => {
    const { getByTestId } = render(<Image {...initProps} />)
    expect(getByTestId('picture')).toBeInTheDocument()
    expect(getByTestId('placeholder')).toBeInTheDocument()
  })

  it('on success loads an image', async () => {
    const { getByTestId } = render(<Image {...priorityProps} />)

    await waitFor(() => {
      expect(getByTestId('image')).toBeInTheDocument()
    })
  })

  it('on success loads an image with priority png', async () => {
    const { getByTestId } = render(<Image {...priorityProps} />)

    await waitFor(() => {
      expect(getByTestId('image')).toBeInTheDocument()
    })
  })

  it('on success loads a rescaled image with priority png', async () => {
    const { getByTestId } = render(<Image {...scaleProps} />)

    await waitFor(() => {
      expect(getByTestId('image')).toBeInTheDocument()
    })
  })

  it('on success loads an image with priority webp', async () => {
    const { getByTestId } = render(<Image {...priorityProps} />)

    await waitFor(() => {
      expect(getByTestId('image')).toBeInTheDocument()
    })
  })

  it('on success loads a rescaled image with priority webp', async () => {
    const { getByTestId } = render(<Image {...scaleProps} />)

    await waitFor(() => {
      expect(getByTestId('image')).toBeInTheDocument()
    })
  })
})
