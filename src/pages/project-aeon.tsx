import Page from "~components/Layout/Page";
import { FC } from "~types";

const ProjectAeon: FC = (): JSX.Element => (
  <Page
    description="Work in progress: An application to ask and/or review web development code that utilizes integrated tools to run and share them. The aim of this project is to integrate development tools like: Babel REPL/Codesandbox/Codepen/JS Fiddle/Typescript playground (and so on) into a central hub for teams or individuals to share their code quickly and effectively. In addition, the website will be optimized for SEO and will prioritize questions and answers by user up/down votes. Open to the public, open source, and free to use."
    head={{
      title: "Project Aeon",
      url: "/project-aeon",
      description:
        "A better app to ask web development questions and use integrated tools to share them.",
    }}
    filedetails={{
      active: true,
      status: "In Development",
      source: "https://github.com/mattcarlotta/project-aeon",
    }}
    snapshotdirectory="projectaeon"
    snapshots={[
      {
        src: "projectaeonAskQuestion",
        alt: "ask-question-preview",
        title: "Ask Question",
      },
      {
        src: "projectaeonQuestion",
        alt: "question-preview",
        title: "Question",
      },
      {
        src: "projectaeonComment",
        alt: "comment-preview",
        title: "Comment",
      },
      {
        src: "projectaeonTags",
        alt: "tags-preview",
        title: "Tags",
      },
      {
        src: "projectaeonProfile",
        alt: "profile-preview",
        title: "Profile",
      },
    ]}
    tech={["PostgreSQL", "ReactJS (w/ReduxJS)", "NextJS", "NodeJS", "Nginx"]}
  />
);

export default ProjectAeon;
