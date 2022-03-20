import { Fragment, useEffect } from "react";
import Head from "next/head";
import Body from "~components/Layout/Body";
import Header from "~components/Layout/Header";
import ImageContext from "~components/ImageContext";
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
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
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
    </Fragment>
  );
};

export default App;
