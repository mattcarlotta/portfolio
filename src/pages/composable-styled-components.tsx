import * as React from "react";
import Page from "~components/Layout/Page";
import OutsideLink from "~components/Navigation/OutsideLink";
import { ReactElement } from "~types";

const ComposableStyledComponents = (): ReactElement => (
  <Page
    description={
      <>
        A lightweight composable npm package for&nbsp;
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
        . Meanwhile, the documentation website is built in Typescript, optimized
        for SEO with&nbsp;
        <OutsideLink
          ariaLabel="Navigate to Algolia home page"
          href="https://www.algolia.com"
          padding="0"
        >
          Algolia
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
      active: false,
      location: "https://composable.mattcarlotta.sh",
      status: "Decommissioned",
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
