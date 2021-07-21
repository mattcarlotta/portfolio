import { Fragment } from "react";
import CardPreview from "~components/Layout/CardPreview";
import Flex from "~components/Layout/Flex";
import Head from "~components/Navigation/Header";
import { ReactElement } from "~types";

const HomePages = [
  {
    id: "projects",
    head: {
      title: "projects",
      url: "projects",
      description:
        "Projects that vary from fullstack web applications, to custom NPM packages, to standalone applications.",
    },
    preview: {
      alt: "projects-preview",
      ariaLabel: "Navigate to the Projects page.",
      src: "planets/projectsMin",
    },
  },
  {
    id: "explorations",
    head: {
      title: "explorations",
      url: "explorations",
      description:
        "Explorations that vary from project-specific problem solving, to ground-up custom components, to answering stackoverflow questions.",
    },
    preview: {
      alt: "explorations-preview",
      ariaLabel: "Navigate to the Explorations page.",
      src: "planets/explorationsMin",
    },
  },
  {
    id: "about",
    head: {
      title: "background",
      url: "about",
      description: "The journey to become a fullstack web developer.",
    },
    preview: {
      alt: "about-preview",
      ariaLabel: "Navigate to the About page.",
      src: "planets/aboutMin",
    },
  },
];

const Home = (): ReactElement => (
  <Fragment>
    <Head title="Home" url="/" />
    <Flex data-testid="home-page" margin="75px 0 0 0" justify="center" flexwrap>
      {HomePages.map(({ id, head, preview }, index) => (
        <CardPreview
          key={id}
          idx={index}
          {...head}
          {...preview}
          showInfo={false}
        />
      ))}
    </Flex>
  </Fragment>
);

export default Home;
