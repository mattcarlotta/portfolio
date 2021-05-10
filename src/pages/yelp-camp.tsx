import * as React from "react";
import Page from "~components/Layout/Page";
import { ReactElement } from "~types";

const YelpCamp = (): ReactElement => (
  <Page
    description="An experimental website for creating, editing, and reviewing campground sites from all over California. Utilizing google maps, the OpenWeatherMap API, and user reviews, campers can plan their journey ahead of time."
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
