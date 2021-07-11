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
  margin?: string;
  padding?: string;
  scroll?: boolean;
  style?: CSSProperties;
};

const LinkComponent = ({
  ariaLabel,
  asHref,
  className,
  children,
  dataTestId,
  href,
  scroll,
  style,
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
);

const StyledLink = styled(LinkComponent)<{
  fontSize?: string;
  showUnderline?: boolean;
}>`
  padding: ${({ padding }) => padding || "10px 15px"};
  margin: ${({ margin }) => margin};
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
