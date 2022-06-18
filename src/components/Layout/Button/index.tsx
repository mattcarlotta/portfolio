import type { AriaLabel, Children, DataTestId, OnClickEvent } from '~types'
import clsx from '~utils/clsx'

export type ButtonProps = AriaLabel &
  Children &
  DataTestId &
  OnClickEvent & {
    clickable?: boolean
    className?: string
  }

export default function Button({
  ariaLabel,
  className,
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
        'rounded border-0 bg-transparent p-4 text-3xl transition duration-300 ease-in-out',
        clickable
          ? 'cursor-pointer text-white hover:text-primary-25'
          : 'cursor-not-allowed text-off-black hover:text-off-black',
        className
      )}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
