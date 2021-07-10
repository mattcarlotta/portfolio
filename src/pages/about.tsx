import { css } from "@emotion/react";
import DetailHeadline from "~components/Layout/DetailHeadline";
// import Image from "~components/Layout/Image";
import Info from "~components/Layout/Info";
import Panel from "~components/Layout/Panel";
import Project from "~components/Layout/Project";
import SubTitle from "~components/Layout/SubTitle";
import Text from "~components/Layout/Text";
import PanelTitle from "~components/Layout/PanelTitle";
import Head from "~components/Navigation/Header";
import OutsideLink from "~components/Navigation/OutsideLink";
import {
  AiFillStar,
  GiRank3,
  FiPower,
  HiOutlineMail,
  IconContext,
  RiMapPin2Line,
} from "~icons";
import { ReactElement } from "~types";
import Flex from "~components/Layout/Flex";

const TechSpecs = [
  { technology: "Javascript", level: 4 },
  { technology: "Typescript", level: 4 },
  { technology: "NodeJS", level: 5 },
  { technology: "NextJS", level: 5 },
  { technology: "ReactJS", level: 5 },
  { technology: "ReduxJS", level: 5 },
  { technology: "MongoDB", level: 4 },
  { technology: "PostgreSQL", level: 2 },
  { technology: "ExpressJS", level: 5 },
  { technology: "Webpack", level: 4 },
  { technology: "RollupJS", level: 4 },
  { technology: "Babel", level: 4 },
  { technology: "Ant Design", level: 5 },
  { technology: "Material UI", level: 5 },
  { technology: "Bootstrap", level: 3 },
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

const About = (): ReactElement => (
  <IconContext.Provider
    value={{
      style: { fontSize: 20, verticalAlign: "text-top", marginRight: 7 },
    }}
  >
    <Head title="About" url="about" description="An exploration example." />
    <Project>
      <PanelTitle data-testid="panel-title">about me</PanelTitle>
      <Panel>
        <Text>
          <DetailHeadline>Details:</DetailHeadline>
          <div
            css={css`
              font-family: "Mukta", -apple-system, BlinkMacSystemFont,
                "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans",
                "Droid Sans", "Helvetica Neue", sans-serif;
              margin-bottom: 20px;
              padding-left: 20px;
            `}
          >
            <Info data-testid="status">
              <FiPower style={{ color: "limegreen" }} />
              Activated in September 2016
            </Info>
            <Info data-testid="location">
              <RiMapPin2Line />
              Small town in Oregon, USA
            </Info>
            <Info data-testid="level">
              <GiRank3 />
              Mid-Level Developer
            </Info>
            <Info data-testid="source">
              <HiOutlineMail />
              <OutsideLink
                dataTestId="about-me-email-link"
                ariaLabel="Click to send me an email."
                href="mailto:matt@mattcarlotta.sh"
              >
                matt@mattcarlotta.sh
              </OutsideLink>
            </Info>
          </div>
          <DetailHeadline>Brief:</DetailHeadline>
          <SubTitle data-testid="brief">
            Up until 2012 was a commercial artist, but in September 2016 started
            the journey to become a fullstack developer who is passionate about
            open-source projects, helping the web development community, and
            building SEO optimized applications. <br />
            <br />
            Over the years has become a self-taught, self-disciplined, and
            self-driven fullstack web developer in MongoDB, PostgreSQL,
            ExpressJS, ReactJS/ReduxJS and NodeJS. Proﬁcient in HTML and CSS3
            stylesheets across multiplatform devices while understanding
            cross-platform limitations. Actively deploys and maintains
            applications running on remote Linux servers. <br />
            <br />A quick learner that is adaptable to emerging languages,
            technologies, and frameworks. An excellent communicator who is very
            patient, whether its breaking-down complex technical information to
            the needs of a client or accepting/providing feedback to a team.
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
              <li
                css={css`
                  font-size: 20px;
                  font-family: "Mukta", -apple-system, BlinkMacSystemFont,
                    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans",
                    "Droid Sans", "Helvetica Neue", sans-serif;
                `}
                key={technology}
              >
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
                          style={{ verticalAlign: "middle", color: "#0088ff" }}
                        />
                      )),
                    ]}
                    {5 - level > 0
                      ? Array.from({ length: 5 - level }, (_, i) => (
                          <AiFillStar
                            key={`not-${technology}-${i}`}
                            style={{
                              verticalAlign: "middle",
                              color: "#4a4a4a",
                            }}
                          />
                        ))
                      : null}
                  </Flex>
                </Flex>
              </li>
            ))}
          </ul>
        </Text>
      </Panel>
    </Project>
  </IconContext.Provider>
);

export default About;
