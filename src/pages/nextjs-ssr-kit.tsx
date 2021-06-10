import * as React from "react";
import Page from "~components/Layout/Page";
import { ReactElement } from "~types";

const NextJSSSRKit = (): ReactElement => (
  <Page
    description="A fully-loaded, built from the ground up, NextJS boilerplate for server-side solutions. This website and several other projects were built using this boilerplate! It sports a custom NextJS configuration, Emotion SSR integration, custom Jest and Cypress testing suites, implements Github Actions for CI, and it even has an interactive API example using MongoDB."
    head={{
      title: "NextJS SSR Kit",
      url: "/nextjs-ssr-kit",
      description:
        "A fully-loaded custom NextJS boilerplate for server-side solutions.",
    }}
    filedetails={{
      active: false,
      status: "Archived",
      source: "https://github.com/mattcarlotta/nextjs-ssr-kit",
    }}
    snapshotdirectory="nextssrkit"
    snapshots={[
      {
        src: "nextssrkitExampleAPI",
        alt: "next-ssr-kit-example-preview",
        title: "ex. api",
      },
      {
        src: "nextssrkitExampleAPICreate",
        alt: "next-ssr-kit-example-create-preview",
        title: "ex. api create",
      },
      {
        src: "nextssrkitExampleAPIEdit",
        alt: "next-ssr-kit-example-create-preview",
        title: "ex. api edit",
      },
      {
        src: "nextssrkitHome",
        alt: "next-ssr-kit-home-preview",
        title: "home",
      },
    ]}
    tech={[
      "cypress",
      "emotion",
      "enzyme",
      "eslint",
      "github actions",
      "jest",
      "mongodb",
      "nextjs",
      "reactjs (w / reduxjs + redux saga)",
      "stylelint",
      "typescript",
    ]}
  />
);

export default NextJSSSRKit;
