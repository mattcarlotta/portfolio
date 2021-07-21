import { Fragment } from "react";
import CardPreview from "~components/Layout/CardPreview";
import Category from "~components/Layout/Category";
import Explorations from "~components/Layout/Explorations";
import Flex from "~components/Layout/Flex";
import Head from "~components/Navigation/Header";
import { ReactElement } from "~types";

const ExplorationsPage = (): ReactElement => (
  <Fragment>
    <Head title="Explorations" url="/" />
    <Category data-testid="category">explorations</Category>
    <Flex
      data-testid="home-page"
      justify="center"
      flexwrap
      margin="0 0 200px 0"
    >
      {Explorations.map(({ title, href, ...rest }, index) => (
        <CardPreview
          active
          {...rest}
          key={title}
          idx={index}
          location={`https://${href}.csb.app`}
          href="explorations"
          source={`https://codesandbox.io/s/${href}`}
          status="In Orbit"
          title={title}
          url={`/${href}`}
        />
      ))}
    </Flex>
  </Fragment>
);

export default ExplorationsPage;
