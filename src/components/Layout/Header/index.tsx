import { css } from "@emotion/react";
import FlexSpaceAround from "~components/Layout/FlexSpaceAround";
import Orbits from "~components/Layout/Orbits";
import LinkIcon from "~components/Navigation/LinkIcon";
import Center from "~components/Layout/Center";
import Headline from "~components/Layout/Headline";
import SubHeadline from "~components/Layout/SubHeadline";
import OutsideLinkIcon from "~components/Navigation/OutsideLinkIcon";
import { ImInfo, GoHome, FaGithub, FiLinkedin, SiCodesandbox } from "~icons";
import type { ReactElement } from "~types";

const HEADERLINKS = [
  {
    dataTestId: "linkedin",
    Icon: FiLinkedin,
    link: "https://www.linkedin.com/in/mattcarlotta/",
    description: "My LinkedIn profile",
  },
  {
    dataTestId: "github",
    Icon: FaGithub,
    link: "https://github.com/mattcarlotta",
    description: "My github repository",
  },
  {
    dataTestId: "codesandbox",
    Icon: SiCodesandbox,
    link: "https://codesandbox.io/u/mattcarlotta/sandboxes",
    description: "My Codesandbox profile",
  },
];

const Header = (): ReactElement => (
  <header
    data-testid="head"
    css={css`
      padding-top: 50px;
    `}
  >
    <FlexSpaceAround breakpoint direction="row">
      <LinkIcon
        dataTestId="go-home"
        ariaLabel="Navigate back to home page"
        href="/"
      >
        <GoHome />
      </LinkIcon>
      <LinkIcon
        dataTestId="background"
        ariaLabel="Navigate to my background page"
        href="/background"
      >
        <ImInfo />
      </LinkIcon>
      {HEADERLINKS.map(({ dataTestId, description, Icon, link }) => (
        <OutsideLinkIcon
          key={description}
          dataTestId={dataTestId}
          ariaLabel={description}
          href={link}
        >
          <Icon className="icon" />
        </OutsideLinkIcon>
      ))}
    </FlexSpaceAround>
    <Orbits />
    <Center data-testid="header">
      <Headline>MATT CARLOTTA</Headline>
      <SubHeadline>fullstack web developer</SubHeadline>
    </Center>
  </header>
);

export default Header;
