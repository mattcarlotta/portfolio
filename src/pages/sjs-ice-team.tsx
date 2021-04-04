import * as React from "react";
import Page from "~components/Layout/Page";
import OutsideLink from "~components/Navigation/OutsideLink";
import { NextPage } from "~types";

const SJSIceTeam: NextPage = () => (
  <Page
    description={
      <>
        an application (work in progress) to consolidate google forms, excel,
        and manual user-generated monthly pdfs into a single, unified,
        semi-automated month-to-month scheduling service for 25+ members of the
        san jose sharks ice team. the application is separated into 4 services:
        front-facing application,&nbsp;
        <OutsideLink
          ariaLabel="Navigate to emailing microservice source page"
          href="https://github.com/mattcarlotta/SJSITAPP-Agent"
          padding="0"
        >
          an automated emailing microservice
        </OutsideLink>
        ,&nbsp;
        <OutsideLink
          ariaLabel="Navigate to image microservice source page"
          href="https://github.com/mattcarlotta/SJSITAPP-Image"
          padding="0"
        >
          an automated image microservice
        </OutsideLink>
        , and a database optimization microservice. the main application
        utilizes nextjs for seo, while the microservices utilize nodejs with
        expressjs. all services utilizes github actions for pre-flight unit and
        e2e tests; as well as, continuous integrations with a remote linux
        server running pm2 processes. the application is designed for and
        supports: chrome, firefox, ie11, and safari (for mobile, pad, and
        desktop screens).
      </>
    }
    head={{
      title: "sjs ice team (w.i.p.)",
      url: "/sjs-ice-team",
      description:
        "An application to manage the San Jose Sharks Ice Team scheduling.",
    }}
    filedetails={{
      active: true,
      location: "https://sjsiceteam.com",
      status: "in orbit",
      source: "https://github.com/mattcarlotta/SJSITApp-SSR",
    }}
    snapshotdirectory="sjsit"
    snapshots={[
      {
        src: "availability/sjsiceteamAvailability",
        alt: "member-availability-preview",
        title: "availability",
      },
      {
        src: "dashboard/sjsiceteamDashboard",
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
        src: "schedule/sjsiceteamSchedule",
        alt: "schedule-calendar-preview",
        title: "event calendar",
      },
      {
        src: "events/sjsiceteamEvents",
        alt: "events-preview",
        title: "events",
      },
      {
        src: "help/sjsiceteamHelp",
        alt: "help-preview",
        title: "help",
      },
      {
        src: "schedule/sjsiceteamScheduledEvent",
        alt: "scheduled-my-event-preview",
        title: "my event",
      },
      {
        src: "schedule/sjsiceteamScheduleMyGames",
        alt: "scheduled-my-games-preview",
        title: "my games",
      },
      {
        src: "schedule/sjsiceteamEventSchedule",
        alt: "event-scheduling-preview",
        title: "scheduling",
      },
      {
        src: "settings/sjsiceteamSettings",
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
