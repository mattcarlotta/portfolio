import { Fragment } from "react";
import Head from "next/head";
import Flex from "~components/Layout/Flex";
import Panel from "~components/Layout/Panel";
import PanelTitle from "~components/Layout/PanelTitle";
import Project from "~components/Layout/Project";
import Text from "~components/Layout/Text";
import GoBack from "~components/Navigation/GoBack";
import { GiExplodingPlanet } from "~icons";
import type { ReactElement } from "~types";

const ErrorPage = (): ReactElement => (
  <Fragment>
    <Head>
      <title>Server Error | Matt Carlotta</title>
    </Head>
    <Project data-testid="server-error-page">
      <PanelTitle data-testid="panel-title">internal server error</PanelTitle>
      <Panel>
        <Flex justify="center" height="700px" direction="column">
          <GiExplodingPlanet style={{ fontSize: 250, marginBottom: 40 }} />
          <Text>
            The server ran into an issue. Please wait a few minutes and refresh
            the page.
          </Text>
        </Flex>
      </Panel>
    </Project>
    <GoBack href="/" title="home" />
  </Fragment>
);

export default ErrorPage;
