import DetailHeadline from '~components/Layout/DetailHeadline'
import FileDetails from '~components/Layout/FileDetails'
import Panel from '~components/Layout/Panel'
import PanelTitle from '~components/Layout/PanelTitle'
import Project from '~components/Layout/Project'
import SubTitle from '~components/Layout/SubTitle'
import Text from '~components/Layout/Text'
import GoBack from '~components/Navigation/GoBack'
import Head from '~components/Navigation/Header'
import type { CONTENTFUL_EXPLORATIONS_PAGE, ContextParams } from '~types'
import { getAllExplorations, getExplorationBySlug } from '~utils/contentfulApi'
import REVALIDATE_TIME from '~utils/revalidate'

export default function ExplorationsPage({
  exploration
}: {
  exploration: CONTENTFUL_EXPLORATIONS_PAGE
}) {
  return (
    <>
      <Head
        title={exploration.title}
        description={exploration.preview.description}
      />
      <Project>
        <PanelTitle id="exploration-title" data-testid="panel-title">
          {exploration.title}
        </PanelTitle>
        <Panel>
          <Text>
            <DetailHeadline id="details">Details:</DetailHeadline>
            <section>
              <FileDetails
                active
                location={`https://${exploration.sandboxId}.csb.app/`}
                fileName={exploration.title}
                source={`https://codesandbox.io/s/${exploration.sandboxId}`}
                status="In Orbit"
              />
            </section>
            <section>
              <DetailHeadline id="description">Description:</DetailHeadline>
              <SubTitle style={{ marginTop: 20 }} data-testid="description">
                {exploration.preview.description}
              </SubTitle>
            </section>
            <section>
              <DetailHeadline id="playground">Playground:</DetailHeadline>
              <SubTitle style={{ margin: '20px 0', padding: '0 10px' }}>
                <iframe
                  src={`https://codesandbox.io/embed/${exploration.sandboxId}?codemirror=1&fontsize=14&hidenavigation=1&view=preview&hidedevtools=1&theme=dark`}
                  title={exploration.title}
                  style={{
                    width: '100%',
                    height: '500px',
                    border: 0,
                    borderRadius: 4,
                    overflow: 'hidden'
                  }}
                  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                />
              </SubTitle>
            </section>
          </Text>
        </Panel>
      </Project>
      <GoBack href="/explorations" title="Explorations" />
    </>
  )
}

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
      exploration,
      revalidate: REVALIDATE_TIME
    }
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
