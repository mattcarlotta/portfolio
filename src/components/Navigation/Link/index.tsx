import Link from "next/link";
import styled from "@emotion/styled";
import { CSSProperties, ReactElement, ReactNode } from "~types";

export type LinkProps = {
  ariaLabel: string;
  asHref?: string;
  dataTestId: string;
  children: ReactNode;
  className?: string;
  href: string;
  padding?: string;
  style?: CSSProperties;
};

const LinkComponent = ({
  ariaLabel,
  asHref,
  className,
  children,
  dataTestId,
  href,
  style,
}: LinkProps): ReactElement => (
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

const StyledLink = styled(LinkComponent)<{
  fontSize?: string;
  showUnderline?: boolean;
}>`
  padding: ${({ padding }) => padding || "10px 15px"};
  color: #1295f3;
  transition: all 0.5s;
  text-decoration: none;
  outline: none;
  font-size: ${({ fontSize }) => fontSize};

  :hover {
    cursor: pointer;
    text-decoration: ${({ showUnderline }) =>
      showUnderline ? "underline" : "none"};
    color: #fff;
  }

  :focus {
    color: #1295f3;
    text-decoration: none;
  }
`;

export default StyledLink;
