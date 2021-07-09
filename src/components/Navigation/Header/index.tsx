import Head from "next/head";
import { ReactElement } from "~types";

export type HeaderProps = {
  description: string;
  title: string;
  type: string;
  url: string;
};

const Header = ({
  description,
  title,
  type,
  url,
}: HeaderProps): ReactElement => (
  <Head>
    <title>
      {title
        .split(" ")
        .map(str => str.charAt(0).toUpperCase().concat(str.slice(1)))
        .join(" ")}
      &nbsp;- Matt Carlotta
    </title>
    <link rel="canonical" href={`${process.env.NEXT_PUBLIC_CLIENT}${url}`} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta
      property="og:url"
      content={`${process.env.NEXT_PUBLIC_CLIENT}${url}`}
    />
    <meta property="og:type" content={type} />
  </Head>
);

Header.defaultProps = {
  description: "My personal website.",
  type: "website",
};

export default Header;
