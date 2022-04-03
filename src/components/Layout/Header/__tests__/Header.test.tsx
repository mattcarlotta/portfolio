import { render } from '@testing-library/react'
import Header from '../index'

const { getByTestId } = render(<Header />)

describe('Header', () => {
  it('renders without errors', () => {
    expect(getByTestId('head')).toBeInTheDocument()
  })
})
