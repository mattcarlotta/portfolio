import { css } from "@emotion/react";
import FlexSpaceAround from "~components/Layout/FlexSpaceAround";
import ListItem from "~components/Layout/ListItem";
import Orbits from "~components/Layout/Orbits";
import Link from "~components/Navigation/Link";
import Center from "~components/Layout/Center";
import Headline from "~components/Layout/Headline";
import SubHeadline from "~components/Layout/SubHeadline";
import OutsideLink from "~components/Navigation/OutsideLink";
import {
  BsPersonBoundingBox,
  IconContext,
  GoHome,
  GoMail,
  FaBlog,
  FiLinkedin,
  RiGithubLine,
  SiCodesandbox,
} from "~icons";
import { ReactElement } from "~types";

const HEADERLINKS = [
  {
    dataTestId: "mail",
    Icon: GoMail,
    link: "mailto:matt@mattcarlotta.sh",
    description: "My email address",
  },
  {
    dataTestId: "linkedin",
    Icon: FiLinkedin,
    link: "https://www.linkedin.com/in/mattcarlotta/",
    description: "My LinkedIn profile",
  },
  {
    dataTestId: "github",
    Icon: RiGithubLine,
    link: "https://github.com/mattcarlotta",
    description: "My github repository",
  },
  {
    dataTestId: "codesandbox",
    Icon: SiCodesandbox,
    link: "https://codesandbox.io/u/mattcarlotta/sandboxes",
    description: "My Codesandbox profile",
  },
  {
    dataTestId: "blog",
    Icon: FaBlog,
    link: "https://mattcarlotta.blogspot.com",
    description: "My personal blog",
  },
];

const Header = (): ReactElement => (
  <header
    css={css`
      padding-top: 60px;
    `}
  >
    <IconContext.Provider
      value={{
        style: { fontSize: 18, verticalAlign: "text-top", marginRight: 5 },
      }}
    >
      <nav>
        <FlexSpaceAround breakpoint direction="row">
          <ListItem>
            <Link
              dataTestId="go-home"
              ariaLabel="Navigate back to home page"
              href="/"
              padding="0px"
            >
              <GoHome />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              dataTestId="about-me"
              ariaLabel="Navigate to about page"
              href="/about"
              padding="0px"
            >
              <BsPersonBoundingBox
                style={{ fontSize: 15, position: "relative", top: 2 }}
              />
            </Link>
          </ListItem>
          {HEADERLINKS.map(({ dataTestId, description, Icon, link }) => (
            <ListItem key={description}>
              <OutsideLink
                dataTestId={dataTestId}
                ariaLabel={description}
                href={link}
              >
                <Icon className="icon" />
              </OutsideLink>
            </ListItem>
          ))}
        </FlexSpaceAround>
      </nav>
      <Orbits />
      <Center data-testid="header">
        <Headline>MATT CARLOTTA</Headline>
        <SubHeadline>fullstack web developer and commercial artist</SubHeadline>
      </Center>
    </IconContext.Provider>
  </header>
);

export default Header;
