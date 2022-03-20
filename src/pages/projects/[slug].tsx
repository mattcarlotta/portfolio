import ProjectPage from "~components/Layout/ProjectPage";
import { getAllProjects, getProjectBySlug } from "~utils/contentfulApi";
import { REVALIDATE_TIME } from "~utils/revalidate";
import type {
  CONTENTFUL_PROJECTS_PAGE,
  GetStaticPaths,
  GetStaticProps,
  ReactElement,
} from "~types";

const ProjectPageComponent = ({
  project,
}: {
  project: CONTENTFUL_PROJECTS_PAGE;
}): ReactElement => <ProjectPage {...project} />;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const res = await getProjectBySlug(slug);

  const project: CONTENTFUL_PROJECTS_PAGE =
    res.data?.projectsCollection?.items?.[0];

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
      revalidate: REVALIDATE_TIME,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getAllProjects();

  const projects: Array<CONTENTFUL_PROJECTS_PAGE> =
    res.data?.projectsCollection?.items;

  return {
    paths: projects.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: "blocking",
  };
};

export default ProjectPageComponent;
