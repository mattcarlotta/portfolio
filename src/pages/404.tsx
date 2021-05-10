import Head from "next/head";
import { css } from "@emotion/react";
import Center from "~components/Layout/Center";
import Flex from "~components/Layout/Flex";
import Home from "~components/Navigation/Home";
import { ReactElement } from "~types";

const NotFound = (): ReactElement => (
  <Flex
    data-testid="not-found-page"
    justify="center"
    direction="column"
    height="50vh"
  >
    <Head>
      <title>Not Found - Matt Carlotta</title>
    </Head>
    <Center
      style={{
        border: "1px solid #888",
        background: "rgba(0, 128, 255, 0.8)",
        boxShadow: "0px 0px 26px 0px rgb(0 64 255)",
        borderRadius: 10,
        padding: "20px 40px",
        marginBottom: 20,
      }}
    >
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
          letter-spacing: 2px;
          padding-bottom: 10px;
        `}
      >
        page not found!
      </div>
    </Center>
    <Home />
  </Flex>
);

export default NotFound;
