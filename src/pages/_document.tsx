/* eslint-disable react/no-invalid-html-attribute */
// import { ServerStyleSheets } from '@material-ui/styles'
import createEmotionServer from '@emotion/server/create-instance'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import createEmotionCache from '~utils/emotionCache'
import packageJson from '../../package.json'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const cache = createEmotionCache()
    const { extractCriticalToChunks } = createEmotionServer(cache)
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) =>
          function EnhanceApp(props) {
            return <App emotionCache={cache} {...props} />
          }
      })

    const initialProps = await Document.getInitialProps(ctx)
    const emotionStyles = extractCriticalToChunks(initialProps.html)
    const emotionStyleTags = emotionStyles.styles.map(
      (style: { key: string; ids: Array<string>; css: string }) => (
        <style
          data-emotion={`${style.key} ${style.ids.join(' ')}`}
          key={style.key}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: style.css }}
        />
      )
    )
    return {
      ...initialProps,
      emotionStyleTags
    }
  }

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
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
