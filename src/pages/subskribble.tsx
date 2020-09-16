import Page from "~components/Layout/Page";
import { FC } from "~types";

const Subskribble: FC = (): JSX.Element => (
  <Page
    description="An experimental web application to create, manage, and send personalized updates to a list of subscribers. The application also included subscriber plans, plan promotionals, payment options, account charting and analytics, notifications, and an image CDN microservice."
    head={{
      title: "Subskribble",
      url: "/subskribble",
      description:
        "A web application to create, manage, and send personalized updates to a list of subscribers.",
    }}
    filedetails={{
      active: false,
      status: "Decommissioned",
      source: "https://github.com/mattcarlotta/subskribble",
    }}
    snapshotdirectory="subskribble"
    snapshots={[
      {
        src: "subskribbleCreatePlan",
        alt: "create-plan-preview",
        title: "Create Plan",
      },
      {
        src: "subskribbleCreateTemplate",
        alt: "create-template-preview",
        title: "Create Template",
      },
      {
        src: "subskribbleDashboard",
        alt: "dashboard-preview",
        title: "Dashboard",
      },
      {
        src: "subskribbleNotes",
        alt: "notifications-preview",
        title: "Notifications",
      },
      {
        src: "subskribbleProfile",
        alt: "profile-preview",
        title: "Profile",
      },
      {
        src: "subskribbleRefundTrans",
        alt: "refund-transactions-preview",
        title: "Refund Transactions",
      },
      {
        src: "subskribbleSendMessage",
        alt: "send-message-preview",
        title: "Send Message",
      },
      {
        src: "subskribbleSubRegister",
        alt: "subcriber-registration-preview",
        title: "Subscriber Registration",
      },
      {
        src: "subskribbleSubs",
        alt: "subscribers-preview",
        title: "Subscribers",
      },
      {
        src: "subskribbleTransactions",
        alt: "subskribble-transactions-preview",
        title: "Transactions",
      },
    ]}
    tech={["MongoDB", "ExpressJS", "ReactJS", "NodeJS"]}
  />
);

export default Subskribble;
