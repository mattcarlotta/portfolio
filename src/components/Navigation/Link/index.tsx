import styled from '@emotion/styled'
import Link from 'next/link'
import type { CSSProperties, ReactElement, ReactNode } from '~types'

export type LinkProps = {
  ariaLabel: string
  asHref?: string
  dataTestId: string
  children: ReactNode
  className?: string
  href: string
  scroll?: boolean
  style?: CSSProperties
}

const LinkComponent = ({
  ariaLabel,
  asHref,
  className,
  children,
  dataTestId,
  href,
  scroll,
  style
}: LinkProps): ReactElement => (
  <Link href={href} as={asHref} prefetch={false} scroll={scroll} passHref>
    <a
      aria-label={ariaLabel}
      data-testid={dataTestId}
      style={style}
      className={className}
    >
      {children}
    </a>
  </Link>
)

const StyledLink = styled(LinkComponent)<{
  fontSize?: string
  showUnderline?: boolean
  margin?: string
  padding?: string
}>`
  padding: ${({ padding }) => padding || '10px 15px'};
  margin: ${({ margin }) => margin};
  color: #63bfff;
  transition: color 0.5s;
  text-decoration: none;
  font-size: ${({ fontSize }) => fontSize};

  :hover {
    cursor: pointer;
    text-decoration: ${({ showUnderline }) =>
      showUnderline ? 'underline' : 'none'};
    color: #fff;
  }

  :focus {
    color: #fff;
    text-decoration: ${({ showUnderline }) =>
      showUnderline ? 'underline' : 'none'};
  }
`

export default StyledLink
