import styled from '@emotion/styled'
import { BoxArrowUpRight } from 'react-bootstrap-icons'
import type { CSSProperties, ReactElement, ReactNode } from '~types'

export type OutsideLinkProps = {
  ariaLabel: string
  className?: string
  children: ReactNode
  dataTestId?: string
  href: string
  showIcon?: boolean
  style?: CSSProperties
}

const OutsideLinkComponent = ({
  ariaLabel,
  className,
  children,
  dataTestId,
  href,
  showIcon,
  style
}: OutsideLinkProps): ReactElement => (
  <a
    aria-label={ariaLabel}
    data-testid={dataTestId}
    className={className}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    style={style}
  >
    {children}
    {showIcon && <BoxArrowUpRight className="relative ml-1 align-top" />}
  </a>
)

const OutsideLink = styled(OutsideLinkComponent)<{
  padding?: string
  margin?: string
  textDecoration?: string
}>`
  padding: ${({ padding }) => padding || '0px'};
  margin: ${({ margin }) => margin};
  color: #63bfff;
  transition: all 0.5s;
  text-decoration: ${({ textDecoration }) => textDecoration || 'underline'};
  cursor: pointer;
  outline: 0;

  :hover {
    color: #fff;
  }

  :focus {
    color: #fff;
    text-decoration: ${({ textDecoration }) => textDecoration || 'underline'};
  }
`

export default OutsideLink
