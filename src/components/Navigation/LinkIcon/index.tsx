import clsx from 'clsx'
import Link from 'next/link'
import type { CSSProperties, ReactElement, ReactNode } from '~types'

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

const LinkIcon = ({
  ariaLabel,
  asHref,
  children,
  className,
  dataTestId,
  href,
  scroll,
  style
}: LinkIconProps): ReactElement => (
  <Link href={href} as={asHref} prefetch={false} scroll={scroll} passHref>
    <a
      aria-label={ariaLabel}
      data-testid={dataTestId}
      style={style}
      className={clsx(
        'flex w-full items-center justify-center rounded-[3.125rem] border-2 border-transparent text-primary no-underline outline-0 duration-300 ease-in-out hover:text-white focus:border-primary-100 focus:text-white focus:shadow-ring sm:mx-0 md:mx-1 md:w-auto md:p-2',
        className
      )}
    >
      {children}
    </a>
  </Link>
)

export default LinkIcon
