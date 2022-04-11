import { CacheProvider, EmotionCache } from '@emotion/react'
import Head from 'next/head'
import ImageContext from '~components/ImageContext'
import HEADERLINKS from '~components/Layout/HEADERLINKS'
import Link from '~components/Navigation/Link'
import ScrollHeightContext from '~components/ScrollHeightContext'
import '~styles/globals.scss'
import type { AppProps } from '~types'
import createEmotionCache from '~utils/emotionCache'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <ScrollHeightContext>
        <ImageContext>
          <nav data-testid="head" className="p-4 lg:mb-0 lg:pt-10">
            <div className="mx-auto flex max-w-sm flex-wrap place-content-around items-center md:flex-nowrap">
              {HEADERLINKS.map(({ Icon, href, page }) => (
                <Link
                  key={page}
                  className="my-1.5 p-2.5 text-tiny lg:my-0 lg:mx-2 lg:p-1"
                  dataTestId={`go-to-${page}`}
                  ariaLabel={`Navigate to my ${page} page`}
                  href={href}
                >
                  <Icon className="mr-2 text-md" />
                  {page}
                </Link>
              ))}
            </div>
          </nav>
          <main className="mx-auto h-full w-full max-w-main px-2.5 lg:px-0">
            <div className="min-h-body p-2.5 md:p-0" data-testid="body">
              <Component {...pageProps} />
            </div>
            <footer data-testid="footer" className="mt-14 pb-2 text-center">
              <p className="text-tiny font-bold text-accent">
                &#169;{new Date().getFullYear()} matt carlotta
              </p>
            </footer>
          </main>
        </ImageContext>
      </ScrollHeightContext>
    </CacheProvider>
  )
}
