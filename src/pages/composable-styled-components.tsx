import Page from "~components/Layout/Page";
import OutsideLink from "~components/Navigation/OutsideLink";
import { FC } from "~types";

const ComposableStyledComponents: FC = (): JSX.Element => (
  <Page
    description={
      <>
        A lightweight composable npm package for&nbsp;
        <OutsideLink
          aria-label="Navigate to styled-components home page"
          href="https://styled-components.com/"
          style={{ padding: 0 }}
        >
          styled-components
        </OutsideLink>
        . The package is created using a custom RollupJS configuration, is
        backed by 100% test coverage and is published to&nbsp;
        <OutsideLink
          aria-label="Navigate to npm composable-styled-components package page"
          href="https://www.npmjs.com/package/composable-styled-components"
          style={{ padding: 0 }}
        >
          npm
        </OutsideLink>
        . Meanwhile, the documentation website is built in Typescript, optimized
        for SEO with&nbsp;
        <OutsideLink
          aria-label="Navigate to Algolia home page"
          href="https://www.algolia.com"
          style={{ padding: 0 }}
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
      active: true,
      location: "https://composable.mattcarlotta.sh",
      status: "In Orbit",
      source: "https://github.com/mattcarlotta/composable-styled-components",
    }}
    snapshotdirectory="composable"
    snapshots={[
      {
        src: "composableHome",
        alt: "home-preview",
        title: "Home",
      },
      {
        src: "composableAPI",
        alt: "api-preview",
        title: "API",
      },
      {
        src: "composableDemos",
        alt: "demo-preview",
        title: "Demos",
      },
      {
        src: "composableReleases",
        alt: "releases-preview",
        title: "Releases",
      },
      {
        src: "composableSearch",
        alt: "search-preview",
        title: "Search",
      },
    ]}
    tech={[
      "Babel",
      "Cypress",
      "Enzyme",
      "Jest",
      "ReactJS",
      "Typescript (website)",
      "NextJS",
      "NPM",
      "Rollup",
      "Webpack",
    ]}
  />
);

export default ComposableStyledComponents;
