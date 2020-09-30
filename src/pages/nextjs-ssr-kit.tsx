import Page from "~components/Layout/Page";
import { FC } from "~types";

const NextJSSSRKit: FC = (): JSX.Element => (
  <Page
    description=" A fully-loaded, built from the ground up, NextJS boilerplate for server-side solutions. This website and several projects were built using this boilerplate! Sports a custom NextJS config, Emotion SSR integration, custom Jest and Cypress testing suites, implements Github Actions for CI, and it even has an interactive API example using MongoDB."
    head={{
      title: "NextJS SSR Kit",
      url: "/nextjs-ssr-kit",
      description:
        "A fully-loaded custom NextJS boilerplate for server-side solutions.",
    }}
    filedetails={{
      active: true,
      status: "In Orbit",
      source: "https://github.com/mattcarlotta/nextjs-ssr-kit",
    }}
    snapshotdirectory="nextssrkit"
    snapshots={[
      {
        src: "nextssrkitHome",
        alt: "next-ssr-kit-home-preview",
        title: "Home",
      },
      {
        src: "nextssrkitExampleAPI",
        alt: "next-ssr-kit-example-preview",
        title: "Ex. API",
      },
      {
        src: "nextssrkitExampleAPICreate",
        alt: "next-ssr-kit-example-create-preview",
        title: "Ex. API Create",
      },
      {
        src: "nextssrkitExampleAPIEdit",
        alt: "next-ssr-kit-example-create-preview",
        title: "Ex. API Edit",
      },
    ]}
    tech={[
      "Cypress",
      "Emotion",
      "Enzyme",
      "Eslint",
      "Github Actions",
      "Jest",
      "MongoDB",
      "NextJS",
      "ReactJS (w/ReduxJS + Redux Saga)",
      "Stylelint",
      "Typescript",
    ]}
  />
);

export default NextJSSSRKit;
