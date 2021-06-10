import * as React from "react";
import Page from "~components/Layout/Page";
import OutsideLink from "~components/Navigation/OutsideLink";
import { ReactElement } from "~types";

const NoShotEnv = (): ReactElement => (
  <Page
    description={
      <>
        Heavily inspired by&nbsp;
        <OutsideLink
          ariaLabel="Navigate to dotenv npm home page"
          href="https://www.npmjs.com/package/dotenv"
          padding="0"
        >
          dotenv
        </OutsideLink>
        &nbsp;and&nbsp;
        <OutsideLink
          ariaLabel="Navigate to dotenv-expand npm home page"
          href="https://www.npmjs.com/package/dotenv-expand"
          padding="0"
        >
          dotenv-expand
        </OutsideLink>
        , @noshot/env is a simple to use&nbsp;
        <OutsideLink
          ariaLabel="Navigate to bundle phobia @noshot/env page"
          href="https://bundlephobia.com/result?p=@noshot/env"
          padding="0"
        >
          zero-dependency
        </OutsideLink>
        &nbsp;package module that automatically loads environment variables from
        a predefined Env variable. When it comes to .env file naming,
        @noshot/env is unopinionated, so you can name them anything you&#39;d
        like or you can follow the&nbsp;
        <OutsideLink
          ariaLabel="Navigate to 12factor home page"
          href="https://12factor.net/config"
          padding="0"
        >
          the twelve-factor app
        </OutsideLink>
        &nbsp;methodology. The package is completely written in typescript,
        backed by&nbsp;
        <OutsideLink
          ariaLabel="Navigate to codecov @noshot/env page"
          href="https://codecov.io/gh/no-shot/env/branch/main"
          padding="0"
        >
          100% test coverage
        </OutsideLink>
        &nbsp;and is compiled in ES5 CommonJS and ES6 ES Modules. The main
        advantage of this package is that it extend and/or dynamically load env
        files as quickly as possible from a configuration file. As a result,
        .env file loading is between 40-70% faster than dotenv and dotenv-expand
        and up to 80%-90% faster than NextJS&#39; current implementation:&nbsp;
        <OutsideLink
          ariaLabel="Navigate to noshot/env-metrics page"
          href="https://github.com/no-shot/env-metrics#metrics"
          padding="0"
        >
          env metrics
        </OutsideLink>
        .
      </>
    }
    head={{
      title: "@noshot/env",
      url: "/noshotenv",
      description:
        "A package module that automatically loads environment variables from a predefined Env variable.",
    }}
    filedetails={{
      active: true,
      location: "https://www.npmjs.com/package/@noshot/env",
      status: "In Orbit",
      source: "https://github.com/no-shot/env",
    }}
    snapshotdirectory="noshotenv"
    snapshots={[
      {
        src: "noshotenvLogo",
        alt: "noshotenv-logo-preview",
        title: "logo",
      },
    ]}
    tech={["enzyme", "github actions", "jest", "npm", "typescript"]}
  />
);

export default NoShotEnv;
