import { css } from "@emotion/react";
import { IconContext } from "react-icons";
import { FaBlog } from "react-icons/fa";
import { GoHome, GoMail } from "react-icons/go";
import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import FlexCenter from "~components/Layout/FlexCenter";
import ListItem from "~components/Layout/ListItem";
import Orbits from "~components/Layout/Orbits";
import Link from "~components/Navigation/Link";
import OutsideLink from "~components/Navigation/OutsideLink";
import Center from "~components/Layout/Center";
import Headline from "~components/Layout/Headline";
import SubHeadline from "~components/Layout/SubHeadline";

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

const Header = (): JSX.Element => (
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
        <FlexCenter direction="row">
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
