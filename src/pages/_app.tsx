import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import Body from "~components/Layout/Body";
import Header from "~components/Layout/Header";
import ImageContext from "~components/ImageContext";
import Footer from "~components/Layout/Footer";
import Main from "~components/Layout/Main";
import Wrapper from "~components/Layout/Wrapper";
import GlobalStylesheet from "~styles/globalStylesheet";
import type { AppProps, ReactElement } from "~types";

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  const router = useRouter();

  const handleExitComplete = () => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  };

  React.useEffect(() => {
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
      <ImageContext>
        <Wrapper>
          <Main>
            <Header />
            <Body data-testid="body">
              <AnimatePresence
                exitBeforeEnter
                onExitComplete={handleExitComplete}
              >
                <Component {...pageProps} key={router.route} />
              </AnimatePresence>
            </Body>
            <Footer />
          </Main>
        </Wrapper>
      </ImageContext>
      <GlobalStylesheet />
    </>
  );
};

export default App;
