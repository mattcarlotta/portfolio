import { Fragment } from "react";
import CardPreview from "~components/Layout/CardPreview";
import Flex from "~components/Layout/Flex";
import Head from "~components/Navigation/Header";
import { getHomepageCards } from "~utils/contentfulApi";
import { REVALIDATE_TIME } from "~utils/revalidate";
import type { CONTENTFUL_CARDS, GetStaticProps, ReactElement } from "~types";

const Home = ({ cards }: { cards: Array<CONTENTFUL_CARDS> }): ReactElement => (
  <Fragment>
    <Head />
    <Flex data-testid="home-page" margin="75px 0 0 0" justify="center" flexwrap>
      {cards.map(({ sys, title, preview, slug, description }, index) => (
        <CardPreview
          {...preview}
          key={sys.id}
          ariaLabel={`Navigate to ${slug} page`}
          description={description}
          idx={index}
          title={title}
          href={slug}
          showInfo={false}
        />
      ))}
    </Flex>
  </Fragment>
);

export const getStaticProps: GetStaticProps = async () => {
  const res = await getHomepageCards();

  const cards = res.data?.homepageCardCollection?.items;

  if (!cards) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      cards,
      revalidate: REVALIDATE_TIME,
    },
  };
};

export default Home;
