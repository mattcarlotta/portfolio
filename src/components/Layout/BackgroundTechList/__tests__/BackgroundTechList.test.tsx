import { render } from '@testing-library/react'
import BackgroundTechList from '../index'

jest.mock('~utils/useLoadingElement', () =>
  jest.fn().mockReturnValueOnce(true).mockReturnValue(false)
)

jest.mock('~utils/useWindowWidth', () =>
  jest
    .fn()
    .mockReturnValueOnce(400)
    .mockReturnValueOnce(400)
    .mockReturnValue(1000)
)

const props = {
  tech: {
    data: [
      { level: 5, technology: 'ReactJS' },
      { level: 5, technology: 'NextJS' },
      { level: 4, technology: 'Typescript' }
    ]
  }
}

describe('FocusTrapper', () => {
  it('renders without errors', async () => {
    const { getByTestId } = render(<BackgroundTechList {...props} />)

    expect(getByTestId('background-tech-wrapper')).toBeInTheDocument()
  })

  it('renders the tech list', async () => {
    const { getByTestId } = render(<BackgroundTechList {...props} />)

    const node = getByTestId('ReactJS')

    expect(node).toBeInTheDocument()
    expect(node.style.height).toEqual('75px')
  })

  it('changes the tech list height for larger screens', async () => {
    const { getByTestId } = render(<BackgroundTechList {...props} />)

    const node = getByTestId('ReactJS')
    expect(node).toBeInTheDocument()
    expect(node.style.height).toEqual('40px')
  })
})
