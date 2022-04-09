import { render } from '@testing-library/react'
import Button from '../index'

const initProps = {
  ariaLabel: 'test',
  clickable: true,
  children: <p>Hello</p>,
  dataTestId: 'test',
  onClick: () => {}
}

describe('Button', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(<Button {...initProps} />)
    const btnNode = getByTestId('test')
    expect(btnNode).toHaveClass('cursor-pointer')
    expect(btnNode).toHaveClass('text-white')
    expect(btnNode).toHaveClass('hover:text-primary-25')
  })

  it("sets new classes when passed a 'clickable' prop", () => {
    const { getByTestId } = render(
      <Button data-testid="custom-btn" {...initProps} clickable={false} />
    )
    const btnNode = getByTestId('test')
    expect(btnNode).toHaveClass('cursor-not-allowed')
    expect(btnNode).toHaveClass('text-off-black')
    expect(btnNode).toHaveClass('hover:text-off-black')
  })
})
