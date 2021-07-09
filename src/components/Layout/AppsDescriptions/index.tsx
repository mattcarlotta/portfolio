import { Fragment } from "react";
import Link from "~components/Navigation/Link";
import OutsideLink from "~components/Navigation/OutsideLink";
import { ReactElement } from "~types";

export type ApplicationDescription = {
  appId: string;
  description: ReactElement;
};

export const ApplicationDescriptions: Array<ApplicationDescription> = [
  {
    appId: "sjs-ice-team",
    description: (
      <Fragment key="sjs-ice-team-description">
        An application to consolidate google forms, excel, and manual
        user-generated monthly PDFs into a single, unified, semi-automated
        month-to-month scheduling service for 25+ members of the San Jose Sharks
        Ice Team. The application is separated into 4 services: front-facing
        application,&nbsp;
        <OutsideLink
          ariaLabel="Navigate to automated microservice source page"
          href="https://github.com/mattcarlotta/SJSITAPP-Agent"
          padding="0"
        >
          an automated microservice
        </OutsideLink>
        ,&nbsp;
        <OutsideLink
          ariaLabel="Navigate to image microservice source page"
          href="https://github.com/mattcarlotta/SJSITAPP-Image"
          padding="0"
        >
          an image microservice
        </OutsideLink>
        , and a database optimization microservice. The main application
        utilizes NextJS for SEO, while the microservices utilize NodeJS with
        ExpressJS. All services utilize Github Actions for pre-flight unit and
        e2e tests; as well as, continuous integrations with a remote linux
        server running PM2 processes. The application is designed for and
        supports: chrome, firefox, ie11, and safari (for mobile, pad, and
        desktop screens).
      </Fragment>
    ),
  },
  {
    appId: "gamersnexus-mock-up",
    description: (
      <Fragment key="gamernexus-mock-up-description">
        A mock up created in 3 days as a redesign proposal for&nbsp;
        <OutsideLink
          ariaLabel="Navigate to gamersnexus home page"
          href="https://www.gamersnexus.net/"
          padding="0"
        >
          GamersNexus.net
        </OutsideLink>
        .
      </Fragment>
    ),
  },
  {
    appId: "noshotenv",
    description: (
      <Fragment key="noshotenv-description">
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
      </Fragment>
    ),
  },
  {
    appId: "react-hooks-guide",
    description: (
      <Fragment key="react-hooks-guide-description">
        An educational website to help up-and-coming developers understand
        React’s newly introduced hooks. The entire website was built using hooks
        and provides: interactive hook examples with example code and in-depth
        hook descriptions and usage cases. Designed for both mobile to desktop
        screen sizes, and has a light and dark theme.
      </Fragment>
    ),
  },
  {
    appId: "nextjs-ssr-kit",
    description: (
      <Fragment key="nextjs-ssr-kit-description">
        A fully-loaded, built from the ground up, NextJS boilerplate for
        server-side solutions. This website and several other projects were
        built using this boilerplate! It sports a custom NextJS configuration,
        Emotion SSR integration, custom Jest and Cypress testing suites,
        implements Github Actions for CI, and it even has an interactive API
        example using MongoDB.
      </Fragment>
    ),
  },
  {
    appId: "subskribble",
    description: (
      <Fragment key="subskribble-description">
        An experimental web application to create, manage, and send personalized
        updates to a list of subscribers. The application included subscriber
        plans, plan promotionals, payment options, account charting and
        analytics, notifications, and an image CDN microservice.
      </Fragment>
    ),
  },
  {
    appId: "composable-styled-components",
    description: (
      <Fragment key="composable-styled-components-description">
        A lightweight composable npm package for&nbsp;
        <OutsideLink
          ariaLabel="Navigate to styled-components home page"
          href="https://styled-components.com/"
          padding="0"
        >
          styled-components
        </OutsideLink>
        . the package is created using a custom rollupjs configuration, is
        backed by 100% test coverage and is published to&nbsp;
        <OutsideLink
          ariaLabel="Navigate to npm composable-styled-components package page"
          href="https://www.npmjs.com/package/composable-styled-components"
          padding="0"
        >
          npm
        </OutsideLink>
        . Meanwhile, the documentation website is built in Typescript, optimized
        for SEO with&nbsp;
        <OutsideLink
          ariaLabel="Navigate to Algolia home page"
          href="https://www.algolia.com"
          padding="0"
        >
          Algolia
        </OutsideLink>
        &nbsp;search engine crawler integration, and utilizes the
        composable-styled-components package to construct reusable components.
      </Fragment>
    ),
  },
  {
    appId: "react-smde",
    description: (
      <Fragment key="react-smde-description">
        A lightweight Simple Markdown Editor (smde) npm package for React.
      </Fragment>
    ),
  },
  {
    appId: "alias-dirs",
    description: (
      <Fragment key="alias-dirs-description">
        With the help of the&nbsp;
        <OutsideLink
          ariaLabel="Navigate to babel-plugin-module-resolver home page"
          href="https://github.com/tleunen/babel-plugin-module-resolver"
          padding="0"
        >
          babel-plugin-module-resolver
        </OutsideLink>
        , this npm package traverses a project&#39;s <i>src</i> directory and
        automatically creates aliased imports for Babel.
      </Fragment>
    ),
  },
  {
    appId: "fullstack-mern-kit",
    description: (
      <Fragment key="fullstack-mern-kit-description">
        A fully-loaded custom boilerplate using MongoDBN, ExpressJS, React/Redux
        and node for client-side solutions. This website and several projects
        were once built using this boilerplate, but have since been archived in
        favor of the&nbsp;
        <Link
          ariaLabel="Navigate to the Next SSR Kit project page."
          dataTestId="nextjs-ssr-link"
          href="/nextjs-ssr-kit"
          padding="0"
          showUnderline
        >
          Nextjs SSR Kit
        </Link>
        .
      </Fragment>
    ),
  },
  {
    appId: "yelp-camp",
    description: (
      <Fragment key="yelp-camp-description">
        An experimental website for creating, editing, and reviewing campground
        sites from all over California. Utilizing google maps, the
        OpenWeatherMap API, and user reviews, campers can plan their journey
        ahead of time.
      </Fragment>
    ),
  },
  {
    appId: "autorun-gcn-driver",
    description: (
      <Fragment key="autorun-gcn-driver-description">
        A program that automates opening the&nbsp;
        <OutsideLink
          ariaLabel="Navigate to gcn-usb-adapter source page"
          href="https://bitbucket.org/elmassivo/gcn-usb-adapter/src/master/"
          padding="0"
        >
          GCN USB Adapter
        </OutsideLink>
        &nbsp;by loading the adapter, pressing the &lsquo;Start&lsquo; button
        and then searching through the vJoy devices to find which vJoy device is
        active:&nbsp;
        <OutsideLink
          ariaLabel="Navigate to youtube video"
          href="https://youtu.be/nA50Wlv3K_M"
          padding="0"
        >
          video
        </OutsideLink>
        .
      </Fragment>
    ),
  },
  {
    appId: "nvfc-app",
    description: (
      <Fragment key="nvfc-app-description">
        A standalone Linux application that creates a modifiable 2D curve of
        temperature to fan speed percentage points. These points will then
        control an Nvidia GPU&#39;s fan based on its temperature.
      </Fragment>
    ),
  },
  {
    appId: "ssdtgen-app",
    description: (
      <Fragment key="ssdtgen-app-description">
        A standalone app that attempts to build and compile custom SSDTs (system
        service descriptor Tables) for x99/z170/z97/h97 systems running Mac OS.
        Specifically, it will inject properties into the system&#39;s ACPI
        (advanced configuration and power interface) tables for: on-board sound,
        an external GPU/HDMI audio, SSATA contoller, ethernet, IMEI controller,
        LPC support, NMVe devices, Sata controller, SBUS controller, XHC USB
        power options, and XOSI support
      </Fragment>
    ),
  },
];

export default ApplicationDescriptions;
