import Page from "~components/Layout/Page";
import { FC } from "~types";

const YelpCamp: FC = (): JSX.Element => (
  <Page
    description="An experimental website for creating, editing, and reviewing campground sites from all over California. Utilizing Google maps, the OpenWeatherMap API, and user reviews, campers can plan their journey ahead of time."
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
        title: "Ex. Campground",
      },
    ]}
    tech={["MongoDB", "ExpressJS", "ReactJS", "NodeJS"]}
  />
);

export default YelpCamp;
