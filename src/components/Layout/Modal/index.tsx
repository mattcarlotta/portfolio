/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { createPortal } from 'react-dom'
import type { ChildrenWithId } from '~types'
import FocusTrapper from '../FocusTrapper'

export type ModalProps = ChildrenWithId & {
  description?: string
  onClose: () => void
  open: boolean
}

export default function Modal({
  children,
  description,
  id,
  onClose,
  open
}: ModalProps) {
  return open
    ? createPortal(
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-[1300]"
          role="presentation"
        >
          {description && (
            <p
              aria-live="polite"
              id="modal-description"
              className="fixed top-0 opacity-0"
            >
              {description}
            </p>
          )}
          <div
            data-title="backdrop"
            className="fixed top-0 right-0 bottom-0 left-0 z-[-1] flex items-center justify-center bg-black"
          />
          <FocusTrapper
            className="h-full overflow-y-auto overflow-x-hidden text-center outline-0 after:inline after:h-full after:w-0 after:align-middle after:content-['']"
            onEscapePress={onClose}
          >
            <div
              id={id}
              className="h-full"
              role="dialog"
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
              aria-modal="true"
              tabIndex={0}
            >
              {children}
            </div>
          </FocusTrapper>
        </div>,
        document.body
      )
    : null
}
