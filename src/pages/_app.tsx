import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import Body from "~components/Layout/Body";
import Header from "~components/Layout/Header";
import Footer from "~components/Layout/Footer";
import Main from "~components/Layout/Main";
import GlobalStylesheet from "~styles/globalStylesheet";
import { AppProps, ReactElement } from "~types";

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  const router = useRouter();

  const handleExitComplete = () => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  };

  return (
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
          <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Body>
        <Footer />
      </Main>
      <GlobalStylesheet />
    </>
  );
};

export default App;
