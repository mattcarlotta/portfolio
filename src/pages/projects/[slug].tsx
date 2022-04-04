import ProjectPage from '~components/Layout/ProjectPage'
import type { CONTENTFUL_PROJECTS_PAGE, ContextParams } from '~types'
import { getAllProjects, getProjectBySlug } from '~utils/contentfulApi'
import REVALIDATE_TIME from '~utils/revalidate'

export default function ProjectPageComponent({
  project
}: {
  project: CONTENTFUL_PROJECTS_PAGE
}) {
  return <ProjectPage {...project} />
}

export async function getStaticProps({ params }: ContextParams) {
  const slug = params?.slug as string
  const res = await getProjectBySlug(slug)

  const project: CONTENTFUL_PROJECTS_PAGE =
    res.data?.projectsCollection?.items?.[0]

  if (!project) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      project,
      revalidate: REVALIDATE_TIME
    }
  }
}

export async function getStaticPaths() {
  const res = await getAllProjects()

  const projects: Array<CONTENTFUL_PROJECTS_PAGE> =
    res.data?.projectsCollection?.items

  return {
    paths: projects.map(({ slug }) => ({
      params: { slug }
    })),
    fallback: 'blocking'
  }
}
