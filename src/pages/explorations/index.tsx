import { Fragment } from "react";
import CardPreview from "~components/Layout/CardPreview";
import Category from "~components/Layout/Category";
import Flex from "~components/Layout/Flex";
import Head from "~components/Navigation/Header";
import { GiPlanetCore } from "~icons";
import { getAllExplorations } from "~utils/contentfulApi";
import { REVALIDATE_TIME } from "~utils/revalidate";
import type {
  CONTENTFUL_EXPLORATIONS_PAGE,
  GetStaticProps,
  ReactElement,
} from "~types";

const ExplorationsPage = ({
  explorations,
}: {
  explorations: Array<CONTENTFUL_EXPLORATIONS_PAGE>;
}): ReactElement => (
  <Fragment>
    <Head description="A small collection of codesandbox explorations I've created over the years" />
    <Category data-testid="category">
      <GiPlanetCore style={{ fontSize: 22, marginRight: 10 }} />
      explorations
    </Category>
    <Flex
      data-testid="home-page"
      justify="center"
      flexwrap
      margin="0 0 200px 0"
    >
      {explorations.map(({ sys, title, sandboxId, preview, ...rest }) => (
        <CardPreview
          {...preview}
          {...rest}
          active
          key={sys.id}
          location={`https://${sandboxId}.csb.app`}
          ariaLabel={`Navigate to my ${title} exploration page`}
          href="explorations"
          source={`https://codesandbox.io/s/${sandboxId}`}
          status="In Orbit"
          alt={preview.description}
        />
      ))}
    </Flex>
  </Fragment>
);

export const getStaticProps: GetStaticProps = async () => {
  const res = await getAllExplorations();

  const explorations = res.data?.explorationsCollection?.items;

  if (!explorations) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      explorations,
      revalidate: REVALIDATE_TIME,
    },
  };
};

export default ExplorationsPage;
