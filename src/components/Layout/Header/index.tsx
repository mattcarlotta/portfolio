import { css } from "@emotion/react";
import FlexCenter from "~components/Layout/FlexCenter";
import ListItem from "~components/Layout/ListItem";
import Orbits from "~components/Layout/Orbits";
import Link from "~components/Navigation/Link";
import OutsideLink from "~components/Navigation/OutsideLink";
import Center from "~components/Layout/Center";
import Headline from "~components/Layout/Headline";
import SubHeadline from "~components/Layout/SubHeadline";
import {
  IconContext,
  GoHome,
  GoMail,
  FaBlog,
  FiLinkedin,
  RiGithubLine,
} from "~icons";
import { ReactElement } from "~types";

const FOOTERLINKS = [
  {
    dataTestId: "mail",
    Icon: GoMail,
    link: "mailto:matt@mattcarlotta.sh",
    description: "My email address",
  },
  {
    dataTestId: "github",
    Icon: RiGithubLine,
    link: "https://github.com/mattcarlotta",
    description: "My github repository",
  },
  {
    dataTestId: "linkedin",
    Icon: FiLinkedin,
    link: "https://www.linkedin.com/in/mattcarlotta/",
    description: "My LinkedIn profile",
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
      <nav
        css={css`
          margin: 0 auto;
        `}
      >
        <FlexCenter breakpoint direction="row">
          <ListItem>
            <Link
              dataTestId="go-home"
              ariaLabel="Navigate back to home page"
              href="/"
            >
              <GoHome />
            </Link>
          </ListItem>
          {FOOTERLINKS.map(({ dataTestId, description, Icon, link }) => (
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
        </FlexCenter>
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
