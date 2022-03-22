import { css } from "@emotion/react";
import FlexSpaceAround from "~components/Layout/FlexSpaceAround";
import Orbits from "~components/Layout/Orbits";
import LinkIcon from "~components/Navigation/LinkIcon";
import Center from "~components/Layout/Center";
import Headline from "~components/Layout/Headline";
import SubHeadline from "~components/Layout/SubHeadline";
import OutsideLinkIcon from "~components/Navigation/OutsideLinkIcon";
import Tooltip from "~components/Layout/Tooltip";
import {
  ImInfo,
  GiPlanetCore,
  GoHome,
  FaGithub,
  FiLinkedin,
  IoPlanet,
} from "~icons";
import type { ReactElement } from "~types";

const HEADERLINKS = [
  {
    page: "home",
    href: "/",
    Icon: GoHome,
  },
  {
    page: "projects",
    href: "/projects",
    Icon: IoPlanet,
  },
  {
    page: "explorations",
    href: "/explorations",
    Icon: GiPlanetCore,
  },
  {
    page: "background",
    href: "/background",
    Icon: ImInfo,
  },
  {
    page: "linkedIn",
    href: "https://www.linkedin.com/in/mattcarlotta/",
    Icon: FiLinkedin,
    external: true,
  },
  {
    page: "github",
    href: "https://github.com/mattcarlotta",
    Icon: FaGithub,
    external: true,
  },
];

const Header = (): ReactElement => (
  <nav
    data-testid="head"
    css={css`
      padding-top: 60px;
    `}
  >
    <FlexSpaceAround
      as="ul"
      breakpoint
      direction="row"
      style={{ listStyle: "none", margin: "0 auto", padding: 0 }}
    >
      {HEADERLINKS.map(({ href, page, Icon, external }) => (
        <li
          css={css`
            display: flex;
          `}
          key={page}
        >
          <Tooltip title={page}>
            {!external ? (
              <LinkIcon
                dataTestId={`go-to-${page}`}
                ariaLabel={`Navigate to my ${page} page`}
                href={href}
              >
                <Icon />
              </LinkIcon>
            ) : (
              <OutsideLinkIcon
                dataTestId={`go-to-${page}`}
                ariaLabel={`Navigate to my ${page} page`}
                href={href}
              >
                <Icon />
              </OutsideLinkIcon>
            )}
          </Tooltip>
        </li>
      ))}
    </FlexSpaceAround>
    <Orbits />
    <Center as="header" data-testid="header">
      <Headline>MATT CARLOTTA</Headline>
      <SubHeadline>fullstack software engineer</SubHeadline>
    </Center>
  </nav>
);

export default Header;
