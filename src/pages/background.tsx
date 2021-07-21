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
  IconContext,
  RiMapPin2Line,
} from "~icons";
import { ReactElement } from "~types";

const TechSpecs = [
  { technology: "Javascript", level: 4 },
  { technology: "Typescript", level: 4 },
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

const Background = (): ReactElement => (
  <IconContext.Provider
    value={{
      style: { fontSize: 20, verticalAlign: "middle", marginRight: 10 },
    }}
  >
    <Head title="Background" url="background" />
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
                dataTestId="send-email-link"
                ariaLabel="Click to send me an email."
                href="mailto:matt@mattcarlotta.sh"
              >
                matt@mattcarlotta.sh
              </OutsideLink>
            </Info>
          </NormalText>
          <DetailHeadline>Brief:</DetailHeadline>
          <SubTitle data-testid="brief">
            Up until 2012 I was a commercial artist, but in September 2016 I
            started the journey to become a fullstack developer who is
            passionate background open-source projects, helping the web
            development community, and building SEO optimized applications.{" "}
            <br />
            <br />
            Over the years I have become a self-taught, self-disciplined, and
            self-driven fullstack web developer in MongoDB, PostgreSQL,
            ExpressJS, ReactJS/ReduxJS and NodeJS. I&apos;m proﬁcient in HTML
            and CSS3+ stylesheets across multiplatform devices while
            understanding cross-platform limitations. I actively deploy and
            maintain applications running on remote Linux servers. <br />
            <br />
            I&apos;m a quick learner that is adaptable to emerging languages,
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
        </Text>
      </Panel>
    </Project>
  </IconContext.Provider>
);

export default Background;
