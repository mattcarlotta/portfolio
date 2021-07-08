import * as React from "react";
import Bars from "~components/Layout/Bars";
import Card from "~components/Layout/Card";
import CardTitle from "~components/Layout/CardTitle";
import Category from "~components/Layout/Category";
import Flex from "~components/Layout/Flex";
import Image from "~components/Layout/Image";
import Apps from "~components/Layout/Apps";
import Explorations from "~components/Layout/Explorations";
import Head from "~components/Navigation/Header";
import Link from "~components/Navigation/Link";
import OutsideLink from "~components/Navigation/OutsideLink";
import { ReactElement } from "~types";

const Home = (): ReactElement => (
  <>
    <Head title="Home" url="/" description="My personal website." />
    <Category>Applications</Category>
    <Flex data-testid="home-page" justify="center" flexwrap margin="0 0 80px 0">
      {Apps.map(({ title, href, src, alt, ariaLabel }, index) => (
        <Link
          dataTestId={title}
          ariaLabel={ariaLabel}
          key={href}
          padding="0px"
          href={`/${href}`}
          scroll={false}
        >
          <Card custom={index}>
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
    <Category>Explorations</Category>
    <Flex data-testid="home-page" justify="center" flexwrap>
      {Explorations.map(({ title, href, src, alt, ariaLabel }, index) => (
        <OutsideLink
          dataTestId={title}
          ariaLabel={ariaLabel}
          textDecoration="none"
          key={href}
          padding="0px"
          href={`https://codesandbox.io/s/${href}`}
        >
          <Card custom={index}>
            <CardTitle>{title}</CardTitle>
            <Bars />
            <Image
              src={`projects/${src}`}
              alt={alt}
              styles="max-height: 180px;max-width: 250px; margin: 0 auto; border-radius: 4px;"
              containerStyle="cursor: pointer;align-items: center;display: flex;width: 85%;height: 80%;float: left;margin: 15px 25px;text-align: center;"
            />
          </Card>
        </OutsideLink>
      ))}
    </Flex>
  </>
);

export default Home;
