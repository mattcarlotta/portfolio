import { Fragment } from "react";
import { css } from "@emotion/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
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
import type {
  CONTENTFUL_BACKGROUND,
  CSSProperties,
  GetStaticProps,
  ReactElement,
} from "~types";
import { getBackground } from "~utils/contentfulApi";
import { REVALIDATE_TIME } from "~utils/revalidate";

const style = {
  fontSize: 20,
  verticalAlign: "middle",
  marginRight: 10,
} as CSSProperties;

const Background = ({
  background,
}: {
  background: CONTENTFUL_BACKGROUND;
}): ReactElement => (
  <Fragment>
    <Head />
    <Project>
      <PanelTitle data-testid="panel-title">{background.title}</PanelTitle>
      <Panel>
        <div
          css={css`
            margin: 40px 0 0 0;
            padding: 0 20px;
          `}
        >
          <Image
            url={background.profileImage.url}
            alt={background.profileImage.description}
            height={background.profileImage.height}
            width={background.profileImage.width}
            contentType={background.profileImage.contentType}
            styles="margin: 0 auto;max-width: 250px;max-height: 250px;border-radius: 10px;"
          />
        </div>
        <Text>
          <DetailHeadline>Details:</DetailHeadline>
          <NormalText margin="0 0 0 15px" fontSize="16px">
            <Info data-testid="status">
              <FiPower style={{ color: "limegreen", ...style }} />
              Activated in September 2016
            </Info>
            <Info data-testid="location">
              <RiMapPin2Line style={style} />
              {background.location}
            </Info>
            <Info data-testid="level">
              <GiRank3 style={style} />
              {background.rank}
            </Info>
            <Info data-testid="source">
              <HiOutlineMail style={style} />
              <OutsideLink
                dataTestId="send-email-link"
                ariaLabel="Click to send me an email."
                href="mailto:matt@mattcarlotta.com"
              >
                {background.email}
              </OutsideLink>
            </Info>
          </NormalText>
          <DetailHeadline>Brief:</DetailHeadline>
          <SubTitle data-testid="brief">
            {documentToReactComponents(background.description.json)}
          </SubTitle>
          <DetailHeadline>Tech Specs:</DetailHeadline>
          <ul
            data-testid="tech"
            css={css`
              list-style-type: none;
              padding: 0 10px;
            `}
          >
            {background.tech.data.map(({ technology, level }, index) => (
              <li key={technology}>
                <NormalText fontSize="20px">
                  <Flex
                    breakpoint
                    width="100%"
                    flexwrap
                    style={{
                      background: index % 2 ? "#001031" : "transparent",
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
            {background.education.data.map(({ title, url }, index) => (
              <li
                style={{ background: index % 2 ? "#001031" : "transparent" }}
                key={title}
              >
                <NormalText style={{ padding: "0 10px" }} fontSize="20px">
                  <OutsideLink
                    ariaLabel={`Navigate to ${title}`}
                    href={url}
                    showIcon
                  >
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

export const getStaticProps: GetStaticProps = async () => {
  const res = await getBackground();

  const background = res.data?.background;

  if (!background) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      background,
      revalidate: REVALIDATE_TIME,
    },
  };
};

export default Background;
