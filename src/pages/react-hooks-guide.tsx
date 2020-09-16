import Page from "~components/Layout/Page";
import { FC } from "~types";

const ReactHooksGuide: FC = (): JSX.Element => (
  <Page
    description="An educational website to help up-and-coming developers understand React’s newly introduced hooks. The entire website was built using hooks and provides: Interactive hook examples with example code and in-depth hook descriptions and usage cases. Designed for both mobile to desktop screen sizes, and has a light and dark theme."
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
        src: "reacthooksHome",
        alt: "home-preview",
        title: "Home",
      },
      {
        src: "reacthooksAPI",
        alt: "api-preview",
        title: "API",
      },
      {
        src: "reacthooksExamples",
        alt: "examples-preview",
        title: "Examples",
      },
      {
        src: "reacthooksMobile",
        alt: "mobile-preview",
        title: "Mobile Screen",
      },
      {
        src: "reacthooksPad",
        alt: "pad-preview",
        title: "Pad Screen",
      },
    ]}
    tech={[
      "Create React App",
      "Codesandbox",
      "ExpressJS",
      "ReactJS",
      "Nginx",
      "Styled-components (with theming)",
      "Webpack",
    ]}
  />
);

export default ReactHooksGuide;
