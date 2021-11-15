import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement } from "~types";

export type HeaderProps = {
  description: string;
  title: string;
  type: string;
};

const Header = ({ description, title, type }: HeaderProps): ReactElement => {
  const { asPath } = useRouter();
  return (
    <Head>
      <title>
        {title
          .split(" ")
          .map(str => str.charAt(0).toUpperCase().concat(str.slice(1)))
          .join(" ")
          .concat(` ${title && "-"} ${description}`)}
        &nbsp;| Matt Carlotta
      </title>
      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_CLIENT}${asPath}`}
      />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_CLIENT}${asPath}`}
      />
      <meta property="og:type" content={type} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />,
    </Head>
  );
};

Header.defaultProps = {
  title: "",
  description:
    "A fullstack developer who is passionate about open-source projects, helping the web development community, and building SEO optimized applications",
  type: "website",
};

export default Header;
