import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactElement } from '~types'
import FocusTrapper from '../index'

const setupUserEvent = (jsx: ReactElement) => ({
  user: userEvent.setup(),
  ...render(jsx)
})

const onEscapePress = jest.fn()

const wrapper = (
  <FocusTrapper onEscapePress={onEscapePress}>
    <button data-testid="button-1" type="button">
      Button 1
    </button>
    <button data-testid="button-2" type="button">
      Button 2
    </button>
    <button data-testid="button-3" type="button">
      Button 3
    </button>
  </FocusTrapper>
)

describe('FocusTrapper', () => {
  it('renders without errors', async () => {
    const { getByTestId } = render(wrapper)

    expect(getByTestId('focus-trapper')).toBeInTheDocument()
  })

  it('tabs through accessible nodes', async () => {
    const { getByTestId, user } = setupUserEvent(wrapper)

    expect(document.activeElement).toEqual(getByTestId('button-1'))

    await waitFor(async () => {
      await user.tab()
    })

    expect(document.activeElement).toEqual(getByTestId('button-2'))

    await waitFor(async () => {
      await user.tab()
    })

    expect(document.activeElement).toEqual(getByTestId('button-3'))

    await waitFor(async () => {
      await user.tab()
    })

    expect(document.activeElement).toEqual(getByTestId('button-1'))
  })

  it('shift+tabs through accessible nodes', async () => {
    const { getByTestId, user } = setupUserEvent(wrapper)

    expect(document.activeElement).toEqual(getByTestId('button-1'))

    await waitFor(async () => {
      await user.tab({ shift: true })
    })

    expect(document.activeElement).toEqual(getByTestId('button-3'))

    await waitFor(async () => {
      await user.tab({ shift: true })
    })

    expect(document.activeElement).toEqual(getByTestId('button-2'))

    await waitFor(async () => {
      await user.tab({ shift: true })
    })

    expect(document.activeElement).toEqual(getByTestId('button-1'))
  })

  it('calls onEscapePress when the esc key is pressed', async () => {
    const { user } = setupUserEvent(wrapper)

    await waitFor(async () => {
      await user.keyboard('{Escape}')
    })

    expect(onEscapePress).toHaveBeenCalledTimes(1)
  })
})
