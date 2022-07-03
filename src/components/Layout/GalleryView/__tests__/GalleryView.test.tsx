import { fireEvent, render, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactElement } from '~types'
import GalleryView from '../index'

const snap1 = {
  url: 'https://images.ctfassets.net/hb5otnhwin4m/sDOSuByzAmp1FWwti4xy0/c9f454201c2d9a710952434792f3cc1e/sjsiceteamDashboard.png',
  description:
    'A dashboard that is laid out with a navbar bar that extends across the top of the page and sidebar along the right with clickable links that extends to the bottom of the page, a sidebar with clickable links that extends all the way down the left of the page. These bars frame 4 panels to the right: An Events panel, a Forms panel, an Availability panel and an Event Distribution chart panel.',
  contentType: 'image/png',
  height: 912,
  width: 1828,
  title: 'example 123'
}

const props = {
  snapshots: [
    snap1,
    {
      url: 'https://images.ctfassets.net/hb5otnhwin4m/7yKDglorrZ2rF2Ygyx1ZIh/0bbf2e65890b8ffa5525625aa4b74830/sjsiceteamEmailEventReminder.png',
      description:
        "A preview of an email that contains an event reminder which contains the event's location, date and the member's call-time.",
      contentType: 'image/png',
      height: 979,
      width: 1805,
      title: 'example 456'
    }
  ]
}

const setupUserEvent = (jsx: ReactElement) => ({
  user: userEvent.setup(),
  ...render(jsx)
})

describe('GalleryView', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(<GalleryView {...props} />)
    expect(getByTestId('snapshots')).toBeInTheDocument()
  })

  it('opens a modal dialog when clicking on a snapshot', async () => {
    const { getByTestId, user } = setupUserEvent(<GalleryView {...props} />)

    await waitFor(async () => {
      await user.click(getByTestId('example 123'))
    })

    await waitFor(() => {
      expect(document.querySelector('#image-gallery-modal')).toBeInTheDocument()
    })
  })

  it("navigates the snapshots when clicking on the 'next-image' or 'previous-image' buttons", async () => {
    const { getByTestId, user } = setupUserEvent(<GalleryView {...props} />)

    await waitFor(async () => {
      await user.click(getByTestId('example 123'))
    })

    await waitFor(() => {
      expect(document.querySelector('#image-gallery-modal')).toBeInTheDocument()
    })

    await waitFor(async () => {
      await user.click(getByTestId('next-image'))
    })

    await waitFor(() => {
      expect(
        within(getByTestId('modal-title')).getByText('example 456')
      ).toBeInTheDocument()
    })

    await waitFor(async () => {
      await user.click(getByTestId('previous-image'))
    })

    await waitFor(() => {
      expect(
        within(getByTestId('modal-title')).getByText('example 123')
      ).toBeInTheDocument()
    })
  })

  it("wraps around to the first image when clicking on the 'next-image' button", async () => {
    const { getByTestId, user } = setupUserEvent(<GalleryView {...props} />)

    await waitFor(async () => {
      await user.click(getByTestId('example 456'))
    })

    await waitFor(() => {
      expect(document.querySelector('#image-gallery-modal')).toBeInTheDocument()
    })

    await waitFor(async () => {
      await user.click(getByTestId('next-image'))
    })

    await waitFor(() => {
      expect(
        within(getByTestId('modal-title')).getByText('example 123')
      ).toBeInTheDocument()
    })
  })

  it("wraps around to the last image clicking on the 'previous-image' button", async () => {
    const { getByTestId, user } = setupUserEvent(<GalleryView {...props} />)
    await waitFor(async () => {
      await user.click(getByTestId('example 123'))
    })

    await waitFor(() => {
      expect(document.querySelector('#image-gallery-modal')).toBeInTheDocument()
    })

    await waitFor(async () => {
      await user.click(getByTestId('previous-image'))
    })

    await waitFor(() => {
      expect(
        within(getByTestId('modal-title')).getByText('example 456')
      ).toBeInTheDocument()
    })
  })

  it('navigates to an image when clicking on a preview of it', async () => {
    const { getByTestId, user } = setupUserEvent(<GalleryView {...props} />)

    await waitFor(async () => {
      await user.click(getByTestId('example 123'))
    })

    await waitFor(() => {
      expect(document.querySelector('#image-gallery-modal')).toBeInTheDocument()
    })

    await waitFor(async () => {
      await user.click(getByTestId('button-example 456'))
    })

    await waitFor(() => {
      expect(
        within(getByTestId('modal-title')).getByText('example 456')
      ).toBeInTheDocument()
    })
  })

  // it('pressing tab navigates to next image', async () => {
  //   const { getByTestId, user } = setupUserEvent(<GalleryView {...props} />)

  //   await user.click(getByTestId('example 123'))

  //   await waitFor(() => {
  //     expect(document.querySelector('#image-gallery-modal')).toBeInTheDocument()
  //   })

  //   await user.tab()

  //   await waitFor(() => {
  //     expect(
  //       within(getByTestId('modal-title')).getByText('example 456')
  //     ).toBeInTheDocument()
  //   })
  // })

  it('pressing arrowright key navigates to next image', async () => {
    const { getByTestId, user } = setupUserEvent(<GalleryView {...props} />)

    await waitFor(async () => {
      await user.click(getByTestId('example 123'))
    })

    await waitFor(() => {
      expect(document.querySelector('#image-gallery-modal')).toBeInTheDocument()
    })

    getByTestId('gallery-preview').focus()

    await waitFor(async () => {
      await user.keyboard('{ArrowRight}')
    })

    await waitFor(() => {
      expect(
        within(getByTestId('modal-title')).getByText('example 456')
      ).toBeInTheDocument()
    })
  })

  it('pressing arrowleft key navigates to previous image', async () => {
    const { getByTestId, user } = setupUserEvent(<GalleryView {...props} />)

    await waitFor(async () => {
      await user.click(getByTestId('example 123'))
    })

    await waitFor(() => {
      expect(document.querySelector('#image-gallery-modal')).toBeInTheDocument()
    })

    getByTestId('gallery-preview').focus()

    await waitFor(async () => {
      await user.keyboard('{ArrowLeft}')
    })

    await waitFor(() => {
      expect(
        within(getByTestId('modal-title')).getByText('example 456')
      ).toBeInTheDocument()
    })
  })

  // it('pressing shift+tab keys navigates to previous image', async () => {
  //   const { getByTestId, user } = setupUserEvent(<GalleryView {...props} />)

  //   await user.click(getByTestId('example 123'))

  //   await waitFor(() => {
  //     expect(document.querySelector('#image-gallery-modal')).toBeInTheDocument()
  //   })

  //   await user.tab({ shift: true })

  //   await waitFor(() => {
  //     expect(
  //       within(getByTestId('modal-title')).getByText('example 456')
  //     ).toBeInTheDocument()
  //   })
  // })

  it('pressing esc key closes the modal', async () => {
    const { getByTestId, user } = setupUserEvent(<GalleryView {...props} />)

    await waitFor(async () => {
      await user.click(getByTestId('example 123'))
    })

    await waitFor(() => {
      expect(document.querySelector('#image-gallery-modal')).toBeInTheDocument()
    })

    await waitFor(async () => {
      await user.keyboard('{Escape}')
    })

    await waitFor(() => {
      expect(
        document.querySelector('#image-gallery-modal')
      ).not.toBeInTheDocument()
    })
  })

  it('pressing arrowup key does nothing when open', async () => {
    const { getByTestId, user } = setupUserEvent(<GalleryView {...props} />)

    await waitFor(async () => {
      await user.click(getByTestId('example 123'))
    })

    await waitFor(() => {
      expect(document.querySelector('#image-gallery-modal')).toBeInTheDocument()
    })

    getByTestId('gallery-preview').focus()

    await waitFor(async () => {
      await user.keyboard('{ArrowUp}')
    })

    await waitFor(() => {
      expect(document.querySelector('#image-gallery-modal')).toBeInTheDocument()
    })
  })

  it('opens the modal when pressing enter key on a snapshot preview', async () => {
    const { getByTestId } = render(<GalleryView {...props} />)

    fireEvent.keyDown(getByTestId('example 123'), { key: 'Enter' })

    await waitFor(() => {
      expect(document.querySelector('#image-gallery-modal')).toBeInTheDocument()
    })
  })

  it('disables buttons when there is only one image in the snapshot', async () => {
    const { getByTestId, user } = setupUserEvent(
      <GalleryView snapshots={[snap1]} />
    )

    await waitFor(async () => {
      await user.click(getByTestId('example 123'))
    })

    expect(getByTestId('previous-image').closest('button')).toHaveAttribute(
      'disabled'
    )
    expect(getByTestId('next-image').closest('button')).toHaveAttribute(
      'disabled'
    )
  })

  it("doesn't open the modal when pressing an invalid key on a snapshot preview", async () => {
    const { getByTestId } = render(<GalleryView {...props} />)

    fireEvent.keyDown(getByTestId('example 123'), { key: 'ArrowUp' })

    await waitFor(() => {
      expect(
        document.querySelector('#image-gallery-modal')
      ).not.toBeInTheDocument()
    })
  })
})
