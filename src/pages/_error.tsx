import Head from 'next/head'
import Panel from '~components/Layout/Panel'
import PanelTitle from '~components/Layout/PanelTitle'
import Project from '~components/Layout/Project'
import GoBack from '~components/Navigation/GoBack'
import NotFoundIcon from '~icons/NotfoundIcon'

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>Server Error | Matt Carlotta</title>
      </Head>
      <Project dataTestId="server-error-page">
        <PanelTitle id="internal-server-error" data-testid="panel-title">
          internal server error
        </PanelTitle>
        <Panel>
          <div className="flex h-[44rem] flex-col items-center justify-center">
            <NotFoundIcon className="mb-10 text-ginormous" />
            <div className="py-2.5 px-5 tracking-wide">
              The server ran into an issue. Please wait a few minutes and
              refresh the page.
            </div>
          </div>
        </Panel>
      </Project>
      <GoBack href="/" title="home" />
    </>
  )
}
