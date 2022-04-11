import clsx from 'clsx'
import NextLink from 'next/link'
import type { ReactNode } from '~types'

export type LinkProps = {
  ariaLabel: string
  asHref?: string
  dataTestId: string
  children: ReactNode
  className?: string
  href: string
  scroll?: boolean
}

export default function Link({
  ariaLabel,
  asHref,
  children,
  className,
  dataTestId,
  href,
  scroll
}: LinkProps) {
  return (
    <NextLink href={href} as={asHref} prefetch={false} scroll={scroll} passHref>
      <a
        aria-label={ariaLabel}
        data-testid={dataTestId}
        className={clsx(
          'flex w-full items-center justify-center rounded border-2 border-solid border-transparent text-primary no-underline transition-[box-shadow] duration-300 ease-in-out hover:text-white focus:border-primary-100 focus:text-white focus:shadow-ring sm:mx-0 md:mx-1 md:w-auto md:p-2',
          className
        )}
      >
        {children}
      </a>
    </NextLink>
  )
}
