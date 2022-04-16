import { createPortal } from 'react-dom'
import type { ChildrenWithId } from '~types'

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
          id={id}
          className="fixed top-0 right-0 bottom-0 left-0 z-[1300]"
          aria-labelledby={`${id}-title}`}
          aria-describedby={`${id}-description}`}
          role="presentation"
        >
          {description && (
            <p
              aria-live="polite"
              id={`${id}-description}`}
              className="fixed top-0 opacity-0"
            >
              {description}
            </p>
          )}
          <div
            role="presentation"
            data-title="backdrop"
            className="fixed top-0 right-0 bottom-0 left-0 z-[-1] flex items-center justify-center bg-black"
            onClick={onClose}
          />
          <div
            className="h-full overflow-y-auto overflow-x-hidden text-center outline-0 after:inline after:h-full after:w-0 after:align-middle after:content-['']"
            role="presentation"
            tabIndex={-1}
          >
            <div className="m-0 max-w-full">{children}</div>
          </div>
        </div>,
        document.body
      )
    : null
}
