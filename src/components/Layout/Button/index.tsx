import type { AriaLabel, Children, DataTestId, OnClickEvent } from '~types'
import clsx from '~utils/clsx'

export type ButtonProps = AriaLabel &
  Children &
  DataTestId &
  OnClickEvent & {
    disabled?: boolean
    className?: string
  }

export default function Button({
  ariaLabel,
  className,
  disabled,
  children,
  dataTestId,
  onClick
}: ButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      data-testid={dataTestId}
      disabled={disabled}
      className={clsx(
        'rounded bg-transparent p-4 text-3xl transition-[color] duration-300 ease-in-out',
        !disabled
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
