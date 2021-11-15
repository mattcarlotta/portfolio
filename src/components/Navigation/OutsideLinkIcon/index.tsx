import styled from "@emotion/styled";
import type { CSSProperties, ReactNode } from "~types";

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

const OutsideLink = styled(OutsideLinkComponent)`
  @media (max-width: 650px) {
    margin: 0 5px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin: 0 10px;
  color: #008ef1;
  transition: all 0.5s;
  text-decoration: none;
  outline: none;
  border: 1px solid transparent;
  border-radius: 3px;
  outline: 0;
  font-size: 18px;

  :hover {
    color: #fff;
  }

  :focus {
    color: #fff;
    border-color: #0096ff;
    box-shadow: inset -1px -1px 24px -9px rgba(101, 130, 255, 0.5),
      0px 0px 26px -2px rgba(0, 64, 255, 1);
  }
`;

export default OutsideLink;
