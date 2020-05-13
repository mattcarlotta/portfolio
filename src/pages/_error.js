import React from "react";
import Head from "next/head";
import FlexCenter from "~components/Layout/FlexCenter";
import HomeIcon from "~components/Layout/HomeIcon";
import Link from "~components/Navigation/Link";

const NotFound = () => (
  <FlexCenter style={{ height: "90%" }} id="notfound">
    <Head>
      <title>Server Error - NextJS SSR Kit</title>
    </Head>
    <div css="color: #03a9f3;text-align: center;">
      <div css="font-size: 120px;margin-bottom: 0;padding: 0px;">
        <span>500</span>
      </div>
      <div css="font-size: 32px;font-weight: bold;margin-top: -5px;margin-bottom: 20px;letter-spacing: 2px;">
        Uh Oh! The server encountered an error!
      </div>
      <Link href="/">
        {" "}
        <HomeIcon />
        <span>Go Back</span>
      </Link>
    </div>
  </FlexCenter>
);

export default NotFound;
