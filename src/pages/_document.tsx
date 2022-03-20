/* eslint-disable react/no-invalid-html-attribute */
import * as React from "react";
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";
import packageJson from "../../package.json";

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  }

  render = (): JSX.Element => (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta name="build version" content={packageJson.version} />
        <link rel="apple-touch-icon" sizes="192x192" href="/logo_192x192.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="preload"
          href="/fonts/Elemental.ttf"
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
