import Head from 'next/head'
import Flex from '~components/Layout/Flex'
import Panel from '~components/Layout/Panel'
import PanelTitle from '~components/Layout/PanelTitle'
import Project from '~components/Layout/Project'
import Text from '~components/Layout/Text'
import GoBack from '~components/Navigation/GoBack'
import { GiExplodingPlanet } from '~icons'
import type { ReactElement } from '~types'

const NotFound = (): ReactElement => (
  <>
    <Head>
      <title>Page Not Found | Matt Carlotta</title>
    </Head>
    <Project data-testid="not-found-page">
      <PanelTitle data-testid="panel-title">file not found</PanelTitle>
      <Panel>
        <Flex justify="center" height="700px" direction="column">
          <GiExplodingPlanet style={{ fontSize: 250, marginBottom: 40 }} />
          <Text>Unable to locate the requested file.</Text>
        </Flex>
      </Panel>
    </Project>
    <GoBack href="/" title="home" />
  </>
)

export default NotFound
