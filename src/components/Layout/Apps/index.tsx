/* istanbul ignore file */
export type AppHead = {
  title: string;
  url: string;
  description: string;
};

export type AppFileDetails = {
  active: boolean;
  status: string;
  location?: string;
  source: string;
};

export type AppSnapshots = Array<{
  src: string;
  alt: string;
  title: string;
  ratio?: string;
}>;

export type AppTech = Array<string>;

export type AppPreview = {
  ariaLabel: string;
  alt: string;
  src: string;
};

export type Application = {
  id: string;
  head: AppHead;
  filedetails: AppFileDetails;
  snapshotdirectory?: string;
  snapshots?: AppSnapshots;
  tech: AppTech;
  preview: AppPreview;
};

const Applications: Array<Application> = [
  {
    id: "sjs-ice-team",
    head: {
      title: "sjs ice team",
      url: "/sjs-ice-team",
      description:
        "An application to manage the San Jose Sharks Ice Team scheduling.",
    },
    filedetails: {
      active: true,
      location: "https://sjsiceteam.com",
      status: "In Orbit",
      source: "https://github.com/mattcarlotta/SJSITAPP-Website",
    },
    preview: {
      alt: "sjsiceteam-preview",
      ariaLabel: "Navigate to the SJS Ice Team project page.",
      src: "sjsit/sjsiceteamPreview",
    },
    snapshotdirectory: "sjsit",
    snapshots: [
      {
        src: "dashboard/sjsiceteamDashboard",
        alt: "dashboard-preview",
        title: "dashboard",
        ratio: "20",
      },
      {
        src: "email-event/sjsiceteamEmailEventReminder",
        alt: "email-upcoming-event-preview",
        title: "email event",
        ratio: "20",
      },
      {
        src: "email-schedule/sjsiceteamEmailScheduleReminder",
        alt: "email-upcoming-schedule-preview",
        title: "email schedule",
        ratio: "20",
      },
      {
        src: "schedule/sjsiceteamSchedule",
        alt: "schedule-calendar-preview",
        title: "event calendar",
        ratio: "20",
      },
      {
        src: "event/sjsiceteamEvent",
        alt: "event-preview",
        title: "event",
        ratio: "20",
      },
      {
        src: "help/sjsiceteamHelp",
        alt: "help-preview",
        title: "help",
        ratio: "20",
      },
      {
        src: "home/sjsiceteamHome",
        alt: "home-preview",
        title: "home",
        ratio: "20",
      },
      {
        src: "availability/sjsiceteamAvailability",
        alt: "member-availability-preview",
        title: "my availability",
        ratio: "20",
      },
      {
        src: "settings-response/sjsiceteamMyResponse",
        alt: "member-response-preview",
        title: "my response",
        ratio: "20",
      },
      {
        src: "settings/sjsiceteamSettings",
        alt: "member-settings-preview",
        title: "settings",
        ratio: "20",
      },
    ],
    tech: [
      "github actions",
      "mongodb",
      "typescript",
      "reactjs (w / reduxjs)",
      "nextjs",
      "expressjs",
      "nodejs",
      "nginx",
      "pm2",
    ],
  },
  {
    id: "gamersnexus-mock-up",
    head: {
      title: "gamersnexus mock up",
      url: "/gamersnexus-mock-up",
      description:
        "A mock up created in 3 days as a redesign proposal for GamersNexus.net.",
    },
    filedetails: {
      active: true,
      location: "https://gamersnexus.mattcarlotta.sh/",
      status: "In Orbit",
      source: "https://github.com/mattcarlotta/gamersnexus",
    },
    preview: {
      alt: "gamersnexus-preview",
      ariaLabel: "Navigate to the gamersnexus project page.",
      src: "gamersnexus/gamernexusLogo",
    },
    snapshotdirectory: "gamersnexus",
    snapshots: [
      {
        src: "chart/gamernexusChart",
        alt: "gn-chart-preview",
        title: "chart",
        ratio: "20",
      },
      {
        src: "interactive-chart/gamernexusInteractiveChart",
        alt: "gn-ichart-preview",
        title: "chart filtered",
        ratio: "20",
      },
      {
        src: "tweet/gamernexusTweet",
        alt: "gn-tweet-preview",
        title: "embeded tweet",
        ratio: "20",
      },
      {
        src: "video/gamernexusVideo",
        alt: "gn-video-preview",
        title: "embeded video",
        ratio: "20",
      },
      {
        src: "home/gamernexusHome",
        alt: "gn-home-preview",
        title: "home",
        ratio: "20",
      },
      {
        src: "news/gamernexusNews",
        alt: "gn-news-preview",
        title: "news",
        ratio: "20",
      },
    ],
    tech: ["emotion-styled", "reactjs", "nextjs", "typescript"],
  },
  {
    id: "noshotenv",
    head: {
      title: "@noshot/env",
      url: "/noshotenv",
      description:
        "An npm package that automatically loads environment variables from a predefined Env variable.",
    },
    filedetails: {
      active: true,
      location: "https://www.npmjs.com/package/@noshot/env",
      status: "In Orbit",
      source: "https://github.com/no-shot/env",
    },
    preview: {
      alt: "noshotenv-preview",
      ariaLabel: "Navigate to the @noshot/env project page.",
      src: "noshotenv/noshotenvLogoPreview",
    },
    snapshotdirectory: "noshotenv",
    snapshots: [
      {
        src: "logo/noshotenvLogo",
        alt: "noshotenv-logo-preview",
        title: "logo",
        ratio: "20",
      },
    ],
    tech: ["enzyme", "github actions", "jest", "npm", "typescript"],
  },
  {
    id: "react-hooks-guide",
    head: {
      title: "react hooks guide",
      url: "/react-hooks-guide",
      description:
        "An educational website to help up-and-coming developers understand React’s newly introduced hooks.",
    },
    filedetails: {
      active: false,
      status: "Decommissioned",
      source: "https://github.com/mattcarlotta/react-hooks",
    },
    preview: {
      alt: "react-hooks-guide-preview",
      ariaLabel: "Navigate to the React Hooks Guide project page.",
      src: "reacthooks/reacthooksPreview",
    },
    snapshotdirectory: "reacthooks",
    snapshots: [
      {
        src: "api/reacthooksAPI",
        alt: "api-preview",
        title: "api",
        ratio: "20",
      },
      {
        src: "examples/reacthooksExamples",
        alt: "examples-preview",
        title: "examples",
        ratio: "20",
      },
      {
        src: "home/reacthooksHome",
        alt: "home-preview",
        title: "home",
        ratio: "20",
      },
      {
        src: "mobile/reacthooksMobile",
        alt: "mobile-preview",
        title: "mobile layout",
        ratio: "35",
      },
      {
        src: "pad/reacthooksPad",
        alt: "pad-preview",
        title: "ipad layout",
        ratio: "20",
      },
    ],
    tech: [
      "create react app",
      "codesandbox",
      "expressjs",
      "reactjs",
      "nginx",
      "styled-components (with theming)",
      "webpack",
    ],
  },
  {
    id: "nextjs-ssr-kit",
    head: {
      title: "nextjs ssr kit",
      url: "/nextjs-ssr-kit",
      description:
        "A fully-loaded custom NextJS boilerplate for server-side solutions.",
    },
    filedetails: {
      active: false,
      status: "Archived",
      source: "https://github.com/mattcarlotta/nextjs-ssr-kit",
    },
    preview: {
      alt: "nextjs-ssr-kit-preview",
      ariaLabel: "Navigate to the Next SSR Kit project page.",
      src: "nextssrkit/nextssrkitPreview",
    },
    snapshotdirectory: "nextssrkit",
    snapshots: [
      {
        src: "api/nextssrkitExampleAPI",
        alt: "next-ssr-kit-example-preview",
        title: "ex. api",
        ratio: "20",
      },
      {
        src: "create/nextssrkitExampleAPICreate",
        alt: "next-ssr-kit-example-create-preview",
        title: "ex. api create",
        ratio: "20",
      },
      {
        src: "edit/nextssrkitExampleAPIEdit",
        alt: "next-ssr-kit-example-create-preview",
        title: "ex. api edit",
        ratio: "20",
      },
      {
        src: "home/nextssrkitHome",
        alt: "next-ssr-kit-home-preview",
        title: "home",
        ratio: "20",
      },
    ],
    tech: [
      "cypress",
      "emotion",
      "enzyme",
      "eslint",
      "github actions",
      "jest",
      "mongodb",
      "nextjs",
      "reactjs (w / reduxjs + redux saga)",
      "stylelint",
      "typescript",
    ],
  },
  {
    id: "subskribble",
    head: {
      title: "subskribble",
      url: "/subskribble",
      description:
        "A web application to create, manage, and send personalized updates to a list of subscribers.",
    },
    filedetails: {
      active: false,
      status: "Decommissioned",
      source: "https://github.com/mattcarlotta/subskribble",
    },
    preview: {
      alt: "subskribble-preview",
      ariaLabel: "Navigate to the Subskribble project page.",
      src: "subskribble/subskribblePreview",
    },
    snapshotdirectory: "subskribble",
    snapshots: [
      {
        src: "plan/subskribbleCreatePlan",
        alt: "create-plan-preview",
        title: "create plan",
        ratio: "35",
      },
      {
        src: "template/subskribbleCreateTemplate",
        alt: "create-template-preview",
        title: "create template",
        ratio: "20",
      },
      {
        src: "dashboard/subskribbleDashboard",
        alt: "dashboard-preview",
        title: "dashboard",
        ratio: "20",
      },
      {
        src: "notes/subskribbleNotes",
        alt: "notifications-preview",
        title: "notifications",
        ratio: "20",
      },
      {
        src: "profile/subskribbleProfile",
        alt: "profile-preview",
        title: "profile",
        ratio: "20",
      },
      {
        src: "register/subskribbleSubRegister",
        alt: "subcriber-registration-preview",
        title: "registration",
        ratio: "20",
      },
      {
        src: "refunds/subskribbleRefundTrans",
        alt: "refund-transactions-preview",
        title: "refunds",
        ratio: "35",
      },
      {
        src: "message/subskribbleSendMessage",
        alt: "send-message-preview",
        title: "send message",
        ratio: "20",
      },
      {
        src: "subs/subskribbleSubs",
        alt: "subscribers-preview",
        title: "subscribers",
        ratio: "20",
      },
      {
        src: "transactions/subskribbleTransactions",
        alt: "subskribble-transactions-preview",
        title: "transactions",
        ratio: "20",
      },
    ],
    tech: ["mongodb", "expressjs", "reactjs", "nodejs"],
  },
  {
    id: "composable-styled-components",
    head: {
      title: "composable components",
      url: "/composable-styled-components",
      description: "A lightweight composable solution for styled-components.",
    },
    filedetails: {
      active: false,
      location: "https://composable.mattcarlotta.sh",
      status: "Decommissioned",
      source: "https://github.com/mattcarlotta/composable-styled-components",
    },
    preview: {
      alt: "composable-preview",
      ariaLabel: "Navigate to the Composable Styled Components project page.",
      src: "composable/composablePreview",
    },
    snapshotdirectory: "composable",
    snapshots: [
      {
        src: "api/composableAPI",
        alt: "api-preview",
        title: "api",
        ratio: "20",
      },
      {
        src: "demos/composableDemos",
        alt: "demo-preview",
        title: "demos",
        ratio: "20",
      },
      {
        src: "home/composableHome",
        alt: "home-preview",
        title: "home",
        ratio: "20",
      },
      {
        src: "releases/composableReleases",
        alt: "releases-preview",
        title: "releases",
        ratio: "20",
      },
      {
        src: "search/composableSearch",
        alt: "search-preview",
        title: "search",
        ratio: "20",
      },
    ],
    tech: [
      "babel",
      "cypress",
      "enzyme",
      "jest",
      "reactjs",
      "typescript (website)",
      "nextjs",
      "npm",
      "rollupjs",
      "Webpack",
    ],
  },
  {
    id: "react-smde",
    head: {
      title: "react smde",
      url: "/react-smde",
      description: "A lightweight, simple, markdown editor for React.",
    },
    filedetails: {
      active: false,
      status: "Decommissioned",
      location: "https://mattcarlotta.github.io/react-smde",
      source: "https://github.com/mattcarlotta/react-smde",
    },
    preview: {
      alt: "react-smde-preview",
      ariaLabel: "Navigate to the React SMDE project page.",
      src: "reactsmde/reactsmdePreview",
    },
    snapshotdirectory: "reactsmde",
    snapshots: [
      {
        src: "code/reactsmdeCode",
        alt: "example-code-preview",
        title: "ex. code",
        ratio: "20",
      },
      {
        src: "preview/reactsmdeCodePreview",
        alt: "example-code-syntax-preview",
        title: "ex. code preview",
        ratio: "20",
      },
      {
        src: "source/reactsmdeSource",
        alt: "example-code-source-preview",
        title: "ex. code source",
        ratio: "20",
      },
    ],
    tech: [
      "enzyme",
      "eslint",
      "github actions",
      "jest",
      "material-ui",
      "reactjs",
      "rollupjs",
      "styled-components",
      "storybookjs",
    ],
  },
  {
    id: "alias-dirs",
    head: {
      title: "alias dirs",
      url: "/alias-dirs",
      description:
        "Automatically creates aliased import directories for babel.",
    },
    preview: {
      alt: "alias-dirs-preview",
      ariaLabel: "Navigate to the Alias Dirs project page.",
      src: "aliasdirs/aliasdirsPreview",
    },
    filedetails: {
      active: false,
      status: "Decommissioned",
      source: "https://github.com/mattcarlotta/alias-dirs",
    },
    tech: ["babel", "enzyme", "javascript", "jest", "rollupjs"],
  },
  {
    id: "fullstack-mern-kit",
    head: {
      title: "fullstack m.e.r.n. kit",
      url: "/fullstack-mern-kit",
      description:
        "A fully-loaded custom boilerplate using MongoDB, Express, React/Redux and Node for client-side solutions.",
    },
    filedetails: {
      active: false,
      status: "Archived",
      source: "https://github.com/mattcarlotta/fullstack-mern-kit",
    },
    preview: {
      alt: "fs-mern-kit-preview",
      ariaLabel: "Navigate to the Fullstack M.E.R.N. Kit project page.",
      src: "mernkit/mernkitPreview",
    },
    snapshotdirectory: "mernkit",
    snapshots: [
      {
        src: "logo/mernkitLogo",
        alt: "mernkit-preview",
        title: "logo",
        ratio: "35",
      },
    ],
    tech: ["mongdb", "expressjs", "reactjs", "nodejs"],
  },
  {
    id: "yelp-camp",
    head: {
      title: "yelp camp",
      url: "/yelp-camp",
      description:
        "An experimental website for creating, editing, and reviewing campground sites from all over California.",
    },
    filedetails: {
      active: false,
      status: "Decommissioned",
      source: "https://github.com/mattcarlotta/campground-app-frontend",
    },
    preview: {
      alt: "yelp-camp-preview",
      ariaLabel: "Navigate to the Yelp Camp project page.",
      src: "yelpcamp/yelpcampPreview",
    },
    snapshotdirectory: "yelpcamp",
    snapshots: [
      {
        src: "app/yelpcampPreview",
        alt: "yelp-camp-preview",
        title: "ex. campground",
        ratio: "35",
      },
    ],
    tech: ["mongodb", "expressjs", "reactjs", "nodejs"],
  },
  {
    id: "autorun-gcn-driver",
    head: {
      title: "autorun gcn driver",
      url: "/autorun-gcn-driver",
      description:
        "A program that replaces manually opening the GCN USB Adapter, pressing the 'Start' button and then searching through the vJoy devices to find which vJoy device is active.",
    },
    filedetails: {
      active: true,
      status: "In Orbit",
      source: "https://github.com/mattcarlotta/autorunGCNDriver",
    },
    preview: {
      alt: "autorun-gcn-preview",
      ariaLabel: "Navigate to the Autorun GCN project page.",
      src: "autorungcn/autorunGCNPreview",
    },
    snapshotdirectory: "autorungcn",
    snapshots: [
      {
        src: "logo/autorunGCNLogo",
        alt: "autorunGCN-logo-preview",
        title: "logo",
        ratio: "35",
      },
    ],
    tech: ["AutoIt", "GCN USB Adapter"],
  },
  {
    id: "nvfc-app",
    head: {
      title: "fan controller (nvfc) app",
      url: "/nvfc-app",
      description:
        "A standalone Linux application that creates a modifiable 2D curve of temp and fan speed points that automatically controls a Nvidia GPU's fan based on the GPU's temperature.",
    },
    filedetails: {
      active: false,
      status: "Archived",
      source: "https://github.com/mattcarlotta/nvfcApp",
    },
    preview: {
      alt: "nvfc-app-preview",
      ariaLabel: "Navigate to the Nvidia Fan Controller App project page.",
      src: "nvfcapp/nvfcappPreview",
    },
    snapshotdirectory: "nvfcapp",
    snapshots: [
      {
        src: "logo/nvfcappLogo",
        alt: "logo-preview",
        title: "logo",
        ratio: "35",
      },
      {
        src: "settings/nvfcappSettings",
        alt: "system-info-preview",
        title: "system info",
        ratio: "35",
      },
    ],
    tech: ["python3", "matplotlib", "pip3", "pygtk", "nvidia drivers"],
  },
  {
    id: "ssdtgen-app",
    head: {
      title: "ssdtgen app",
      url: "/ssdtgen-app",
      description:
        "A standalone Mac OS application that builds and compiles custom SSDTs for X99, Z170, Z97, and H97 systems running Mac OS.",
    },
    filedetails: {
      active: false,
      status: "Archived",
      source: "https://github.com/mattcarlotta/ssdtGenApp",
    },
    preview: {
      alt: "sddtgen-app-preview",
      ariaLabel: "Navigate to the ssdtGen App project page.",
      src: "ssdtgenapp/ssdtgenappPreview",
    },
    snapshotdirectory: "ssdtgenapp",
    snapshots: [
      {
        src: "app/ssdtgenappPreview",
        alt: "app-preview",
        title: "app",
        ratio: "35",
      },
      {
        src: "example/ssdtgenappExample",
        alt: "example-preview",
        title: "ex. ssdt",
        ratio: "20",
      },
      {
        src: "logo/ssdtgenappLogo",
        alt: "logo-preview",
        title: "logo",
        ratio: "20",
      },
    ],
    tech: ["bash", "swift", "asl"],
  },
];

export default Applications;
