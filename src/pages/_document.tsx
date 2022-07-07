import Document, { Head, Html, Main, NextScript } from 'next/document'
import packageJson from '../../package.json'

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta name="theme-color" content="#000000" />
          <meta name="robots" content="all" />
          <meta name="googlebot" content="all" />
          <meta name="build version" content={packageJson.version} />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/logo_192x192.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            rel="preload"
            href="/fonts/Elemental.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link rel="dns-prefetch" href="https://images.ctfassets.net/" />
          <link rel="preload" as="image" href="/bg.webp" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
