import * as React from "react";
import Page from "~components/Layout/Page";
import { NextPage } from "~types";

const YelpCamp: NextPage = () => (
  <Page
    description="an experimental website for creating, editing, and reviewing campground sites from all over california. utilizing google maps, the openweathermap api, and user reviews, campers can plan their journey ahead of time."
    head={{
      title: "Yelp Camp",
      url: "/yelp-camp",
      description:
        "An experimental website for creating, editing, and reviewing campground sites from all over California.",
    }}
    filedetails={{
      active: false,
      status: "Decommissioned",
      source: "https://github.com/mattcarlotta/campground-app-frontend",
    }}
    snapshotdirectory="yelpcamp"
    snapshots={[
      {
        src: "yelpcampPreview",
        alt: "yelp-camp-preview",
        title: "ex. campground",
      },
    ]}
    tech={["mongodb", "expressjs", "reactjs", "nodejs"]}
  />
);

export default YelpCamp;
