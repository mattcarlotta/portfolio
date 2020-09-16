import Page from "~components/Layout/Page";
import { FC } from "~types";

const NextJSSSRKit: FC = (): JSX.Element => (
  <Page
    description=" A fully-loaded custom NextJS boilerplate for server-side solutions. This website and several projects were built using this boilerplate!"
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
        src: "nextssrkitPreview",
        alt: "next-ssr-kit-preview",
        title: "Logo",
      },
    ]}
    tech={[
      "Cypress",
      "Enzyme",
      "Eslint",
      "Github Actions",
      "Jest",
      "MongoDB",
      "NextJS",
      "ReactJS (w/ReduxJS + Redux Saga)",
      "Styled-components",
      "Stylelint",
      "Typescript",
    ]}
  />
);

export default NextJSSSRKit;
