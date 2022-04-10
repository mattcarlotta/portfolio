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
        <title>Server Error | Matt Carlotta</title>
      </Head>
      <Project data-testid="server-error-page">
        <PanelTitle id="internal-server-error" data-testid="panel-title">
          internal server error
        </PanelTitle>
        <Panel>
          <Flex justify="center" height="700px" direction="column">
            <GiExplodingPlanet style={{ fontSize: 250, marginBottom: 40 }} />
            <div className="py-2.5 px-5 tracking-wide">
              The server ran into an issue. Please wait a few minutes and
              refresh the page.
            </div>
          </Flex>
        </Panel>
      </Project>
      <GoBack href="/" title="home" />
    </>
  )
}
