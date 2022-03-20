import { Fragment } from "react";
import CardPreview from "~components/Layout/CardPreview";
import Flex from "~components/Layout/Flex";
import Head from "~components/Navigation/Header";
import { getHomepageCards } from "~utils/contentfulApi";
import { REVALIDATE_TIME } from "~utils/revalidate";
import type {
  CONTENTFUL_PAGE_CARD,
  GetStaticProps,
  ReactElement,
} from "~types";

const Home = ({
  cards,
}: {
  cards: Array<CONTENTFUL_PAGE_CARD>;
}): ReactElement => (
  <Fragment>
    <Head />
    <Flex data-testid="home-page" margin="75px 0 0 0" justify="center" flexwrap>
      {cards.map(({ sys, preview, slug, ...rest }, index) => (
        <CardPreview
          {...preview}
          {...rest}
          key={sys.id}
          ariaLabel={`Navigate to my ${slug} page`}
          idx={index}
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
