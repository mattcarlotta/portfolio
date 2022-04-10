import Head from 'next/head'
import Flex from '~components/Layout/Flex'
import Panel from '~components/Layout/Panel'
import PanelTitle from '~components/Layout/PanelTitle'
import Project from '~components/Layout/Project'
import GoBack from '~components/Navigation/GoBack'
import { GiExplodingPlanet } from '~icons'

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>Page Not Found | Matt Carlotta</title>
      </Head>
      <Project data-testid="not-found-page">
        <PanelTitle id="file-not-found" data-testid="panel-title">
          file not found
        </PanelTitle>
        <Panel>
          <Flex justify="center" height="700px" direction="column">
            <GiExplodingPlanet style={{ fontSize: 250, marginBottom: 40 }} />
            <div className="py-2.5 px-5 tracking-wide">
              Unable to locate the requested file.
            </div>
          </Flex>
        </Panel>
      </Project>
      <GoBack href="/" title="home" />
    </>
  )
}
