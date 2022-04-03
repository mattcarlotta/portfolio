import { render, fireEvent, waitFor } from '@testing-library/react'
import { within } from '@testing-library/dom'
import ModalContainer from '../index'

describe('Modal Container', () => {
  it('toggled isOpen state', async () => {
    const { getByTestId } = render(
      <ModalContainer>
        {(isOpen, selected, toggleModal) => (
          <>
            <button
              data-testid="button"
              type="button"
              onClick={() => toggleModal('abc')}
            >
              Click me
            </button>
            <span data-testid="isopen">{String(isOpen)}</span>
            <span data-testid="selected">{selected}</span>
          </>
        )}
      </ModalContainer>
    )

    fireEvent.click(getByTestId('button'))
    await waitFor(() => {
      const isOpenNode = getByTestId('isopen')
      expect(within(isOpenNode).getByText('true')).toBeInTheDocument()
      const isSelectedNode = getByTestId('selected')
      expect(within(isSelectedNode).getByText('abc')).toBeInTheDocument()
    })

    fireEvent.click(getByTestId('button'))
    await waitFor(() => {
      const isOpenNode = getByTestId('isopen')
      expect(within(isOpenNode).getByText('false')).toBeInTheDocument()
    })
  })
})
