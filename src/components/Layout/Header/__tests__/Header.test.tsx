import { render } from '@testing-library/react'
import Header from '../index'

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '',
    query: '',
    asPath: ''
  })
}))

const { getByTestId } = render(<Header />)

describe('Header', () => {
  it('renders without errors', () => {
    expect(getByTestId('head')).toBeInTheDocument()
  })
})
