import Head from "next/head";
import { css } from "@emotion/core";
import Center from "~components/Layout/Center";
import Flex from "~components/Layout/Flex";
import Home from "~components/Navigation/Home";
import { NextPage } from "~types";

const NotFound: NextPage = () => (
  <Flex justify="center" style={{ height: "50vh" }}>
    <Head>
      <title>Server Error - Matt Carlotta</title>
    </Head>
    <Center>
      <div
        css={`
          font-size: 40px;
          margin-bottom: 0;
          padding: 0px;
        `}
      >
        500
      </div>
      <div
        css={`
          font-size: 20px;
          font-weight: bold;
          margin-top: -5px;
          margin-bottom: 20px;
          letter-spacing: 2px;
        `}
      >
        Uh Oh! The server encountered an error!
      </div>
      <Home />
    </Center>
  </Flex>
);

export default NotFound;
