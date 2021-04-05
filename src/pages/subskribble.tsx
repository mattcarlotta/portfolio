import * as React from "react";
import Page from "~components/Layout/Page";
import { NextPage } from "~types";

const Subskribble: NextPage = () => (
  <Page
    description="an experimental web application to create, manage, and send personalized updates to a list of subscribers. the application also included subscriber plans, plan promotionals, payment options, account charting and analytics, notifications, and an image cdn microservice."
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
        title: "create plan",
      },
      {
        src: "subskribbleCreateTemplate",
        alt: "create-template-preview",
        title: "create template",
      },
      {
        src: "subskribbleDashboard",
        alt: "dashboard-preview",
        title: "dashboard",
      },
      {
        src: "subskribbleNotes",
        alt: "notifications-preview",
        title: "notifications",
      },
      {
        src: "subskribbleProfile",
        alt: "profile-preview",
        title: "profile",
      },
      {
        src: "subskribbleSubRegister",
        alt: "subcriber-registration-preview",
        title: "registration",
      },
      {
        src: "subskribbleRefundTrans",
        alt: "refund-transactions-preview",
        title: "refunds",
      },
      {
        src: "subskribbleSendMessage",
        alt: "send-message-preview",
        title: "send message",
      },
      {
        src: "subskribbleSubs",
        alt: "subscribers-preview",
        title: "subscribers",
      },
      {
        src: "subskribbleTransactions",
        alt: "subskribble-transactions-preview",
        title: "transactions",
      },
    ]}
    tech={["mongodb", "expressjs", "reactjs", "nodejs"]}
  />
);

export default Subskribble;
