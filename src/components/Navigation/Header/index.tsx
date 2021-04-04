import Head from "next/head";
import { HeaderProps } from "~types";

const Header = ({
  description,
  title,
  type,
  url,
}: HeaderProps): JSX.Element => (
  <Head>
    <title>{title} - Matt Carlotta</title>
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
