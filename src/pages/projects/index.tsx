import { Fragment } from "react";
import CardPreview from "~components/Layout/CardPreview";
import Category from "~components/Layout/Category";
import Flex from "~components/Layout/Flex";
import Head from "~components/Navigation/Header";
import { getAllProjects } from "~utils/contentfulApi";
import { REVALIDATE_TIME } from "~utils/revalidate";
import type {
  CONTENTFUL_PROJECTS_PAGE,
  GetStaticProps,
  ReactElement,
} from "~types";

const Projects = ({
  projects,
}: {
  projects: Array<CONTENTFUL_PROJECTS_PAGE>;
}): ReactElement => (
  <Fragment>
    <Head description="A collection of personal and professional projects that I've created over the years" />
    <Category data-testid="category">projects</Category>
    <Flex
      data-testid="projects-page"
      justify="center"
      flexwrap
      margin="0 0 200px 0"
    >
      {projects.map(({ sys, preview, seoDescription, ...rest }, index) => (
        <CardPreview
          {...preview}
          {...rest}
          ariaLabel={`Navigate to my ${rest.title} project page`}
          description={seoDescription}
          key={sys.id}
          idx={index}
          href="projects"
        />
      ))}
    </Flex>
  </Fragment>
);

export const getStaticProps: GetStaticProps = async () => {
  const res = await getAllProjects();

  const projects = res.data?.projectsCollection?.items;

  if (!projects) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      projects,
      revalidate: REVALIDATE_TIME,
    },
  };
};

export default Projects;
