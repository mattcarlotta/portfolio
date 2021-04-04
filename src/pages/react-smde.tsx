import * as React from "react";
import Page from "~components/Layout/Page";
import { NextPage } from "~types";

const ReactSMDE: NextPage = () => (
  <Page
    description="a lightweight simple markdown editor (smde) npm package for react."
    head={{
      title: "react smde",
      url: "/react-smde",
      description: "A lightweight, simple, markdown editor for React.",
    }}
    filedetails={{
      active: false,
      status: "Decommissioned",
      location: "https://mattcarlotta.github.io/react-smde",
      source: "https://github.com/mattcarlotta/react-smde",
    }}
    snapshotdirectory="reactsmde"
    snapshots={[
      {
        src: "reactsmdeCode",
        alt: "example-code-preview",
        title: "ex. code",
      },
      {
        src: "reactsmdeCodePreview",
        alt: "example-code-syntax-preview",
        title: "ex. code preview",
      },
      {
        src: "reactsmdeSource",
        alt: "example-code-source-preview",
        title: "ex. code source",
      },
    ]}
    tech={[
      "enzyme",
      "eslint",
      "github actions",
      "jest",
      "material-ui",
      "reactjs",
      "rollupjs",
      "styled-components",
      "storybookjs",
    ]}
  />
);

export default ReactSMDE;
