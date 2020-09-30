import Head from "next/head";
import { css } from "@emotion/core";
import Center from "~components/Layout/Center";
import Flex from "~components/Layout/Flex";
import Home from "~components/Navigation/Home";
import { NextPage } from "~types";

const NotFound: NextPage = () => (
  <Flex
    data-testid="not-found-page"
    justify="center"
    style={{ height: "50vh" }}
  >
    <Head>
      <title>Not Found - Matt Carlotta</title>
    </Head>
    <Center>
      <div
        data-testid="status-code"
        css={css`
          font-size: 40px;
          margin-bottom: 0;
          padding: 0px;
        `}
      >
        404
      </div>
      <div
        data-testid="page-response"
        css={css`
          font-size: 20px;
          font-weight: bold;
          margin-top: -5px;
          margin-bottom: 20px;
          letter-spacing: 2px;
        `}
      >
        Uh Oh! Page not found!
      </div>
      <Home />
    </Center>
  </Flex>
);

export default NotFound;
