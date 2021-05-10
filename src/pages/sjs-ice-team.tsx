import * as React from "react";
import Page from "~components/Layout/Page";
import OutsideLink from "~components/Navigation/OutsideLink";
import { ReactElement } from "~types";

const SJSIceTeam = (): ReactElement => (
  <Page
    description={
      <>
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
      </>
    }
    head={{
      title: "SJS Ice Team",
      url: "/sjs-ice-team",
      description:
        "An application to manage the San Jose Sharks Ice Team scheduling.",
    }}
    filedetails={{
      active: true,
      location: "https://sjsiceteam.com",
      status: "In Orbit",
      source: "https://github.com/mattcarlotta/SJSITAPP-Website",
    }}
    snapshotdirectory="sjsit"
    snapshots={[
      {
        src: "newdesign/dashboard/sjsiceteamDashboard",
        alt: "dashboard-preview",
        title: "dashboard",
      },
      {
        src: "email/sjsiceteamEmailEventReminder",
        alt: "email-upcoming-event-preview",
        title: "email event",
      },
      {
        src: "email/sjsiceteamEmailScheduleReminder",
        alt: "email-upcoming-schedule-preview",
        title: "email schedule",
      },
      {
        src: "newdesign/schedule/sjsiceteamSchedule",
        alt: "schedule-calendar-preview",
        title: "event calendar",
      },
      {
        src: "newdesign/event/sjsiceteamEvent",
        alt: "event-preview",
        title: "event",
      },
      {
        src: "newdesign/help/sjsiceteamHelp",
        alt: "help-preview",
        title: "help",
      },
      {
        src: "newdesign/home/sjsiceteamHome",
        alt: "home-preview",
        title: "home",
      },
      {
        src: "newdesign/availability/sjsiceteamAvailability",
        alt: "member-availability-preview",
        title: "my availability",
      },
      {
        src: "newdesign/settings/sjsiceteamMyResponse",
        alt: "member-response-preview",
        title: "my response",
      },
      {
        src: "newdesign/settings/sjsiceteamSettings",
        alt: "member-settings-preview",
        title: "settings",
      },
    ]}
    tech={[
      "github actions",
      "mongodb",
      "typescript",
      "reactjs (w / reduxjs)",
      "nextjs",
      "expressjs",
      "nodejs",
      "nginx",
      "pm2",
    ]}
  />
);

export default SJSIceTeam;
