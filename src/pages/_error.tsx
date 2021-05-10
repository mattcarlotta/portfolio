import Head from "next/head";
import { css } from "@emotion/react";
import Center from "~components/Layout/Center";
import Flex from "~components/Layout/Flex";
import Home from "~components/Navigation/Home";
import { ReactElement } from "~types";

const NotFound = (): ReactElement => (
  <Flex justify="center" height="50vh">
    <Head>
      <title>Server Error - Matt Carlotta</title>
    </Head>
    <Center>
      <div
        css={css`
          font-size: 40px;
          margin-bottom: 0;
          padding: 0px;
        `}
      >
        500
      </div>
      <div
        css={css`
          font-size: 20px;
          font-weight: bold;
          margin-top: -5px;
          margin-bottom: 20px;
          letter-spacing: 2px;
        `}
      >
        uh oh! the server encountered an error!
      </div>
      <Home />
    </Center>
  </Flex>
);

export default NotFound;
