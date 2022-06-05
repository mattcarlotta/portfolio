import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ImageContext from '~components/Context/ImageContext'
import ScrollHeightContext from '~components/Context/ScrollHeightContext'
import HEADERLINKS from '~components/Layout/HEADERLINKS'
import Link from '~components/Navigation/Link'
import '~styles/globals.scss'
import type { AppProps } from '~types'
import { pageview } from '~utils/gtag'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
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
                  className="my-1.5 p-2.5 text-tiny lg:my-0 lg:mx-2"
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
                &#169;{new Date().getFullYear()} Matt Carlotta
              </p>
            </footer>
          </main>
        </ImageContext>
      </ScrollHeightContext>
    </>
  )
}
