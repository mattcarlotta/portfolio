import Page from "~components/Layout/Page";
import OutsideLink from "~components/Navigation/OutsideLink";
import { FC } from "~types";

const SJSIceTeam: FC = (): JSX.Element => (
  <Page
    description={
      <>
        An application to consolidate Google forms, Excel, and manual
        user-generated monthly PDFs into a single, unified, semi-automated
        month-to-month scheduling service for 25+ members of the San Jose Sharks
        Ice Team. The application is separated into 4 services: Front-facing
        application,&nbsp;
        <OutsideLink
          aria-label="Navigate to emailing microservice source page"
          href="https://github.com/mattcarlotta/SJSITAPP-Agent"
          style={{ padding: 0 }}
        >
          an automated emailing microservice
        </OutsideLink>
        ,&nbsp;
        <OutsideLink
          aria-label="Navigate to image microservice source page"
          href="https://github.com/mattcarlotta/SJSITAPP-Image"
          style={{ padding: 0 }}
        >
          an automated image microservice
        </OutsideLink>
        , and a database optimization microservice. The main application
        utilizes NextJS for SEO, while the microservices utilize NodeJS with
        ExpressJS. All services utilizes Github Actions for pre-flight unit and
        e2e tests; as well as, continuous integrations with a remote Linux
        server running PM2 processes. The application is designed for and
        supports: Chrome, Firefox, IE11, and Safari (for mobile, pad, and
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
      source: "https://github.com/mattcarlotta/SJSITApp-SSR",
    }}
    snapshotdirectory="sjsit"
    snapshots={[
      {
        src: "dashboard/sjsiceteamDashboard",
        alt: "dashboard-preview",
        title: "Dashboard",
      },
      {
        src: "email/sjsiceteamEmailEventReminder",
        alt: "email-upcoming-event-preview",
        title: "Email - Event",
      },
      {
        src: "email/sjsiceteamEmailScheduleReminder",
        alt: "email-upcoming-schedule-preview",
        title: "Email - Schedule",
      },
      {
        src: "events/sjsiceteamEvents",
        alt: "events-preview",
        title: "Events",
      },
      {
        src: "schedule/sjsiceteamEventSchedule",
        alt: "event-scheduling-preview",
        title: "Event Scheduling",
      },
      {
        src: "help/sjsiceteamHelp",
        alt: "help-preview",
        title: "Help",
      },
      {
        src: "availability/sjsiceteamAvailability",
        alt: "member-availability-preview",
        title: "Member - Availability",
      },
      {
        src: "settings/sjsiceteamSettings",
        alt: "member-settings-preview",
        title: "Member - Settings",
      },
      {
        src: "schedule/sjsiceteamSchedule",
        alt: "schedule-calendar-preview",
        title: "Schedule - Calendar",
      },
      {
        src: "schedule/sjsiceteamScheduleMyGames",
        alt: "scheduled-my-games-preview",
        title: "Schedule - My Games",
      },
      {
        src: "schedule/sjsiceteamScheduledEvent",
        alt: "scheduled-my-event-preview",
        title: "Schedule - My Event",
      },
    ]}
    tech={[
      "Github Actions",
      "MongoDB",
      "ReactJS (w/ReduxJS)",
      "NextJS",
      "ExpressJS",
      "NodeJS",
      "Nginx",
      "PM2",
    ]}
  />
);

export default SJSIceTeam;
