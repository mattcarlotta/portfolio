import { Fragment } from "react";
import get from "lodash.get";
import DetailHeadline from "~components/Layout/DetailHeadline";
import Explorations, { Exploration } from "~components/Layout/Explorations";
import FileDetails from "~components/Layout/FileDetails";
import Panel from "~components/Layout/Panel";
import PanelTitle from "~components/Layout/PanelTitle";
import Project from "~components/Layout/Project";
import SubTitle from "~components/Layout/SubTitle";
import Text from "~components/Layout/Text";
import Head from "~components/Navigation/Header";
import { GetStaticPaths, GetStaticProps, ReactElement } from "~types";

export type ExplorationsProps = {
  id: string;
  exploration: Exploration;
};

const ExplorationsPage = ({
  exploration,
}: ExplorationsProps): ReactElement | null =>
  exploration ? (
    <Fragment>
      <Head
        title={exploration.title}
        url={`/explorations/${exploration.href}`}
        description="An exploration example."
      />
      <Project>
        <PanelTitle data-testid="panel-title">{exploration.title}</PanelTitle>
        <Panel>
          <Text>
            <DetailHeadline>Details:</DetailHeadline>
            <FileDetails
              active
              location={`https://${exploration.href}.csb.app/`}
              fileName={exploration.title}
              source={`https://codesandbox.io/s/${exploration.href}`}
              status="In Orbit"
            />
            <DetailHeadline>Description:</DetailHeadline>
            <SubTitle data-testid="description">
              {exploration.description}
            </SubTitle>
            <DetailHeadline>Playground:</DetailHeadline>
            <SubTitle>
              <iframe
                src={`https://codesandbox.io/embed/${exploration.href}?codemirror=1&fontsize=14&hidenavigation=1&view=preview&hidedevtools=1&theme=dark`}
                title={exploration.title}
                style={{
                  width: "100%",
                  height: "500px",
                  border: 0,
                  borderRadius: 4,
                  overflow: "hidden",
                }}
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              />
            </SubTitle>
          </Text>
        </Panel>
      </Project>
    </Fragment>
  ) : null;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = get(params, ["id"]);

  const exploration = Explorations.find(exploration => exploration.href === id);

  if (!exploration)
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };

  return {
    props: {
      exploration,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: Explorations.map(exploration => ({
    params: { id: exploration.href },
  })),
  fallback: true,
});

export default ExplorationsPage;
