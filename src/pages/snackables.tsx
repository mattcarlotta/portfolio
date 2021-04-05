import * as React from "react";
import Page from "~components/Layout/Page";
import OutsideLink from "~components/Navigation/OutsideLink";
import { NextPage } from "~types";

const Snackables: NextPage = () => (
  <Page
    description={
      <>
        heavily inspired by&nbsp;
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
        , snackables is a simple to use&nbsp;
        <OutsideLink
          ariaLabel="Navigate to bundle phobia snackables page"
          href="https://bundlephobia.com/result?p=snackables@2.1.0"
          padding="0"
        >
          zero-dependency
        </OutsideLink>
        &nbsp; package module that automatically loads environment variables
        from a predefined ENV_LOAD variable. when it comes to .env file naming,
        snackables is unopinionated, so you can name them anything you&#39;d
        like or you can follow the&nbsp;
        <OutsideLink
          ariaLabel="Navigate to 12factor home page"
          href="https://12factor.net/config"
          padding="0"
        >
          the twelve-factor app
        </OutsideLink>
        &nbsp;methodology. the package is completely written in typescript,
        backed by&nbsp;
        <OutsideLink
          ariaLabel="Navigate to codecov snackables page"
          href="https://codecov.io/gh/mattcarlotta/snackables/branch/main"
          padding="0"
        >
          100% test coverage
        </OutsideLink>
        &nbsp;and is compiled in es5 javascript. the purpose of this package is
        to keep everything within one encapsulated loop to reduce iterations
        which results in an up to 50% faster performance over dotenv and
        dotenv-expand and up to 80% faster performance than nextjs&#39; current
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
        src: "snackablesLogo2",
        alt: "snackables-logo-preview",
        title: "logo",
      },
    ]}
    tech={["enzyme", "github actions", "jest", "npm", "typescript"]}
  />
);

export default Snackables;
