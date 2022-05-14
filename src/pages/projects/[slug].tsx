import clsx from 'clsx'
import ContentfulRichText from '~components/Layout/ContentfulRichText'
import DetailHeadline from '~components/Layout/DetailHeadline'
import FileDetails from '~components/Layout/FileDetails'
import GalleryView from '~components/Layout/GalleryView'
import Panel from '~components/Layout/Panel'
import PanelTitle from '~components/Layout/PanelTitle'
import Project from '~components/Layout/Project'
import GoBack from '~components/Navigation/GoBack'
import Head from '~components/Navigation/Header'
import { IoPlanet } from '~icons'
import type { CONTENTFUL_PROJECTS_PAGE, ContextParams } from '~types'
import { getAllProjects, getProjectBySlug } from '~utils/contentfulApi'
import REVALIDATE_TIME from '~utils/revalidate'

export default function ProjectPageComponent({
  project
}: {
  project: CONTENTFUL_PROJECTS_PAGE
}) {
  return (
    <>
      <Head title={project.title} description={project.seoDescription} />
      <Project>
        <PanelTitle id="title" data-testid="panel-title">
          {project.title}
        </PanelTitle>
        <Panel>
          <div className="py-2.5 px-5 tracking-wide">
            <section>
              <DetailHeadline id="details">Details:</DetailHeadline>
              <FileDetails fileName={project.title} {...project} />
            </section>
            <section>
              <DetailHeadline id="description">Description:</DetailHeadline>
              <div
                className="mt-2 px-4 font-plain text-xl tracking-wide"
                data-testid="brief"
              >
                <ContentfulRichText json={project.description.json} />
              </div>
            </section>
            <section>
              <DetailHeadline id="tech">Tech Specs:</DetailHeadline>
              <ul data-testid="tech-list" className="list-none p-2">
                {project.tech.map((item, idx) => (
                  <li
                    className={clsx(
                      'px-2 font-plain text-xl',
                      idx % 2 ? 'bg-primary-900' : 'bg-transparent'
                    )}
                    key={item}
                  >
                    <IoPlanet className="mr-3 align-middle" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            {project.snapshotsCollection.items.length > 0 ? (
              <GalleryView snapshots={project.snapshotsCollection!.items} />
            ) : null}
          </div>
        </Panel>
      </Project>
      <GoBack href="/projects" title="projects" />
    </>
  )
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
      project
    },
    revalidate: REVALIDATE_TIME
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
