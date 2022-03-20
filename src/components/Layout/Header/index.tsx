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
    dataTestId: "linkedin",
    Icon: FiLinkedin,
    link: "https://www.linkedin.com/in/mattcarlotta/",
    description: "My LinkedIn profile",
    title: "linkedin",
  },
  {
    dataTestId: "github",
    Icon: FaGithub,
    link: "https://github.com/mattcarlotta",
    description: "My github repository",
    title: "github",
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
      <Tooltip title="home">
        <LinkIcon
          dataTestId="go-home"
          ariaLabel="Navigate back to my home page"
          href="/"
        >
          <GoHome />
        </LinkIcon>
      </Tooltip>
      <Tooltip title="projects">
        <LinkIcon
          dataTestId="go-to-projects"
          ariaLabel="Navigate back to my projects page"
          href="/projects"
        >
          <IoPlanet />
        </LinkIcon>
      </Tooltip>
      <Tooltip title="explorations">
        <LinkIcon
          dataTestId="go-to-explorations"
          ariaLabel="Navigate back to my explorations page"
          href="/explorations"
        >
          <GiPlanetCore />
        </LinkIcon>
      </Tooltip>
      <Tooltip title="background">
        <LinkIcon
          dataTestId="background"
          ariaLabel="Navigate to my background page"
          href="/background"
        >
          <ImInfo />
        </LinkIcon>
      </Tooltip>
      {HEADERLINKS.map(({ dataTestId, description, Icon, link, title }) => (
        <Tooltip key={title} title={title}>
          <OutsideLinkIcon
            dataTestId={dataTestId}
            ariaLabel={description}
            href={link}
          >
            <Icon className="icon" />
          </OutsideLinkIcon>
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
