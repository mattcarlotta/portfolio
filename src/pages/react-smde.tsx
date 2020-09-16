import Page from "~components/Layout/Page";
import { FC } from "~types";

const ReactSMDE: FC = (): JSX.Element => (
  <Page
    description="A lightweight Simple Markdown Editor (SMDE) npm package for React."
    head={{
      title: "React SMDE",
      url: "/react-smde",
      description: "A lightweight, simple, markdown editor for React.",
    }}
    filedetails={{
      active: true,
      status: "In Orbit",
      location: "https://mattcarlotta.github.io/react-smde",
      source: "https://github.com/mattcarlotta/react-smde",
    }}
    snapshotdirectory="reactsmde"
    snapshots={[
      {
        src: "reactsmdeCode",
        alt: "example-code-preview",
        title: "Ex. Syntax Code",
      },
      {
        src: "reactsmdeCodePreview",
        alt: "example-code-syntax-preview",
        title: "Ex. Syntax Code Preview",
      },
      {
        src: "reactsmdeSource",
        alt: "example-code-source-preview",
        title: "Ex. Syntax Code Source",
      },
    ]}
    tech={[
      "Enzyme",
      "Eslint",
      "Github Actions",
      "Jest",
      "Material-ui",
      "ReactJS",
      "RollupJS",
      "Styled-components",
      "StorybookJS",
    ]}
  />
);

export default ReactSMDE;
