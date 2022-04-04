import Head from 'next/head'
import { useEffect } from 'react'
import ImageContext from '~components/ImageContext'
import Body from '~components/Layout/Body'
import Footer from '~components/Layout/Footer'
import Header from '~components/Layout/Header'
import Main from '~components/Layout/Main'
import ScrollHeightContext from '~components/ScrollHeightContext'
import '~styles/globals.scss'
import type { AppProps } from '~types'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) jssStyles.parentElement?.removeChild(jssStyles)
  }, [])

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
          <Header />
          <Main>
            <Body data-testid="body">
              <Component {...pageProps} />
            </Body>
            <Footer />
          </Main>
        </ImageContext>
      </ScrollHeightContext>
    </>
  )
}
