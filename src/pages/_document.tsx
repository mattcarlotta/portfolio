/* eslint-disable react/no-invalid-html-attribute  */
import Document, { Head, Html, Main, NextScript } from 'next/document'
import packageJson from '../../package.json'

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#000000" />
          <meta
            name="robots"
            content="follow, index, max-image-preview:large"
          />
          <meta name="build version" content={packageJson.version} />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/logo_192x192.png"
          />
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
    )
  }
}
