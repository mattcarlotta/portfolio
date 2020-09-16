import Link from "next/link";
import styled from "styled-components";
import { LinkProps } from "~types";

const LinkComponent = ({
  ariaLabel,
  asHref,
  className,
  children,
  dataTestId,
  href,
  style,
}: LinkProps) => (
  <Link href={href} as={asHref} prefetch={false} passHref>
    <a
      aria-label={ariaLabel}
      data-testid={dataTestId}
      style={style}
      className={className}
    >
      {children}
    </a>
  </Link>
);

const StyledLink = styled(LinkComponent)`
  padding: ${({ padding }) => padding || "10px 15px"};
  color: #1295f3;
  transition: all 0.5s;
  text-decoration: none;

  :hover {
    cursor: pointer;
    text-decoration: none;
    color: #fff;
  }

  :focus {
    color: #1295f3;
    outline: none !important;
    text-decoration: none;
  }
`;

export default StyledLink;
