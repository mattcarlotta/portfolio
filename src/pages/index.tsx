import { Fragment } from "react";
import CardPreview from "~components/Layout/CardPreview";
import Apps from "~components/Layout/Apps";
import Category from "~components/Layout/Category";
import Explorations from "~components/Layout/Explorations";
import Flex from "~components/Layout/Flex";
import Head from "~components/Navigation/Header";
import { ReactElement } from "~types";

const Home = (): ReactElement => (
  <Fragment>
    <Head title="Home" url="/" description="My personal website." />
    <Category>Applications</Category>
    <Flex
      data-testid="home-page"
      justify="center"
      flexwrap
      margin="0 0 200px 0"
    >
      {Apps.map(({ head, filedetails, preview }, index) => (
        <CardPreview
          key={head.title}
          idx={index}
          href="projects"
          {...head}
          {...preview}
          {...filedetails}
        />
      ))}
    </Flex>
    <Category>Explorations</Category>
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

export default Home;
