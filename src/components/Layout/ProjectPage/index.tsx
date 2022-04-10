import { css } from '@emotion/react'
import ContentfulRichText from '~components/Layout/ContentfulRichText'
import DetailHeadline from '~components/Layout/DetailHeadline'
import FileDetails from '~components/Layout/FileDetails'
import ModalDialog from '~components/Layout/ModalDialog'
import Panel from '~components/Layout/Panel'
import PanelTitle from '~components/Layout/PanelTitle'
import Project from '~components/Layout/Project'
import SubTitle from '~components/Layout/SubTitle'
import GoBack from '~components/Navigation/GoBack'
import Head from '~components/Navigation/Header'
import { IoPlanet } from '~icons'
import type { CONTENTFUL_PROJECTS_PAGE } from '~types'

const ProjectPage = ({
  title,
  seoDescription,
  description,
  snapshotsCollection,
  tech,
  ...rest
}: CONTENTFUL_PROJECTS_PAGE) => (
  <>
    <Head title={title} description={seoDescription} />
    <Project>
      <PanelTitle id="title" data-testid="panel-title">
        {title}
      </PanelTitle>
      <Panel>
        <div className="py-2.5 px-5 tracking-wide">
          <section>
            <DetailHeadline id="details">Details:</DetailHeadline>
            <FileDetails fileName={title} {...rest} />
          </section>
          <section>
            <DetailHeadline id="description">Description:</DetailHeadline>
            <SubTitle data-testid="description-body">
              <ContentfulRichText json={description.json} />
            </SubTitle>
          </section>
          <section>
            <DetailHeadline id="tech">Tech Specs:</DetailHeadline>
            <ul
              data-testid="tech-list"
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
        </div>
      </Panel>
    </Project>
    <GoBack href="/projects" title="projects" />
  </>
)

export default ProjectPage
