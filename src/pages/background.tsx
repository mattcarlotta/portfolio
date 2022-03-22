import { css } from "@emotion/react";
import ContentfulRichText from "~components/Layout/ContentfulRichText";
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
import { getBackground } from "~utils/contentfulApi";
import { REVALIDATE_TIME } from "~utils/revalidate";
import type {
  CONTENTFUL_BACKGROUND_PAGE,
  CSSProperties,
  GetStaticProps,
  ReactElement,
} from "~types";

const style = {
  fontSize: 20,
  verticalAlign: "middle",
  marginRight: 10,
} as CSSProperties;

const Background = ({
  background,
}: {
  background: CONTENTFUL_BACKGROUND_PAGE;
}): ReactElement => (
  <>
    <Head />
    <Project>
      <header>
        <PanelTitle data-testid="panel-title">{background.title}</PanelTitle>
      </header>
      <Panel>
        <Image
          {...background.profileImage}
          placeholder
          alt={background.profileImage.description}
          styles="margin: 30px auto auto;border-radius: 10px;"
        />
        <Text>
          <section>
            <header>
              <DetailHeadline margin="20px 0 0 0">Details:</DetailHeadline>
            </header>
            <NormalText margin="15px 0 0 15px" fontSize="16px">
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
          </section>
          <section>
            <header>
              <DetailHeadline>Brief:</DetailHeadline>
            </header>
            <SubTitle data-testid="brief">
              <ContentfulRichText json={background.description.json} />
            </SubTitle>
          </section>
          <section>
            <header>
              <DetailHeadline>Tech Specs:</DetailHeadline>
            </header>
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
                        as="p"
                        padding="0"
                        margin="0"
                        justify="flex-start"
                        width="50%"
                        style={{ color: "#0088ff" }}
                      >
                        {technology}
                      </Flex>
                      <Flex
                        as="p"
                        breakpoint
                        padding="0"
                        margin="0"
                        justify="flex-end"
                        width="50%"
                      >
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
          </section>
          <section>
            <header>
              <DetailHeadline>formal Education:</DetailHeadline>
            </header>
            <SubTitle as="p" data-testid="brief">
              San Jose State University | 2005-2012 | 3.5GPA
            </SubTitle>
          </section>
          <section>
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
          </section>
        </Text>
      </Panel>
    </Project>
  </>
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
