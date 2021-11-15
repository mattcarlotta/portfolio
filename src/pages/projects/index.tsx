import { Fragment } from "react";
import CardPreview from "~components/Layout/CardPreview";
import Apps from "~components/Layout/Apps";
import Category from "~components/Layout/Category";
import Flex from "~components/Layout/Flex";
import Head from "~components/Navigation/Header";
import { ReactElement } from "~types";

const Projects = (): ReactElement => (
  <Fragment>
    <Head description="A collection of personal and professional projects that I've created over the years" />
    <Category data-testid="category">projects</Category>
    <Flex
      data-testid="projects-page"
      justify="center"
      flexwrap
      margin="0 0 200px 0"
    >
      {Apps.map(({ head, filedetails, preview }, index) => (
        <CardPreview
          key={head.title}
          idx={index}
          href="projects"
          {...head}
          {...preview}
          {...filedetails}
        />
      ))}
    </Flex>
  </Fragment>
);

export default Projects;
