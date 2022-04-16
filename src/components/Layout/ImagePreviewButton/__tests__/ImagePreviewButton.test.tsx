import { render } from '@testing-library/react'
import ImagePreviewButton from '../index'

const src = '/projects/123.png'
const webpSrc = `url(${src}?fm=webp&h=10&w=10)`
const pngSrc = `url(${src}&h=10&w=10)`

jest.mock('~components/Context/ImageContext', () => ({
  __esModule: true,
  useImageContext: jest
    .fn()
    .mockReturnValueOnce({
      supportsWebp: true
    })
    .mockReturnValue({
      supportsWebp: false
    })
}))

const initProps = {
  active: true,
  height: 100,
  onClick: () => {
    return null
  },
  src,
  title: 'hi',
  width: 100
}

describe('ImagePreviewButton', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(<ImagePreviewButton {...initProps} />)
    const bgNode = getByTestId('button-hi')
    expect(bgNode).toHaveStyle(`background-image: ${webpSrc}`)
    expect(bgNode).toHaveClass('border-primary-25')
    expect(bgNode).toHaveClass('opacity-100')
  })

  it("adjusts the background image when 'supportsWebp' is false", () => {
    const { getByTestId } = render(
      <ImagePreviewButton {...initProps} active={false} />
    )
    const bgNode = getByTestId('button-hi')
    expect(bgNode).toHaveStyle(`background-image: ${pngSrc}`)
    expect(bgNode).toHaveClass('border-gray-200')
    expect(bgNode).toHaveClass('opacity-40')
  })
})
