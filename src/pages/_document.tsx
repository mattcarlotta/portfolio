import Document, { Html, Head, Main, NextScript } from "next/document";
import packageJson from "../../package.json";

class CustomDocument extends Document {
  render = (): JSX.Element => (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta name="build version" content={packageJson.version} />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/ITLogo_192x192.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="preload"
          href="/fonts/elemental.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Mukta.ttf"
          as="font"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default CustomDocument;
