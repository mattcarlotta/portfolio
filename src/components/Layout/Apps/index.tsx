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
    id: "rusty-bucket",
    head: {
      title: "rusty bucket",
      url: "/rusty-bucket",
      description:
        "A custom built Rust API server to dynamically resize images based upon a URL query",
    },
    filedetails: {
      active: true,
      location: "https://static.mattcarlotta.sh",
      status: "In Orbit",
      source: "https://github.com/mattcarlotta/image-api",
    },
    preview: {
      alt: "A red-brown background with an off-white bucket pouring liquid on to the word RustyBucket ",
      ariaLabel: "Navigate to the Rusty Bucket project page",
      src: "rustybucket/rustybucketPreview",
    },
    tech: ["rust", "nginx", "pm2"],
  },
  {
    id: "sjs-ice-team",
    head: {
      title: "sjs ice team",
      url: "/sjs-ice-team",
      description:
        "An application to manage the San Jose Sharks Ice Team scheduling",
    },
    filedetails: {
      active: true,
      location: "https://sjsiceteam.com",
      status: "In Orbit",
      source: "https://github.com/mattcarlotta/SJSITAPP-Website",
    },
    preview: {
      alt: "A hockey puck with a green button underneath it that contains the text: Home of the San Jose Sharks Ice Team.",
      ariaLabel: "Navigate to the SJS Ice Team project page",
      src: "sjsit/sjsiceteamPreview",
    },
    snapshotdirectory: "sjsit",
    snapshots: [
      {
        src: "dashboard/sjsiceteamDashboard",
        alt: "A dashboard that is laid out with a navbar bar that extends across the top of the page and sidebar along the right with clickable links that extends to the bottom of the page, a sidebar with clickable links that extends all the way down the left of the page. These bars frame 4 panels to the right: An Events panel, a Forms panel, an Availability panel and an Event Distribution chart panel.",
        title: "dashboard",
        ratio: "20",
      },
      {
        src: "email-event/sjsiceteamEmailEventReminder",
        alt: "A preview of an email that contains an event reminder which contains the event's location, date and the member's calltime.",
        title: "email event",
        ratio: "20",
      },
      {
        src: "email-schedule/sjsiceteamEmailScheduleReminder",
        alt: "A preview of an email that contains a list of events that a member is scheduled to work. The list contains the event's location, date and the member's calltime.",
        title: "email schedule",
        ratio: "20",
      },
      {
        src: "schedule/sjsiceteamSchedule",
        alt: "A schedule page that is laid out with a navbar bar that extends across the top of the page and sidebar along the right with clickable links that extends to the bottom of the page, a sidebar with clickable links that extends all the way down the left of the page. These bars frame 1 panel to the right which is a calendar of the current month and all the events contained within each day.",
        title: "event calendar",
        ratio: "20",
      },
      {
        src: "event/sjsiceteamEvent",
        alt: "A modal that overlays the schedule page, which displays the details of a single event.",
        title: "event",
        ratio: "20",
      },
      {
        src: "help/sjsiceteamHelp",
        alt: "A help page that is laid out with a navbar bar that extends across the top of the page and sidebar along the right with clickable links that extends to the bottom of the page, a sidebar with clickable links that extends all the way down the left of the page. These bars frame 1 panel to the right which contain frequently asked questions.",
        title: "help",
        ratio: "20",
      },
      {
        src: "home/sjsiceteamHome",
        alt: "A home page that contains a grey background with a hockey puck in the center of the page and beneath the puck is a button that contains the text: Employee Login.",
        title: "home",
        ratio: "20",
      },
      {
        src: "availability/sjsiceteamAvailability",
        alt: "A settings page displaying an Availability tab that is laid out with a navbar bar that extends across the top of the page and sidebar along the right with clickable links that extends to the bottom of the page, a sidebar with clickable links that extends all the way down the left of the page. These bars frame 1 panel to the right which contains the member's availability for a selected month.",
        title: "my availability",
        ratio: "20",
      },
      {
        src: "settings-response/sjsiceteamMyResponse",
        alt: "A settings page displaying a My Responses tab that is laid out with a navbar bar that extends across the top of the page and sidebar along the right with clickable links that extends to the bottom of the page, a sidebar with clickable links that extends all the way down the left of the page. These bars frame 1 panel to the right which contains a modal overlaying a calendar. The overlay contains details of an event and the member's response for the specific event.",
        title: "my response",
        ratio: "20",
      },
      {
        src: "settings/sjsiceteamSettings",
        alt: "A settings page displaying a Profile tab that is laid out with a navbar bar that extends across the top of the page and sidebar along the right with clickable links that extends to the bottom of the page, a sidebar with clickable links that extends all the way down the left of the page. These bars frame 1 panel to the right which contains the member's avatar and their miscelleanous account settings, such as the date they registered, their role and whether or not they wish to receive email reminders for events and forms.",
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
        "A mock up created in 3 days as a redesign proposal for GamersNexus.net",
    },
    filedetails: {
      active: true,
      location: "https://gamersnexus.vercel.app/",
      status: "In Orbit",
      source: "https://github.com/mattcarlotta/gamersnexus",
    },
    preview: {
      alt: "A centered logo that contains white text whichs states Gamers Nexus with a button underneath that states: View Latest News.",
      ariaLabel: "Navigate to the gamersnexus project page",
      src: "gamersnexus/gamernexusLogo",
    },
    snapshotdirectory: "gamersnexus",
    snapshots: [
      {
        src: "chart/gamernexusChart",
        alt: "A guides page that is laid out with a navbar bar that extends across the top of the page and sidebar along the right with clickable links that extends to the bottom of the page. Underneath the navbar is an article that displays an interactive chart.",
        title: "chart",
        ratio: "20",
      },
      {
        src: "interactive-chart/gamernexusInteractiveChart",
        alt: "A guides page that is laid out with a navbar bar that extends across the top of the page and sidebar along the right with clickable links that extends to the bottom of the page. Underneath the navbar is an article that displays an interactive filtered chart.",
        title: "chart filtered",
        ratio: "20",
      },
      {
        src: "tweet/gamernexusTweet",
        alt: "A news page that is laid out with a navbar bar that extends across the top of the page and sidebar along the right with clickable links that extends to the bottom of the page. Underneath the navbar is an article that displays sources to the article which contain embedded tweets from Twitter.",
        title: "embedded tweet",
        ratio: "20",
      },
      {
        src: "video/gamernexusVideo",
        alt: "A news page that is laid out with a navbar bar that extends across the top of the page and sidebar along the right with clickable links that extends to the bottom of the page. Underneath the navbar is an article that contains an interactive embedded Youtube video.",
        title: "embedded video",
        ratio: "20",
      },
      {
        src: "home/gamernexusHome",
        alt: "A home page that contains a dark background with a centered logo that contains white text whichs states Gamers Nexus with a button underneath that states: View Latest News.",
        title: "home",
        ratio: "20",
      },
      {
        src: "news/gamernexusNews",
        alt: "A news page that is laid out with a navbar bar that extends across the top of the page and sidebar along the right with clickable links that extends to the bottom of the page. Underneath the navbar is a list of clickable news articles.",
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
        "An npm package that automatically loads environment variables from a predefined Env variable",
    },
    filedetails: {
      active: true,
      location: "https://www.npmjs.com/package/@noshot/env",
      status: "In Orbit",
      source: "https://github.com/no-shot/env",
    },
    preview: {
      alt: "noshotenv-preview",
      ariaLabel: "Navigate to the @noshot/env project page",
      src: "noshotenv/noshotenvLogoPreview",
    },
    snapshotdirectory: "noshotenv",
    snapshots: [
      {
        src: "logo/noshotenvLogo",
        alt: "A logo with a dark grey background with red text framed inside a rectangle that states: No Shot!",
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
        "An educational website to help up-and-coming developers understand React’s newly introduced hooks",
    },
    filedetails: {
      active: false,
      status: "Decommissioned",
      source: "https://github.com/mattcarlotta/react-hooks",
    },
    preview: {
      alt: "A preview of a page that contains an interactive temperature slider. Underneath the slider is the source code which you can copy or play around with in a Codesandbox.",
      ariaLabel: "Navigate to the React Hooks Guide project page",
      src: "reacthooks/reacthooksPreview",
    },
    snapshotdirectory: "reacthooks",
    snapshots: [
      {
        src: "api/reacthooksAPI",
        alt: "An API page that is laid out with a navbar bar that extends across the top of the page and sidebar along the right with clickable links that extends to the bottom of the page. These bars frame content to the left that contains an article explaining how to use a callback function in React.",
        title: "api",
        ratio: "20",
      },
      {
        src: "examples/reacthooksExamples",
        alt: "An examples page that is laid out with a navbar bar that extends across the top of the page and sidebar along the right with clickable links that extends to the bottom of the page. hese bars frame content to the left that contains an interactive drag and drop example.",
        title: "examples",
        ratio: "20",
      },
      {
        src: "home/reacthooksHome",
        alt: "A home page that is laid out with a navbar bar that extends across the top of the page and sidebar along the right with clickable links that extends to the bottom of the page. These bars frame content to the left that contains a dark logo with a white hook surrounding the React Javascript logo. Underneath the logo is the title: React Hooks Guide.",
        title: "home",
        ratio: "20",
      },
      {
        src: "mobile/reacthooksMobile",
        alt: "A home page displayed within a mobile device that is laid out with a navbar bar that extends across the top of the page. Underneath the navbar is a dark logo with a white hook surrounding the React Javascript logo. Underneath the logo is the title: React Hooks Guide. At the bottom right of the page is a hamburger icon that overlays an interactive sidebar when clicked.",
        title: "mobile layout",
        ratio: "35",
      },
      {
        src: "pad/reacthooksPad",
        alt: "A home page displayed within an iPad that is laid out with a navbar bar that extends across the top of the page and sidebar along the right with clickable links that extends to the bottom of the page. These bars frame content to the left that contains a dark logo with a white hook surrounding the React Javascript logo. Underneath the logo is the title: React Hooks Guide.",
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
        "A fully-loaded custom NextJS boilerplate for server-side solutions",
    },
    filedetails: {
      active: false,
      status: "Archived",
      source: "https://github.com/mattcarlotta/nextjs-ssr-kit",
    },
    preview: {
      alt: "A logo that contains black text that states Next.JS and underneath is blue text that states SSR Kit",
      ariaLabel: "Navigate to the Next SSR Kit project page",
      src: "nextssrkit/nextssrkitPreview",
    },
    snapshotdirectory: "nextssrkit",
    snapshots: [
      {
        src: "api/nextssrkitExampleAPI",
        alt: "A demo page that contains a centered list of users and their details.",
        title: "ex. api",
        ratio: "20",
      },
      {
        src: "create/nextssrkitExampleAPICreate",
        alt: "A create user form modal that overlays the demo page. The form contains inputs to create a new user that will be saved to a database.",
        title: "ex. api create",
        ratio: "20",
      },
      {
        src: "edit/nextssrkitExampleAPIEdit",
        alt: "A demo page that displays an inline Edit User form that contains inputs to update and save the user's details in a database.",
        title: "ex. api edit",
        ratio: "20",
      },
      {
        src: "home/nextssrkitHome",
        alt: "A home page that displays a centered NextJS SSR Kit logo with button underneath it that contains See Example. The button links the user to an interactive demo page to create, read, delete and update a user in a database.",
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
        "A web application to create, manage, and send personalized updates to a list of subscribers",
    },
    filedetails: {
      active: false,
      status: "Decommissioned",
      source: "https://github.com/mattcarlotta/subskribble",
    },
    preview: {
      alt: "A preview of a Transactions page that contains a dark grey sidebar with clickable links and a table to the right of it that contains a list of transactions and their details.",
      ariaLabel: "Navigate to the Subskribble project page.",
      src: "subskribble/subskribblePreview",
    },
    snapshotdirectory: "subskribble",
    snapshots: [
      {
        src: "plan/subskribbleCreatePlan",
        alt: "A Create Plan page that contains form inputs.",
        title: "create plan",
        ratio: "35",
      },
      {
        src: "template/subskribbleCreateTemplate",
        alt: "A Create Template page that contains form inputs on the left that create an email template. To right of the form is a template preview which displays an example of what an email would look like using the template.",
        title: "create template",
        ratio: "20",
      },
      {
        src: "dashboard/subskribbleDashboard",
        alt: "A dashbard page that contains a dark grey navbar at the top. Underneath are two panels: An overview of the users financials and an iteractive chart that displays the number of subscriber sign ups and cancellations.",
        title: "dashboard",
        ratio: "20",
      },
      {
        src: "notes/subskribbleNotes",
        alt: "A transactions page that contains a dark grey navbar at the top and a table list of transactions underneath it. The focus of the image is on the far right side of the navbar which displays a list of notifications from subscribers that overlays the transactions table.",
        title: "notifications",
        ratio: "20",
      },
      {
        src: "profile/subskribbleProfile",
        alt: "A settings page that contains a dark grey navbar at the top and a dark grey sidebar with clickable links. These bars frame a settings panel that contains the user's avatar and a form to update their account details.",
        title: "profile",
        ratio: "20",
      },
      {
        src: "register/subskribbleSubRegister",
        alt: "A Subscriber Registration form page that contains a 3-step progress indicator. Underneath the progress indicator are four panels that display the user's contact info, their payment details, the plan they chosen to sign up for, and the total cost to subsribe to the plan.",
        title: "registration",
        ratio: "20",
      },
      {
        src: "refunds/subskribbleRefundTrans",
        alt: "A Refund/Credit Transaction form page that contains several inputs to refund/credit a transaction associated to a subscriber's account.",
        title: "refunds",
        ratio: "35",
      },
      {
        src: "message/subskribbleSendMessage",
        alt: "A Send Message page that contains form inputs on the left that use a predefined email predefined template. To right of the form is a preview which displays an example of what the email message would look like using the selected template.",
        title: "send message",
        ratio: "20",
      },
      {
        src: "subs/subskribbleSubs",
        alt: "A Subscribers page that contains a dark grey navbar at the top and a table list of active and inactive subsribers underneath it. The focus is on the table where a More Actions button has been clicked a drop down of options is displayed.",
        title: "subscribers",
        ratio: "20",
      },
      {
        src: "transactions/subskribbleTransactions",
        alt: "A transactions page that contains a dark grey navbar at the top and a dark grey sidebar with clickable links. These bars frame a list of transactions within a table.",
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
      location:
        "https://composable-styled-components-website-carlottamatt.vercel.app/",
      status: "Decommissioned",
      source: "https://github.com/mattcarlotta/composable-styled-components",
    },
    preview: {
      alt: "A centered logo of the word Composable and underneath it is some source code within a black box.",
      ariaLabel: "Navigate to the Composable Styled Components project page.",
      src: "composable/composablePreview",
    },
    snapshotdirectory: "composable",
    snapshots: [
      {
        src: "api/composableAPI",
        alt: "An API page that displays examples of the Composable functions and how to use them.",
        title: "api",
        ratio: "20",
      },
      {
        src: "demos/composableDemos",
        alt: "A Demo page that displays examples of the Composable functions and how to use them with example source code.",
        title: "demos",
        ratio: "20",
      },
      {
        src: "home/composableHome",
        alt: "The Home page of the Composable website, which displays a centered logo of the word Composable and underneath it is some source code within a black box.",
        title: "home",
        ratio: "20",
      },
      {
        src: "releases/composableReleases",
        alt: "The Releases page of the Composable website, which displays a list of released versions and change notes.",
        title: "releases",
        ratio: "20",
      },
      {
        src: "search/composableSearch",
        alt: "An example of the search functionality within the Composable website, which integrates with the Algolia search engine.",
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
      description: "A lightweight, simple, markdown editor for React",
    },
    filedetails: {
      active: false,
      status: "Decommissioned",
      location: "https://mattcarlotta.github.io/react-smde",
      source: "https://github.com/mattcarlotta/react-smde",
    },
    preview: {
      alt: "A screenshot of some Markdown code being previewed within the React SMDE package. React SMDE is a standalone package that allows users to edit and preview Markdown code.",
      ariaLabel: "Navigate to the React SMDE project page",
      src: "reactsmde/reactsmdePreview",
    },
    snapshotdirectory: "reactsmde",
    snapshots: [
      {
        src: "code/reactsmdeCode",
        alt: "An example of how source code that is used to display syntax highlighting within React SMDE.",
        title: "ex. code",
        ratio: "20",
      },
      {
        src: "preview/reactsmdeCodePreview",
        alt: "An example of what syntax highlighting looks like within React SMDE's preview.",
        title: "ex. code preview",
        ratio: "20",
      },
      {
        src: "source/reactsmdeSource",
        alt: "A pop up modal that contains copyable source code of how to use syntax highlighting  within React SMDE.",
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
    id: "git-gnome-terminal",
    head: {
      title: "git gnome terminal",
      url: "/git-gnome-terminal",
      description:
        "A bash script to display git status of a git tracked folder",
    },
    preview: {
      alt: "A preview of a terminal running a bash script that display git status of a git tracked folder.",
      ariaLabel: "Navigate to the Git Gnome-Terminal project page",
      src: "gitgnometerm/gitgnomePreview",
    },
    filedetails: {
      active: true,
      status: "In Orbit",
      source:
        "https://gist.github.com/mattcarlotta/38a350ac259bf381f0e84df8fecb9508",
    },
    snapshotdirectory: "gitgnometerm",
    snapshots: [
      {
        src: "clean/gitgnomeClean",
        alt: "A preview of a terminal displaying the logged in user, their current directory, the git branch they've checked out, and the current branch's status.",
        title: "clean folder",
        ratio: "20",
      },
      {
        src: "unstaged/gitgnomeUnstaged",
        alt: "A preview of a terminal displaying the logged in user, their current directory, the git branch they've checked out, and the branch's status which is currently unstaged",
        title: "unstaged files",
        ratio: "20",
      },
      {
        src: "staged/gitgnomeStaged",
        alt: "A preview of a terminal displaying the logged in user, their current directory, the git branch they've checked out, and the branch's status which is currently staged after they have run 'git add .'.",
        title: "staged files",
        ratio: "20",
      },
      {
        src: "committed/gitgnomeCommitted",
        alt: "A preview of a terminal displaying the logged in user, their current directory, the git branch they've checked out, and the branch's status which is currently comitted and in sync with a remote branch.",
        title: "committed files",
        ratio: "20",
      },
    ],
    tech: ["gnome-terminal", "bash", "shell"],
  },
  {
    id: "alias-dirs",
    head: {
      title: "alias dirs",
      url: "/alias-dirs",
      description:
        "A utility function that automatically creates aliased import directories for babel",
    },
    preview: {
      alt: "A screenshot of alias dirs package's READEME on npm.com.",
      ariaLabel: "Navigate to the Alias Dirs project page",
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
        "A fully-loaded custom boilerplate using MongoDB, Express, React/Redux and Node for client-side solutions",
    },
    filedetails: {
      active: false,
      status: "Archived",
      source: "https://github.com/mattcarlotta/fullstack-mern-kit",
    },
    preview: {
      alt: "A dark grey background square with a centered logo with 4 circlular logos of: Mongodb, Express, ReactJS and NodeJS. Underneath those logos is the text M, E, R, N that corresponds their respective circle logos.",
      ariaLabel: "Navigate to the Fullstack M.E.R.N. Kit project page",
      src: "mernkit/mernkitPreview",
    },
    snapshotdirectory: "mernkit",
    snapshots: [
      {
        src: "logo/mernkitLogo",
        alt: "A dark grey background square with a centered logo with 4 circlular logos of: Mongodb, Express, ReactJS and NodeJS. Underneath those logos is the text M, E, R, N that corresponds their respective circle logos.",
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
        "An experimental website for creating, editing, and reviewing campground sites from all over California",
    },
    filedetails: {
      active: false,
      status: "Decommissioned",
      source: "https://github.com/mattcarlotta/campground-app-frontend",
    },
    preview: {
      alt: "A screenshot of a reviewed campground within the Yelp Camp application.",
      ariaLabel: "Navigate to the Yelp Camp project page",
      src: "yelpcamp/yelpcampPreview",
    },
    snapshotdirectory: "yelpcamp",
    snapshots: [
      {
        src: "app/yelpcampPreview",
        alt: "A screenshot of White Wolf campground page that contains a navbar at the top and underneath it is an image of the White Wolf campground's sign. Underneath the image is the campground's name and a brief description of it. To the right of the image and description is a Google map pinpointing its location and the current weather for the area.",
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
      alt: "A cartoony logo of a purple Game Cube controller.",
      ariaLabel: "Navigate to the Autorun GCN project page.",
      src: "autorungcn/autorunGCNPreview",
    },
    snapshotdirectory: "autorungcn",
    snapshots: [
      {
        src: "logo/autorunGCNLogo",
        alt: "A cartoony logo of a purple Game Cube controller.",
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
      alt: "A white circular logo with a green fan within the center of the circle.",
      ariaLabel: "Navigate to the Nvidia Fan Controller App project page.",
      src: "nvfcapp/nvfcappPreview",
    },
    snapshotdirectory: "nvfcapp",
    snapshots: [
      {
        src: "logo/nvfcappLogo",
        alt: "A white circular logo with a green fan within the center of the circle.",
        title: "logo",
        ratio: "35",
      },
      {
        src: "settings/nvfcappSettings",
        alt: "A screenshot of the application that displays a nav bar at the top and underneath it are the current user's system details: The system information, the GPU information, the GPU utilization and the GPU's temperature and fan speed.",
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
        "A standalone Mac OS application that builds and compiles custom SSDTs for X99, Z170, Z97, and H97 systems running Mac OS",
    },
    filedetails: {
      active: false,
      status: "Archived",
      source: "https://github.com/mattcarlotta/ssdtGenApp",
    },
    preview: {
      alt: "A circular gradient dark blue to light blue logo with white in center that states sG.",
      ariaLabel: "Navigate to the ssdtGen App project page",
      src: "ssdtgenapp/ssdtgenappPreview",
    },
    snapshotdirectory: "ssdtgenapp",
    snapshots: [
      {
        src: "app/ssdtgenappPreview",
        alt: "A screenshot of the application generating SSDTs for the current user's system.",
        title: "app",
        ratio: "35",
      },
      {
        src: "example/ssdtgenappExample",
        alt: "A screenshot of a generated NVMe SSDT for the current user's system.",
        title: "ex. ssdt",
        ratio: "20",
      },
      {
        src: "logo/ssdtgenappLogo",
        alt: "A circular gradient dark blue to light blue logo with white in center that states sG.",
        title: "logo",
        ratio: "20",
      },
    ],
    tech: ["bash", "swift", "asl"],
  },
];

export default Applications;
