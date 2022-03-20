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
  <header
    data-testid="head"
    css={css`
      padding-top: 60px;
    `}
  >
    <FlexSpaceAround breakpoint direction="row">
      {HEADERLINKS.map(({ href, page, Icon, external }) => (
        <Tooltip key={page} title={page}>
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
      ))}
    </FlexSpaceAround>
    <Orbits />
    <Center data-testid="header">
      <Headline>MATT CARLOTTA</Headline>
      <SubHeadline>fullstack software engineer</SubHeadline>
    </Center>
  </header>
);

export default Header;
