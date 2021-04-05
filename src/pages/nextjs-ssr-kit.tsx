import * as React from "react";
import Page from "~components/Layout/Page";
import { NextPage } from "~types";

const NextJSSSRKit: NextPage = () => (
  <Page
    description="a fully-loaded, built from the ground up, nextjs boilerplate for server-side solutions. this website and several projects were built using this boilerplate! it sports a custom nextjs config, emotion ssr integration, custom jest and cypress testing suites, implements github actions for ci, and it even has an interactive api example using mongodb."
    head={{
      title: "nextjs ssr kit",
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
