import clsx from 'clsx'
import type { ReactNode } from '~types'

export type ButtonProps = {
  ariaLabel: string
  clickable?: boolean
  children: ReactNode
  dataTestId: string
  onClick: () => void
}

export default function Button({
  ariaLabel,
  clickable,
  children,
  dataTestId,
  onClick
}: ButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      data-testid={dataTestId}
      className={clsx(
        'border-0 bg-transparent p-4 text-3xl !outline-0 duration-300 ease-in-out',
        clickable
          ? 'cursor-pointer text-white hover:text-primary-25'
          : 'cursor-not-allowed text-off-black hover:text-off-black'
      )}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
