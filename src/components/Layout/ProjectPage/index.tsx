import { css } from '@emotion/react'
import ContentfulRichText from '~components/Layout/ContentfulRichText'
import DetailHeadline from '~components/Layout/DetailHeadline'
import ModalDialog from '~components/Layout/ModalDialog'
import Panel from '~components/Layout/Panel'
import Project from '~components/Layout/Project'
import FileDetails from '~components/Layout/FileDetails'
import SubTitle from '~components/Layout/SubTitle'
import Text from '~components/Layout/Text'
import PanelTitle from '~components/Layout/PanelTitle'
import GoBack from '~components/Navigation/GoBack'
import Head from '~components/Navigation/Header'
import { IoPlanet } from '~icons'
import type { CONTENTFUL_PROJECTS_PAGE, ReactElement } from '~types'

const ProjectPage = ({
  title,
  seoDescription,
  description,
  snapshotsCollection,
  tech,
  ...rest
}: CONTENTFUL_PROJECTS_PAGE): ReactElement => (
  <>
    <Head title={title} description={seoDescription} />
    <Project>
      <header>
        <PanelTitle as="h2" id="title" data-testid="panel-title">
          {title}
        </PanelTitle>
      </header>
      <Panel>
        <Text>
          <section>
            <header>
              <DetailHeadline id="details">Details:</DetailHeadline>
            </header>
            <FileDetails fileName={title} {...rest} />
          </section>
          <section>
            <header>
              <DetailHeadline id="description">Description:</DetailHeadline>
            </header>
            <SubTitle data-testid="description">
              <ContentfulRichText json={description.json} />
            </SubTitle>
          </section>
          <section>
            <header>
              <DetailHeadline id="tech">Tech Specs:</DetailHeadline>
            </header>
            <ul
              data-testid="tech"
              css={css`
                list-style-type: none;
                padding: 0 20px;
              `}
            >
              {tech.map((item, idx) => (
                <li
                  css={css`
                    font-size: 20px;
                    font-family: 'Mukta', -apple-system, BlinkMacSystemFont,
                      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans',
                      'Droid Sans', 'Helvetica Neue', sans-serif;
                    background: ${idx % 2 ? '#001031' : 'transparent'};
                  `}
                  key={item}
                >
                  <IoPlanet
                    style={{
                      position: 'relative',
                      top: 3,
                      marginRight: 10,
                      fontSize: 15
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>
          {snapshotsCollection.items.length > 0 ? (
            <ModalDialog snapshots={snapshotsCollection!.items} />
          ) : null}
        </Text>
      </Panel>
    </Project>
    <GoBack href="/projects" title="projects" />
  </>
)

export default ProjectPage
