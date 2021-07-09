import get from "lodash.get";
import Applications, { Application } from "~components/Layout/Apps";
import Page from "~components/Layout/Page";
import { GetStaticPaths, GetStaticProps, ReactElement } from "~types";

export type ApplicationProps = {
  application: Application;
};

const AppsPage = ({ application }: ApplicationProps): ReactElement | null =>
  application ? <Page {...application} /> : null;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = get(params, ["id"]);

  const application = Applications.find(app => app.id === id);

  if (!application)
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };

  return {
    props: {
      application,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: Applications.map(app => ({
    params: { id: app.id },
  })),
  fallback: true,
});

export default AppsPage;
