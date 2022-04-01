import { useEffect } from "react";
import Head from "next/head";
import Body from "~components/Layout/Body";
import Header from "~components/Layout/Header";
import ImageContext from "~components/ImageContext";
import ScrollHeightContext from "~components/ScrollHeightContext";
import Footer from "~components/Layout/Footer";
import Main from "~components/Layout/Main";
import Wrapper from "~components/Layout/Wrapper";
import GlobalStylesheet from "~styles/globalStylesheet";
import type { AppProps, ReactElement } from "~types";

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) jssStyles.parentElement?.removeChild(jssStyles);
  }, []);

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
          <Wrapper>
            <Main>
              <Header />
              <Body data-testid="body">
                <Component {...pageProps} />
              </Body>
              <Footer />
            </Main>
          </Wrapper>
          <GlobalStylesheet />
        </ImageContext>
      </ScrollHeightContext>
    </>
  );
};

export default App;
