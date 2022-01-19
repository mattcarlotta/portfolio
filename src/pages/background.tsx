import { Fragment } from "react";
import { css } from "@emotion/react";
import DetailHeadline from "~components/Layout/DetailHeadline";
import Flex from "~components/Layout/Flex";
import Image from "~components/Layout/Image";
import Info from "~components/Layout/Info";
import Panel from "~components/Layout/Panel";
import PanelTitle from "~components/Layout/PanelTitle";
import Project from "~components/Layout/Project";
import NormalText from "~components/Layout/NormalText";
import SubTitle from "~components/Layout/SubTitle";
import Text from "~components/Layout/Text";
import Head from "~components/Navigation/Header";
import OutsideLink from "~components/Navigation/OutsideLink";
import {
  AiFillStar,
  AiOutlineStar,
  GiRank3,
  FiPower,
  HiOutlineMail,
  RiMapPin2Line,
} from "~icons";
import type { CSSProperties, ReactElement } from "~types";

const TechSpecs = [
  { technology: "Rust", level: 3 },
  { technology: "Javascript", level: 4 },
  { technology: "Typescript", level: 4 },
  { technology: "Bash Script", level: 4 },
  { technology: "NodeJS", level: 5 },
  { technology: "NextJS", level: 5 },
  { technology: "ReactJS", level: 5 },
  { technology: "ReduxJS", level: 5 },
  { technology: "MongoDB", level: 3 },
  { technology: "PostgreSQL", level: 2 },
  { technology: "ExpressJS", level: 5 },
  { technology: "Webpack", level: 4 },
  { technology: "RollupJS", level: 4 },
  { technology: "Babel", level: 4 },
  { technology: "Ant Design", level: 5 },
  { technology: "Material UI", level: 5 },
  { technology: "Bootstrap", level: 2 },
  { technology: "Jest", level: 5 },
  { technology: "Enzyme", level: 5 },
  { technology: "React Testing Library", level: 3 },
  { technology: "Cypress", level: 4 },
  { technology: "SuperTest", level: 4 },
  { technology: "CSS/SASS", level: 4 },
  { technology: "Linux", level: 4 },
  { technology: "Git", level: 4 },
  { technology: "Github Actions", level: 3 },
  { technology: "Nginx", level: 3 },
];

const additionalEdu = [
  {
    title: "Learn and Understand NodeJS – Anthony Alicea - Udemy",
    url: "https://www.udemy.com/course/understand-nodejs",
  },
  {
    title: "The Web Developer Bootcamp – Colt Steele - Udemy",
    url: "https://www.udemy.com/course/the-web-developer-bootcamp",
  },
  {
    title: "Modern React with Redux – Stephen Grider - Udemy",
    url: "https://www.udemy.com/course/react-redux/",
  },
  {
    title: "Advanced React and Redux – Stephen Grider - Udemy",
    url: "https://www.udemy.com/course/react-redux-tutorial/",
  },
  {
    title: "The Complete React Web App Developer Course – Andrew Mead - Udemy",
    url: "https://www.udemy.com/course/the-complete-react-web-app-developer-course/",
  },
  {
    title: "Accelerated ES6 Javascript Training – Max Schwarzmuller - Udemy",
    url: "https://www.udemy.com/course/es6-bootcamp-next-generation-javascript/",
  },
  {
    title: "The Complete Developers Guide to MongoDB – Stephen Grider - Udemy",
    url: "https://www.udemy.com/course/the-complete-developers-guide-to-mongodb",
  },
  {
    title:
      "Node with React: Fullstack Web Development – Stephen Grider - Udemy",
    url: "https://www.udemy.com/course/node-with-react-fullstack-web-development/",
  },
  {
    title:
      "The Complete React Developer Course (2nd edition) – Andrew Mead - Udemy",
    url: "https://www.udemy.com/course/react-2nd-edition",
  },
  {
    title: "React Testing with Jest and Enzyme – Bonnie Schulkin - Udemy",
    url: "https://www.udemy.com/course/react-testing-with-jest-and-enzyme",
  },
  {
    title: "Understanding TypeScript - Max Schwarzmuller - Udemy",
    url: "https://www.udemy.com/course/understanding-typescript/",
  },
  {
    title: "Introduction to MongoDB - Scott Moss - Front End Masters",
    url: "https://frontendmasters.com/courses/mongodb/",
  },
  {
    title: "VIM Fundamentals - ThePrimeagen - Front End Masters",
    url: "https://frontendmasters.com/courses/vim-fundamentals/",
  },
  {
    title: "Developer Productivity - ThePrimeagen - Front End Masters",
    url: "https://frontendmasters.com/workshops/dev-productivity/",
  },
  {
    title: "Git & Github Master Course - Mohit Uniyal - Udemy",
    url: "https://www.udemy.com/course/git-github-master-course/",
  },
  {
    title:
      "The Rust Programming Language - Richard Feldman - Front End Masters",
    url: "https://frontendmasters.com/courses/rust/",
  },
  {
    title: "Ultimate Rust Crash Course - Nathan Stocks - Udemy",
    url: "https://www.udemy.com/course/ultimate-rust-crash-course/",
  },
  {
    title:
      "Learn Rust by Building Real Applications - Lyubomir Gavadinov - Udemy",
    url: "https://www.udemy.com/course/rust-fundamentals/",
  },
  {
    title:
      "CSS Grid & Flexbox for Responsive Layouts, v2 - Jen Kramer - Front End Masters",
    url: "https://frontendmasters.com/courses/css-grid-flexbox-v2/",
  },
];

const style = {
  fontSize: 20,
  verticalAlign: "middle",
  marginRight: 10,
} as CSSProperties;

const Background = (): ReactElement => (
  <Fragment>
    <Head />
    <Project>
      <PanelTitle data-testid="panel-title">background</PanelTitle>
      <Panel>
        <div
          css={css`
            margin: 40px 0 0 0;
            padding: 0 20px;
          `}
        >
          <Image
            src="me"
            alt="portrait"
            height="100%"
            width="100%"
            styles="margin: 0 auto;max-width: 250px;max-height: 250px;border-radius: 10px;"
          />
        </div>
        <Text>
          <DetailHeadline>Details:</DetailHeadline>
          <NormalText margin="0 0 0 15px" fontSize="16px">
            <Info data-testid="status">
              <FiPower style={{ color: "limegreen", ...style }} />
              Deployed in September 2016
            </Info>
            <Info data-testid="location">
              <RiMapPin2Line style={style} />
              Small town in Oregon, USA
            </Info>
            <Info data-testid="level">
              <GiRank3 style={style} />
              Mid-Level Developer
            </Info>
            <Info data-testid="source">
              <HiOutlineMail style={style} />
              <OutsideLink
                dataTestId="send-email-link"
                ariaLabel="Click to send me an email."
                href="mailto:matt@mattcarlotta.com"
              >
                matt@mattcarlotta.com
              </OutsideLink>
            </Info>
          </NormalText>
          <DetailHeadline>Brief:</DetailHeadline>
          <SubTitle data-testid="brief">
            In September 2016, I embarked on the journey to become a fullstack
            developer. As the years have gone by, I have focused my efforts in:
            MongoDB, ExpressJS, ReactJS/ReduxJS and NodeJS. The apps I build are
            test-driven, cross-platform, and production-ready. I also deploy and
            maintain them on remote headless Linux servers!
            <br />
            <br />
            Outside of work, I love walking my dog Nico and watching
            mystery/thriller movies. In my free time, I am passionate about
            contributing to open-source projects. I enjoy helping the web
            development community by asking and answering questions. And lastly,
            I love building SEO optimized applications for fun.
          </SubTitle>
          <DetailHeadline>Tech Specs:</DetailHeadline>
          <ul
            data-testid="tech"
            css={css`
              list-style-type: none;
              padding: 0 10px;
            `}
          >
            {TechSpecs.map(({ technology, level }, index) => (
              <li key={technology}>
                <NormalText fontSize="20px">
                  <Flex
                    breakpoint
                    width="100%"
                    flexwrap
                    style={{
                      background: index % 2 ? "#001b56" : "transparent",
                      padding: "0 10px",
                    }}
                  >
                    <Flex
                      breakpoint
                      justify="flex-start"
                      width="50%"
                      style={{ color: "#0088ff" }}
                    >
                      {technology}
                    </Flex>
                    <Flex breakpoint justify="flex-end" width="50%">
                      {[
                        Array.from({ length: level }, (_, i) => (
                          <AiFillStar
                            key={`${technology}-${i}`}
                            style={{
                              verticalAlign: "middle",
                              color: "#0088ff",
                              ...style,
                            }}
                          />
                        )),
                      ]}
                      {5 - level > 0
                        ? Array.from({ length: 5 - level }, (_, i) => (
                            <AiOutlineStar
                              key={`not-${technology}-${i}`}
                              style={{
                                verticalAlign: "middle",
                                color: "#4a4a4a",
                                ...style,
                              }}
                            />
                          ))
                        : null}
                    </Flex>
                  </Flex>
                </NormalText>
              </li>
            ))}
          </ul>
          <DetailHeadline>formal Education:</DetailHeadline>
          <SubTitle data-testid="brief">
            San Jose State University | 2005-2012 | 3.5GPA
          </SubTitle>
          <DetailHeadline>Online Education:</DetailHeadline>
          <ul
            data-testid="re-education"
            css={css`
              list-style-type: none;
              padding: 0 10px;
            `}
          >
            {additionalEdu.map(({ title, url }, index) => (
              <li
                style={{ background: index % 2 ? "#001b56" : "transparent" }}
                key={title}
              >
                <NormalText style={{ padding: "0 10px" }} fontSize="20px">
                  <OutsideLink ariaLabel={`Navigate to ${title}`} href={url}>
                    {title}
                  </OutsideLink>
                </NormalText>
              </li>
            ))}
          </ul>
        </Text>
      </Panel>
    </Project>
  </Fragment>
);

export default Background;
