import * as React from "react";
import Page from "~components/Layout/Page";
import { NextPage } from "~types";

const ProjectAeon: NextPage = () => (
  <Page
    description="work in progress: an application to ask and/or review web development code that utilizes integrated tools to run and share them. the aim of this project is to integrate development tools like: babel repl/codesandbox/codepen/js fiddle/typescript playground (and so on) into a central hub for teams or individuals to share their code quickly and effectively. In addition, the website will be optimized for SEO and will prioritize questions and answers by user up/down votes. Open to the public, open source, and free to use."
    head={{
      title: "Project Aeon",
      url: "/project-aeon",
      description:
        "A better app to ask web development questions and use integrated tools to share them.",
    }}
    filedetails={{
      active: false,
      status: "Decommissioned",
      source: "https://github.com/mattcarlotta/project-aeon",
    }}
    snapshotdirectory="projectaeon"
    snapshots={[
      {
        src: "projectaeonAskQuestion",
        alt: "ask-question-preview",
        title: "ask Question",
      },
      {
        src: "projectaeonComment",
        alt: "comment-preview",
        title: "comment",
      },
      {
        src: "projectaeonProfile",
        alt: "profile-preview",
        title: "profile",
      },
      {
        src: "projectaeonQuestion",
        alt: "question-preview",
        title: "question",
      },
      {
        src: "projectaeonTags",
        alt: "tags-preview",
        title: "tags",
      },
    ]}
    tech={["postgresql", "reactjs (w / reduxjs)", "nextjs", "nodejs", "nginx"]}
  />
);

export default ProjectAeon;
