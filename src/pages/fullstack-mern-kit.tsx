import Page from "~components/Layout/Page";
import Link from "~components/Navigation/Link";
import { FC } from "~types";

const FullstackMERNKit: FC = (): JSX.Element => (
  <Page
    description={
      <>
        A fully-loaded custom boilerplate using MongoDB, Express, React/Redux
        and Node for client-side solutions. This website and several projects
        were once built using this boilerplate, but have since been archived in
        favor of the&nbsp;
        <Link
          ariaLabel="Navigate to the Next SSR Kit project page."
          dataTestId="nextjs-ssr-link"
          style={{ padding: 0, textDecoration: "underline" }}
          href="/nextjs-ssr-kit"
        >
          NextJS SSR Kit
        </Link>
        .
      </>
    }
    head={{
      title: "Fullstack M.E.R.N. Kit",
      url: "/fullstack-mern-kit",
      description:
        "A fully-loaded custom boilerplate using MongoDB, Express, React/Redux and Node for client-side solutions.",
    }}
    filedetails={{
      active: true,
      status: "Archived",
      source: "https://github.com/mattcarlotta/fullstack-mern-kit",
    }}
    snapshotdirectory="mernkit"
    snapshots={[
      {
        src: "mernkitPreview",
        alt: "mernkit-preview",
        title: "Logo",
      },
    ]}
    tech={["MongoDB", "ExpressJS", "ReactJS", "NodeJS"]}
  />
);

export default FullstackMERNKit;
