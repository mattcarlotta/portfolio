import clsx from 'clsx'
import { FiExternalLink } from '~icons'
import type { AriaLabel, Children, Href, OptionalClassName } from '~types'

export type OutsideLinkProps = AriaLabel &
  Children &
  Href &
  OptionalClassName & {
    dataTestId?: string
    showIcon?: boolean
  }

export default function OutsideLink({
  ariaLabel,
  className,
  children,
  dataTestId,
  href,
  showIcon
}: OutsideLinkProps) {
  return (
    <a
      aria-label={ariaLabel}
      data-testid={dataTestId}
      className={clsx(
        'focus:color-white cursor-pointer rounded border-2 border-solid border-transparent text-light-blue underline transition-[box-shadow] duration-300 ease-in-out hover:text-white focus:border-primary-100 focus:shadow-ring',
        className
      )}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
      {showIcon && <FiExternalLink className="ml-1 align-top text-md" />}
    </a>
  )
}
