import * as React from "react";
import Page from "~components/Layout/Page";
import OutsideLink from "~components/Navigation/OutsideLink";
import { NextPage } from "~types";

const GamersNexus: NextPage = () => (
  <Page
    description={
      <>
        a mock up created in 3 days as a redesign proposal for &nbsp;
        <OutsideLink
          ariaLabel="Navigate to gamersnexus home page"
          href="https://www.gamersnexus.net/"
          padding="0"
        >
          GamersNexus.net
        </OutsideLink>
        .
      </>
    }
    head={{
      title: "GamersNexus Mock Up",
      url: "/gamersnexus",
      description:
        "a mock up created in 3 days as a redesign proposal for GamersNexus.net.",
    }}
    filedetails={{
      active: true,
      location: "https://gamersnexus.mattcarlotta.sh/",
      status: "in orbit",
      source: "https://github.com/mattcarlotta/gamersnexus",
    }}
    snapshotdirectory="gamersnexus"
    snapshots={[
      {
        src: "gamernexusChart",
        alt: "gn-chart-preview",
        title: "chart",
      },
      {
        src: "gamernexusInteractiveChart",
        alt: "gn-ichart-preview",
        title: "chart filtered",
      },
      {
        src: "gamernexusTweet",
        alt: "gn-tweet-preview",
        title: "embeddable tweet",
      },
      {
        src: "gamernexusVideo",
        alt: "gn-video-preview",
        title: "embeddable video",
      },
      {
        src: "gamernexusHome",
        alt: "gn-home-preview",
        title: "home",
      },
      {
        src: "gamernexusNews",
        alt: "gn-news-preview",
        title: "news",
      },
    ]}
    tech={["emotion-styled", "reactjs", "nextjs", "typescript"]}
  />
);

export default GamersNexus;
