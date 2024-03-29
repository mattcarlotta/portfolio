import DetailHeadline from '~components/Layout/DetailHeadline'
import FileDetails from '~components/Layout/FileDetails'
import Panel from '~components/Layout/Panel'
import PanelTitle from '~components/Layout/PanelTitle'
import Project from '~components/Layout/Project'
import GoBack from '~components/Navigation/GoBack'
import Head from '~components/Navigation/Header'
import type {
  CONTENTFUL_EXPLORATIONS_PAGE,
  ContextParams,
  InferNextProps
} from '~types'
import { getAllExplorations, getExplorationBySlug } from '~utils/contentfulApi'
import REVALIDATE_TIME from '~utils/revalidate'

export async function getStaticProps({ params }: ContextParams) {
  const slug = params?.slug as string
  const res = await getExplorationBySlug(slug)

  const exploration: CONTENTFUL_EXPLORATIONS_PAGE =
    res.data?.explorationsCollection?.items?.[0]

  if (!exploration) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      exploration
    },
    revalidate: REVALIDATE_TIME
  }
}

export async function getStaticPaths() {
  const res = await getAllExplorations()

  const explorations: Array<CONTENTFUL_EXPLORATIONS_PAGE> =
    res.data?.explorationsCollection?.items

  return {
    paths: explorations.map(({ slug }) => ({
      params: { slug }
    })),
    fallback: 'blocking'
  }
}

export default function ExplorationsPage({
  exploration
}: InferNextProps<typeof getStaticProps>) {
  return (
    <>
      <Head
        type="article"
        title={exploration.title}
        description={exploration.preview.description}
      />
      <Project>
        <PanelTitle id="exploration-title" data-testid="panel-title">
          {exploration.title}
        </PanelTitle>
        <Panel>
          <div className="py-2.5 px-5 tracking-wide">
            <DetailHeadline id="details">Details:</DetailHeadline>
            <section>
              <FileDetails
                active
                location={`https://${exploration.sandboxId}.csb.app/`}
                source={`https://codesandbox.io/s/${exploration.sandboxId}`}
                status="In Orbit"
              />
            </section>
            <section>
              <DetailHeadline id="description">Description:</DetailHeadline>
              <div
                className="mt-2 px-4 font-plain text-xl tracking-wide"
                data-testid="exploration-description"
              >
                {exploration.preview.description}
              </div>
            </section>
            <section>
              <DetailHeadline id="playground">Playground:</DetailHeadline>
              <div className="my-5 px-2.5 font-plain">
                <iframe
                  src={`https://codesandbox.io/embed/${exploration.sandboxId}?codemirror=1&fontsize=14&hidenavigation=1&view=preview&hidedevtools=1&theme=dark`}
                  title={exploration.title}
                  className="h-[31.25rem] w-full overflow-hidden rounded border-0"
                  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                />
              </div>
            </section>
          </div>
        </Panel>
      </Project>
      <GoBack href="/explorations" title="Explorations" />
    </>
  )
}
