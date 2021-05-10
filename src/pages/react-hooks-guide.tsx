import Page from "~components/Layout/Page";
import { ReactElement } from "~types";

const ReactHooksGuide = (): ReactElement => (
  <Page
    description="An educational website to help up-and-coming developers understand React’s newly introduced hooks. The entire website was built using hooks and provides: interactive hook examples with example code and in-depth hook descriptions and usage cases. Designed for both mobile to desktop screen sizes, and has a light and dark theme."
    head={{
      title: "React Hooks Guide",
      url: "/react-hooks-guide",
      description:
        "An educational website to help up-and-coming developers understand React’s newly introduced hooks.",
    }}
    filedetails={{
      active: false,
      status: "Decommissioned",
      source: "https://github.com/mattcarlotta/react-hooks",
    }}
    snapshotdirectory="reacthooks"
    snapshots={[
      {
        src: "reacthooksAPI",
        alt: "api-preview",
        title: "api",
      },
      {
        src: "reacthooksExamples",
        alt: "examples-preview",
        title: "examples",
      },
      {
        src: "reacthooksHome",
        alt: "home-preview",
        title: "home",
      },
      {
        src: "reacthooksMobile",
        alt: "mobile-preview",
        title: "mobile layout",
      },
      {
        src: "reacthooksPad",
        alt: "pad-preview",
        title: "ipad layout",
      },
    ]}
    tech={[
      "create react app",
      "codesandbox",
      "expressjs",
      "reactjs",
      "nginx",
      "styled-components (with theming)",
      "webpack",
    ]}
  />
);

export default ReactHooksGuide;
