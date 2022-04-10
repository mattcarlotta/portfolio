import CardPreview from '~components/Layout/CardPreview'
import Flex from '~components/Layout/Flex'
import Head from '~components/Navigation/Header'
import { IoPlanet } from '~icons'
import type { CONTENTFUL_PROJECTS_PAGE } from '~types'
import { getAllProjects } from '~utils/contentfulApi'
import REVALIDATE_TIME from '~utils/revalidate'

export default function Projects({
  projects
}: {
  projects: Array<CONTENTFUL_PROJECTS_PAGE>
}) {
  return (
    <>
      <Head description="A collection of personal and professional projects that I've created over the years" />
      <section className="mt-2 mb-10 rounded border border-primary-600 bg-primary-700 p-4">
        <header>
          <h1
            className="text-center font-stylized text-lg leading-none md:text-2xl"
            data-testid="category"
          >
            <IoPlanet className="mr-2.5 text-xl" />
            projects
          </h1>
        </header>
        <p className="mx-auto max-w-lg p-2 text-center font-plain text-primary-25">
          A collection of works that vary from fullstack web applications, to
          custom NPM packages, to standalone Mac OS and Linux applications.
        </p>
      </section>
      <Flex
        className="mb-48 flex flex-wrap items-center justify-center"
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
  )
}

export async function getStaticProps() {
  const res = await getAllProjects()

  const projects = res.data?.projectsCollection?.items

  if (!projects) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      projects,
      revalidate: REVALIDATE_TIME
    }
  }
}
