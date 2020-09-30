import styled from "@emotion/styled";
import { OutsideLinkProps } from "~types";

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
  padding: 10px 15px;
  color: #1295f3;
  transition: all 0.5s;
  text-decoration: underline;
  cursor: pointer;

  :hover {
    color: #fff;
  }

  :focus {
    color: #1295f3;
    outline: none !important;
  }
`;

export default OutsideLink;
