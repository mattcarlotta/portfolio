import { Fragment } from "react";
import CardPreview from "~components/Layout/CardPreview";
import Apps from "~components/Layout/Apps";
import Category from "~components/Layout/Category";
import Explorations from "~components/Layout/Explorations";
import Flex from "~components/Layout/Flex";
import Head from "~components/Navigation/Header";
import Link from "~components/Navigation/Link";
import { ReactElement } from "~types";

const Home = (): ReactElement => (
  <Fragment>
    <Head title="Home" url="/" description="My personal website." />
    <Category>Applications</Category>
    <Flex
      data-testid="home-page"
      justify="center"
      flexwrap
      margin="0 0 150px 0"
    >
      {Apps.map(
        (
          {
            head: { title, url, description },
            preview: { alt, ariaLabel, src },
          },
          index,
        ) => (
          <Link
            dataTestId={title}
            ariaLabel={ariaLabel}
            key={url}
            padding="0px"
            href={`/projects${url}`}
            scroll={false}
          >
            <CardPreview
              alt={alt}
              idx={index}
              description={description}
              src={src}
              title={title}
            />
          </Link>
        ),
      )}
    </Flex>
    <Category>Explorations</Category>
    <Flex
      data-testid="home-page"
      justify="center"
      flexwrap
      margin="0 0 150px 0"
    >
      {Explorations.map(
        ({ title, description, href, src, alt, ariaLabel }, index) => (
          <Link
            dataTestId={title}
            ariaLabel={ariaLabel}
            key={href}
            padding="0px"
            href={`/explorations/${href}`}
            scroll={false}
          >
            <CardPreview
              alt={alt}
              idx={index}
              description={description}
              src={src}
              title={title}
            />
          </Link>
        ),
      )}
    </Flex>
  </Fragment>
);

export default Home;
