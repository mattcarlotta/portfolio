import clsx from 'clsx'
import { FiExternalLink } from '~icons'
import type { CSSProperties, ReactNode } from '~types'

export type OutsideLinkProps = {
  ariaLabel: string
  className?: string
  children: ReactNode
  dataTestId?: string
  href: string
  showIcon?: boolean
  style?: CSSProperties
}

export default function OutsideLink({
  ariaLabel,
  className,
  children,
  dataTestId,
  href,
  showIcon,
  style
}: OutsideLinkProps) {
  return (
    <a
      aria-label={ariaLabel}
      data-testid={dataTestId}
      className={clsx(
        'focus:color-white cursor-pointer text-light-blue outline-0 duration-300 ease-in-out hover:text-white',
        className
      )}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      style={style}
    >
      {children}
      {showIcon && <FiExternalLink className="ml-0.5 align-top text-sm" />}
    </a>
  )
}

// const OutsideLink = styled(OutsideLinkComponent)<{
//   padding?: string
//   margin?: string
//   textDecoration?: string
// }>`
//   padding: ${({ padding }) => padding || '0px'};
//   margin: ${({ margin }) => margin};
//   color: #63bfff;
//   transition: all 0.5s;
//   text-decoration: ${({ textDecoration }) => textDecoration || 'underline'};
//   cursor: pointer;
//   outline: 0;

//   :hover {
//     color: #fff;
//   }

//   :focus {
//     color: #fff;
//     text-decoration: ${({ textDecoration }) => textDecoration || 'underline'};
//   }
// `

// export default OutsideLink
