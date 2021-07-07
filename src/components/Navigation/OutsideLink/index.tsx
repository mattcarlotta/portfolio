import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "~types";

export type OutsideLinkProps = {
  ariaLabel: string;
  className?: string;
  children: ReactNode;
  dataTestId?: string;
  href: string;
  style?: CSSProperties;
};

const OutsideLinkComponent = ({
  ariaLabel,
  className,
  children,
  dataTestId,
  href,
  style,
}: OutsideLinkProps) => (
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
  </a>
);

const OutsideLink = styled(OutsideLinkComponent)<{
  padding?: string;
  textDecoration?: string;
}>`
  padding: ${({ padding }) => padding || "10px 15px"};
  color: #008ef1;
  transition: all 0.5s;
  text-decoration: ${({ textDecoration }) => textDecoration || "underline"};
  cursor: pointer;

  :hover {
    color: #fff;
  }

  :focus {
    color: #008ef1;
    outline: none !important;
  }
`;

export default OutsideLink;
