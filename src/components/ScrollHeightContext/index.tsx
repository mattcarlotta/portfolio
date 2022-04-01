/* istanbul ignore file */
import { createContext, useContext, useEffect, useRef, useState } from "react";
import throttle from "lodash.throttle";
import type { ReactElement, ReactNode } from "~types";

export const ScrollHeight = createContext({ clientHeight: 0, scrollHeight: 0 });

export const useScrollHeight = (): {
  clientHeight: number;
  scrollHeight: number;
} => {
  const context = useContext(ScrollHeight);
  if (!context) {
    throw new Error(
      "This component cannot be rendered outside the ScrollHeight component",
    );
  }
  return context;
};

const ScrollHeightProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const handleScroll = useRef(
    throttle(() => {
      setClientHeight(document.body.clientHeight);
      setScrollHeight(document.documentElement.scrollTop);
    }, 300),
  );

  useEffect(() => {
    setClientHeight(document.body.clientHeight);
    setScrollHeight(document.documentElement.scrollTop);

    window.addEventListener("scroll", handleScroll.current);

    return () => {
      window.removeEventListener("scroll", handleScroll.current);
    };
  }, []);

  return (
    <ScrollHeight.Provider value={{ clientHeight, scrollHeight }}>
      {children}
    </ScrollHeight.Provider>
  );
};

export default ScrollHeightProvider;
