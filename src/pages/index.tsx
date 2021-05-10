import * as React from "react";
import Bars from "~components/Layout/Bars";
import Card from "~components/Layout/Card";
import CardTitle from "~components/Layout/CardTitle";
import Flex from "~components/Layout/Flex";
import Image from "~components/Layout/Image";
import Projects from "~components/Layout/Projects";
import Head from "~components/Navigation/Header";
import Link from "~components/Navigation/Link";
import { ReactElement } from "~types";

const Home = (): ReactElement => (
  <>
    <Head title="Home" url="/" description="My personal website." />
    <Flex data-testid="home-page" justify="center" flexwrap>
      {Projects.map(({ title, href, src, alt, ariaLabel }) => (
        <Link
          dataTestId={title}
          ariaLabel={ariaLabel}
          key={href}
          padding="0px"
          href={`/${href}`}
        >
          <Card>
            <CardTitle>{title}</CardTitle>
            <Bars />
            <Image
              src={`projects/${src}`}
              alt={alt}
              styles="max-height: 180px;max-width: 250px; margin: 0 auto; border-radius: 4px;"
              containerStyle="cursor: pointer;align-items: center;display: flex;width: 85%;height: 80%;float: left;margin: 15px 25px;text-align: center;"
            />
          </Card>
        </Link>
      ))}
    </Flex>
  </>
);

export default Home;
