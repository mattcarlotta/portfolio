import CardPreview from "~components/Layout/CardPreview";
import Category from "~components/Layout/Category";
import Flex from "~components/Layout/Flex";
import Head from "~components/Navigation/Header";
import { IoPlanet } from "~icons";
import { getAllProjects } from "~utils/contentfulApi";
import REVALIDATE_TIME from "~utils/revalidate";
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
  <>
    <Head description="A collection of personal and professional projects that I've created over the years" />
    <Category data-testid="category">
      <IoPlanet style={{ fontSize: 26, marginRight: 10 }} />
      projects
    </Category>
    <Flex
      data-testid="projects-page"
      justify="center"
      flexwrap
      margin="0 0 200px 0"
    >
      {projects.map(({ sys, preview, seoDescription, ...rest }) => (
        <CardPreview
          {...preview}
          {...rest}
          ariaLabel={`Navigate to my ${rest.title} project page`}
          description={seoDescription}
          key={sys.id}
          href="projects"
          alt={preview.description}
        />
      ))}
    </Flex>
  </>
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
