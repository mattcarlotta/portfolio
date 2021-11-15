import { css } from "@emotion/react";
import FlexSpaceAround from "~components/Layout/FlexSpaceAround";
import Orbits from "~components/Layout/Orbits";
import LinkIcon from "~components/Navigation/LinkIcon";
import Center from "~components/Layout/Center";
import Headline from "~components/Layout/Headline";
import SubHeadline from "~components/Layout/SubHeadline";
import OutsideLinkIcon from "~components/Navigation/OutsideLinkIcon";
import {
  ImInfo,
  GoHome,
  // GoMail,
  // FaBlog,
  FaGithub,
  FiLinkedin,
  SiCodesandbox,
} from "~icons";
import { ReactElement } from "~types";
import Flex from "../Flex";

const HEADERLINKS = [
  // {
  //   dataTestId: "mail",
  //   Icon: GoMail,
  //   link: "mailto:matt@mattcarlotta.sh",
  //   description: "My email address",
  // },
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
  // {
  //   dataTestId: "blog",
  //   Icon: FaBlog,
  //   link: "https://mattcarlotta.blogspot.com",
  //   description: "My personal blog",
  // },
];

const Header = (): ReactElement => (
  <header
    css={css`
      padding-top: 60px;
    `}
  >
    <FlexSpaceAround breakpoint direction="row">
      <LinkIcon
        dataTestId="go-home"
        ariaLabel="Navigate back to home page"
        href="/"
      >
        <Flex justify="center">
          <GoHome />
        </Flex>
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

// const Header = (): ReactElement => (
//   <header
//     css={css`
//       padding-top: 60px;
//     `}
//   >
//     <FlexSpaceAround breakpoint direction="row">
//       <ListItem>
//         <LinkIcon
//           dataTestId="go-home"
//           ariaLabel="Navigate back to home page"
//           href="/"
//           padding="5px"
//           margin="0 5px"
//         >
//           <Flex justify="center">
//             <GoHome />
//           </Flex>
//         </LinkIcon>
//       </ListItem>
//       <ListItem>
//         <LinkIcon
//           dataTestId="background"
//           ariaLabel="Navigate to my background page"
//           href="/background"
//           padding="5px"
//           margin="0 5px"
//         >
//           <ImInfo />
//         </LinkIcon>
//       </ListItem>
//       {HEADERLINKS.map(({ dataTestId, description, Icon, link }) => (
//         <ListItem key={description}>
//           <OutsideLink
//             dataTestId={dataTestId}
//             ariaLabel={description}
//             href={link}
//             padding="5px"
//             margin="0 5px"
//           >
//             <Icon className="icon" />
//           </OutsideLink>
//         </ListItem>
//       ))}
//     </FlexSpaceAround>
//     <Orbits />
//     <Center data-testid="header">
//       <Headline>MATT CARLOTTA</Headline>
//       <SubHeadline>fullstack web developer</SubHeadline>
//     </Center>
//   </header>
// );

export default Header;
