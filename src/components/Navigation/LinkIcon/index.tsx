import clsx from 'clsx'
import Link from 'next/link'
import type { CSSProperties, ReactNode } from '~types'

export type LinkIconProps = {
  ariaLabel: string
  asHref?: string
  dataTestId: string
  children: ReactNode
  className?: string
  href: string
  scroll?: boolean
  style?: CSSProperties
}

export default function LinkIcon({
  ariaLabel,
  asHref,
  children,
  className,
  dataTestId,
  href,
  scroll,
  style
}: LinkIconProps) {
  return (
    <Link href={href} as={asHref} prefetch={false} scroll={scroll} passHref>
      <a
        aria-label={ariaLabel}
        data-testid={dataTestId}
        style={style}
        className={clsx(
          'flex w-full items-center justify-center rounded border-2 border-transparent text-primary no-underline transition-[box-shadow] duration-300 ease-in-out hover:text-white focus:border-primary-100 focus:text-white focus:shadow-ring sm:mx-0 md:mx-1 md:w-auto md:p-2',
          className
        )}
      >
        {children}
      </a>
    </Link>
  )
}
