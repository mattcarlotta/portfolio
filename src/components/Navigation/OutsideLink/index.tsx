import styled from "@emotion/styled";
import { FiExternalLink } from "~icons";
import type { CSSProperties, ReactElement, ReactNode } from "~types";

export type OutsideLinkProps = {
  ariaLabel: string;
  className?: string;
  children: ReactNode;
  dataTestId?: string;
  href: string;
  showIcon?: boolean;
  style?: CSSProperties;
};

const OutsideLinkComponent = ({
  ariaLabel,
  className,
  children,
  dataTestId,
  href,
  showIcon,
  style,
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
    {showIcon && (
      <FiExternalLink
        style={{
          marginLeft: 2,
          position: "relative",
          top: 3,
          // fontSize: 14,
        }}
      />
    )}
  </a>
);

const OutsideLink = styled(OutsideLinkComponent)<{
  padding?: string;
  margin?: string;
  textDecoration?: string;
}>`
  padding: ${({ padding }) => padding || "0px"};
  margin: ${({ margin }) => margin};
  color: #63bfff;
  transition: all 0.5s;
  text-decoration: ${({ textDecoration }) => textDecoration || "underline"};
  cursor: pointer;
  outline: 0;

  :hover {
    color: #fff;
  }

  :focus {
    color: #fff;
    text-decoration: ${({ textDecoration }) => textDecoration || "underline"};
  }
`;

export default OutsideLink;
