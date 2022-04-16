import { fireEvent, render, waitFor } from '@testing-library/react'
import Tooltip from '../index'

const initProps = {
  children: <div data-testid="child">hi</div>,
  title: 'Hi world'
}

describe('ModalDialog', () => {
  it('renders without errors', async () => {
    const { getByTestId } = render(<Tooltip {...initProps} />)

    await waitFor(() => {
      expect(getByTestId('container')).toBeInTheDocument()
    })
  })

  it('displays a tooltip when mouse enters tooltip child', async () => {
    const { getByTestId } = render(<Tooltip {...initProps} />)

    await waitFor(() => {
      expect(getByTestId('container')).toBeInTheDocument()
    })

    fireEvent.mouseOver(getByTestId('tooltip-child'))

    expect(getByTestId('tooltip')).toHaveStyle('opacity: 1')
    expect(getByTestId('tooltip-arrow')).toHaveStyle('opacity: 1')
  })

  it('hides a tooltip when mouse leaves tooltip child', async () => {
    const { getByTestId } = render(<Tooltip {...initProps} />)

    await waitFor(() => {
      expect(getByTestId('container')).toBeInTheDocument()
    })

    fireEvent.mouseOver(getByTestId('tooltip-child'))

    expect(getByTestId('tooltip')).toHaveStyle('opacity: 1')
    expect(getByTestId('tooltip-arrow')).toHaveStyle('opacity: 1')

    fireEvent.mouseLeave(getByTestId('tooltip-child'))

    expect(getByTestId('tooltip')).toHaveStyle('opacity: 0')
    expect(getByTestId('tooltip-arrow')).toHaveStyle('opacity: 0')
  })

  it('displays a tooltip when focus enters tooltip child', async () => {
    const { getByTestId } = render(<Tooltip {...initProps} />)

    await waitFor(() => {
      expect(getByTestId('container')).toBeInTheDocument()
    })

    fireEvent.focus(getByTestId('tooltip-child'))

    expect(getByTestId('tooltip')).toHaveStyle('opacity: 1')
    expect(getByTestId('tooltip-arrow')).toHaveStyle('opacity: 1')
  })

  it('hides a tooltip when focus leaves tooltip child', async () => {
    const { getByTestId } = render(<Tooltip {...initProps} />)

    await waitFor(() => {
      expect(getByTestId('container')).toBeInTheDocument()
    })

    fireEvent.focus(getByTestId('tooltip-child'))

    expect(getByTestId('tooltip')).toHaveStyle('opacity: 1')
    expect(getByTestId('tooltip-arrow')).toHaveStyle('opacity: 1')

    fireEvent.blur(getByTestId('tooltip-child'))

    expect(getByTestId('tooltip')).toHaveStyle('opacity: 0')
    expect(getByTestId('tooltip-arrow')).toHaveStyle('opacity: 0')
  })
})
