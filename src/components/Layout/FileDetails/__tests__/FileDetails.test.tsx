import { render } from '@testing-library/react'
import FileDetails from '../index'

const initProps = {
  active: true,
  location: 'http://example.com',
  fileName: 'Example',
  source: 'http://example.com',
  status: 'In Orbit'
}

describe('FileDetails', () => {
  it('renders an active project icon', () => {
    const { getByTestId } = render(<FileDetails {...initProps} />)
    expect(getByTestId('status')).toHaveStyle('color: limegreen')
  })

  it('renders an inactive project icon', () => {
    const { getByTestId } = render(
      <FileDetails {...initProps} active={false} />
    )
    expect(getByTestId('status')).toHaveStyle('color: yellow')
  })
})
