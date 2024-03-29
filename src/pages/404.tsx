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
        <title>File Not Found | Matt Carlotta</title>
      </Head>
      <Project dataTestId="not-found-page">
        <PanelTitle id="file-not-found" data-testid="panel-title">
          file not found
        </PanelTitle>
        <Panel>
          <div className="flex h-[44rem] flex-col items-center justify-center">
            <NotFoundIcon className="mb-10 text-ginormous" />
            <div className="py-2.5 px-5 tracking-wide">
              Unable to locate the requested file.
            </div>
          </div>
        </Panel>
      </Project>
      <GoBack href="/" title="home" />
    </>
  )
}
