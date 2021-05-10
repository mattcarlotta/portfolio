import * as React from "react";
import Head from "next/head";
import Body from "~components/Layout/Body";
import Header from "~components/Layout/Header";
import Footer from "~components/Layout/Footer";
import Main from "~components/Layout/Main";
import GlobalStylesheet from "~styles/globalStylesheet";
import { AppProps, ReactElement } from "~types";

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <Main>
      <Header />
      <Body data-testid="body">
        <Component {...pageProps} />
      </Body>
      <Footer />
    </Main>
    <GlobalStylesheet />
  </>
);

export default App;
