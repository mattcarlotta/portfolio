import { render } from '@testing-library/react'
import BackgroundImage from '../index'

const src = '/projects/123.png'

jest.mock('~components/ImageContext', () => ({
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

describe('BackgroundImage', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(
      <BackgroundImage dataTestId="image" src={src} />
    )
    expect(getByTestId('image')).toHaveStyle(
      `background-image: url(${src}?fm=webp)`
    )
  })

  it("adjusts the background image when 'supportsWebp' is false", () => {
    const { getByTestId } = render(
      <BackgroundImage dataTestId="image" src={src} />
    )

    expect(getByTestId('image')).toHaveStyle(`background-image: url(${src})`)
  })
})
