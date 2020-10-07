import Head from "next/head";
import { CacheProvider } from "@emotion/core";
import { cache } from "emotion";
import Body from "~components/Layout/Body";
import Header from "~components/Layout/Header";
import Footer from "~components/Layout/Footer";
import Main from "~components/Layout/Main";
import GlobalStylesheet from "~styles/globalStylesheet";
import { FC, AppProps } from "~types";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <CacheProvider value={cache}>
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
  </CacheProvider>
);

export default App;
