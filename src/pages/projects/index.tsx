import CardPreview from '~components/Layout/CardPreview'
import Section from '~components/Layout/Section'
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
      <Section>
        <h1
          className="font-stylized text-2xl leading-none md:text-3xl"
          data-testid="category"
        >
          <IoPlanet className="mr-2.5 text-3xl" />
          projects
        </h1>
        <p className="mx-auto mt-2 max-w-xl p-2 font-plain text-lg text-primary-25">
          A collection of works that vary from fullstack web applications, to
          custom NPM packages, to standalone Mac OS and Linux applications.
        </p>
      </Section>
      <div
        className="mb-20 flex flex-wrap items-center justify-center"
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
      </div>
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
