import Link from "next/link";
import styled from "@emotion/styled";
import { CSSProperties, ReactElement, ReactNode } from "~types";

export type LinkIconProps = {
  ariaLabel: string;
  asHref?: string;
  dataTestId: string;
  children: ReactNode;
  className?: string;
  href: string;
  scroll?: boolean;
  style?: CSSProperties;
};

const LinkIconComponent = ({
  ariaLabel,
  asHref,
  className,
  children,
  dataTestId,
  href,
  scroll,
  style,
}: LinkIconProps): ReactElement => (
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

const LinkIcon = styled(LinkIconComponent)`
  @media (max-width: 650px) {
    margin: 0 5px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin: 0 10px;
  color: #1295f3;
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

export default LinkIcon;
