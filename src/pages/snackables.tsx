import Page from "~components/Layout/Page";
import OutsideLink from "~components/Navigation/OutsideLink";
import { FC } from "~types";

const Snackables: FC = (): JSX.Element => (
  <Page
    description={
      <>
        Heavily inspired by&nbsp;
        <OutsideLink
          ariaLabel="Navigate to dotenv npm home page"
          href="https://www.npmjs.com/package/dotenv"
          style={{ padding: 0 }}
        >
          dotenv
        </OutsideLink>
        &nbsp;and&nbsp;
        <OutsideLink
          ariaLabel="Navigate to dotenv-expand npm home page"
          href="https://www.npmjs.com/package/dotenv-expand"
          style={{ padding: 0 }}
        >
          dotenv-expand
        </OutsideLink>
        , snackables is a simple to use&nbsp;
        <OutsideLink
          ariaLabel="Navigate to bundle phobia snackables page"
          href="https://bundlephobia.com/result?p=snackables@1.0.4"
          style={{ padding: 0 }}
        >
          zero-dependency
        </OutsideLink>
        &nbsp; package module that automatically loads environment variables
        from a predefined ENV_LOAD variable. When it comes to .env file naming,
        snackables is unopinionated, so you can name them anything you&#39;d
        like or you can follow the&nbsp;
        <OutsideLink
          ariaLabel="Navigate to 12factor home page"
          href="https://12factor.net/config"
          style={{ padding: 0 }}
        >
          The Twelve-Factor App
        </OutsideLink>
        &nbsp;methodology. The package is completely written in Typescript,
        backed by&nbsp;
        <OutsideLink
          ariaLabel="Navigate to codecov snackables page"
          href="https://codecov.io/gh/mattcarlotta/snackables/branch/main"
          style={{ padding: 0 }}
        >
          100% test coverage
        </OutsideLink>
        &nbsp;and is compiled in ES5 Javascript. The purpose of this package is
        to keep everything within one encapsulated loop for a server
        configuration (with smaller additional loops for value interpolation)
        and a small additional loop for a serverless configuration. In terms of
        performance, snackables is up to 50% faster than dotenv and
        dotenv-expand and up to 80% faster than NextJS&#39; current
        implementation.
      </>
    }
    head={{
      title: "Snackables",
      url: "/snackables",
      description:
        "A package module that automatically loads environment variables from a predefined ENV_LOAD variable.",
    }}
    filedetails={{
      active: true,
      location: "https://www.npmjs.com/package/snackables",
      status: "In Orbit",
      source: "https://github.com/mattcarlotta/snackables",
    }}
    snapshotdirectory="snackables"
    snapshots={[
      {
        src: "snackablesLogo",
        alt: "snackables-logo-preview",
        title: "Logo",
      },
    ]}
    tech={["Cypress", "Enzyme", "Github Actions", "Jest", "NPM", "Typescript"]}
  />
);

export default Snackables;
