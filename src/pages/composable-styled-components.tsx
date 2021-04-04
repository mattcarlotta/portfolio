import * as React from "react";
import Page from "~components/Layout/Page";
import OutsideLink from "~components/Navigation/OutsideLink";
import { NextPage } from "~types";

const ComposableStyledComponents: NextPage = () => (
  <Page
    description={
      <>
        a lightweight composable npm package for&nbsp;
        <OutsideLink
          ariaLabel="Navigate to styled-components home page"
          href="https://styled-components.com/"
          padding="0"
        >
          styled-components
        </OutsideLink>
        . the package is created using a custom rollupjs configuration, is
        backed by 100% test coverage and is published to&nbsp;
        <OutsideLink
          ariaLabel="Navigate to npm composable-styled-components package page"
          href="https://www.npmjs.com/package/composable-styled-components"
          padding="0"
        >
          npm
        </OutsideLink>
        . meanwhile, the documentation website is built in typescript, optimized
        for seo with&nbsp;
        <OutsideLink
          ariaLabel="Navigate to Algolia home page"
          href="https://www.algolia.com"
          padding="0"
        >
          algolia
        </OutsideLink>
        &nbsp;search engine crawler integration, and utilizes the
        composable-styled-components package to construct reusable components.
      </>
    }
    head={{
      title: "Composable Styled Components",
      url: "/composable-styled-components",
      description: "A lightweight composable solution for styled-components.",
    }}
    filedetails={{
      active: true,
      location: "https://composable.mattcarlotta.sh",
      status: "In Orbit",
      source: "https://github.com/mattcarlotta/composable-styled-components",
    }}
    snapshotdirectory="composable"
    snapshots={[
      {
        src: "composableAPI",
        alt: "api-preview",
        title: "api",
      },
      {
        src: "composableDemos",
        alt: "demo-preview",
        title: "demos",
      },
      {
        src: "composableHome",
        alt: "home-preview",
        title: "home",
      },
      {
        src: "composableReleases",
        alt: "releases-preview",
        title: "releases",
      },
      {
        src: "composableSearch",
        alt: "search-preview",
        title: "search",
      },
    ]}
    tech={[
      "babel",
      "cypress",
      "enzyme",
      "jest",
      "reactjs",
      "typescript (website)",
      "nextjs",
      "npmM",
      "rollupjs",
      "Webpack",
    ]}
  />
);

export default ComposableStyledComponents;
