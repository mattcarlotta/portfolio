import type { AriaLabel, Children, DataTestId, OnClickEvent } from '~types'
import clsx from '~utils/clsx'

export type ButtonProps = AriaLabel &
  Children &
  DataTestId &
  OnClickEvent & {
    clickable?: boolean
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
