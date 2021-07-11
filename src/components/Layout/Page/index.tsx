import { Fragment } from "react";
import { css } from "@emotion/react";
import ApplicationDescriptions from "~components/Layout/AppsDescriptions";
import DetailHeadline from "~components/Layout/DetailHeadline";
import ModalDialog from "~components/Layout/ModalDialog";
import Panel from "~components/Layout/Panel";
import Project from "~components/Layout/Project";
import FileDetails from "~components/Layout/FileDetails";
import SubTitle from "~components/Layout/SubTitle";
import Text from "~components/Layout/Text";
import PanelTitle from "~components/Layout/PanelTitle";
import Home from "~components/Navigation/Home";
import Head from "~components/Navigation/Header";
import type { Application } from "~components/Layout/Apps";

const Page = ({
  id,
  head,
  filedetails,
  snapshotdirectory,
  snapshots,
  tech,
}: Application): JSX.Element => (
  <Fragment>
    <Head {...head} />
    <Project>
      <PanelTitle data-testid="panel-title">{head.title}</PanelTitle>
      <Panel>
        <Text>
          <DetailHeadline>Details:</DetailHeadline>
          <FileDetails {...filedetails} fileName={head.title} />
          <DetailHeadline>Description:</DetailHeadline>
          <SubTitle data-testid="description">
            {ApplicationDescriptions.map(({ appId, description }) =>
              id === appId ? description : null,
            )}
          </SubTitle>
          <DetailHeadline>Tech Specs:</DetailHeadline>
          <ul
            data-testid="tech"
            css={css`
              list-style-type: none;
              padding: 0 20px;
            `}
          >
            {tech.map(item => (
              <li
                css={css`
                  font-size: 20px;
                  font-family: "Mukta", -apple-system, BlinkMacSystemFont,
                    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans",
                    "Droid Sans", "Helvetica Neue", sans-serif;
                `}
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
          <ModalDialog
            snapshotdirectory={snapshotdirectory}
            snapshots={snapshots}
          />
        </Text>
      </Panel>
    </Project>
    <Home />
  </Fragment>
);

Page.defaultProps = {
  snapshots: [],
};

export default Page;
