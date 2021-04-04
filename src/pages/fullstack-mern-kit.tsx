import * as React from "react";
import Page from "~components/Layout/Page";
import Link from "~components/Navigation/Link";
import { NextPage } from "~types";

const FullstackMERNKit: NextPage = () => (
  <Page
    description={
      <>
        a fully-loaded custom boilerplate using mongodb, express, react/redux
        and node for client-side solutions. this website and several projects
        were once built using this boilerplate, but have since been archived in
        favor of the&nbsp;
        <Link
          ariaLabel="Navigate to the Next SSR Kit project page."
          dataTestId="nextjs-ssr-link"
          href="/nextjs-ssr-kit"
          padding="0"
          showUnderline
        >
          nextjs ssr kit
        </Link>
        .
      </>
    }
    head={{
      title: "fullstack m.e.r.n kit",
      url: "/fullstack-mern-kit",
      description:
        "A fully-loaded custom boilerplate using MongoDB, Express, React/Redux and Node for client-side solutions.",
    }}
    filedetails={{
      active: true,
      status: "Archived",
      source: "https://github.com/mattcarlotta/fullstack-mern-kit",
    }}
    snapshotdirectory="mernkit"
    snapshots={[
      {
        src: "mernkitPreview",
        alt: "mernkit-preview",
        title: "logo",
      },
    ]}
    tech={["mongdb", "expressjs", "reactjs", "nodejs"]}
  />
);

export default FullstackMERNKit;
