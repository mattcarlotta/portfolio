import CardPreview from '~components/Layout/CardPreview'
import Section from '~components/Layout/Section'
import Head from '~components/Navigation/Header'
import ProjectsIcon from '~icons/ProjectsIcon'
import type { CONTENTFUL_PROJECTS_PAGE, InferNextProps } from '~types'
import { getAllProjects } from '~utils/contentfulApi'
import REVALIDATE_TIME from '~utils/revalidate'

export async function getStaticProps() {
  const res = await getAllProjects()

  const projects: Array<CONTENTFUL_PROJECTS_PAGE> =
    res.data?.projectsCollection?.items

  if (!projects) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      projects
    },
    revalidate: REVALIDATE_TIME
  }
}

export default function Projects({
  projects
}: InferNextProps<typeof getStaticProps>) {
  return (
    <>
      <Head description="A collection of personal and professional projects that I've created over the years" />
      <Section>
        <h1
          className="break-words font-stylized text-2xl leading-none md:text-3xl"
          data-testid="category"
        >
          <ProjectsIcon className="mb-2 mr-2.5 text-3xl sm:mb-0" />
          projects
        </h1>
        <p className="mx-auto mt-2 max-w-xl p-2 font-plain text-lg text-primary-25">
          A collection of works that vary from fullstack web applications, to
          custom NPM packages, to standalone Mac OS and Linux applications.
        </p>
      </Section>
      <section
        className="mb-64 mt-20 flex flex-wrap items-center justify-center"
        data-testid="projects-page"
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
      </section>
    </>
  )
}
