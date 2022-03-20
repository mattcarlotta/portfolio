/* istanbul ignore file */
import { css, Global } from "@emotion/react";
import { useImageContext } from "~components/ImageContext";

export const GlobalStylesheet = (): JSX.Element => (
  <Global
    styles={css`
      @font-face {
        font-family: "Elemental";
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url("/fonts/Elemental.ttf") format("truetype");
      }

      @font-face {
        font-family: "Mukta";
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url("/fonts/Mukta.ttf") format("truetype");
      }

      #__next,
      body,
      html {
        height: 100%;
        width: 100%;
      }

      body {
        margin: 0;
        color: #fff;
        background: ${useImageContext() ? "url('/bg.webp')" : "url('/bg.png')"};
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-color: #010007;
        font-family: "Elemental", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
      }

      @keyframes pulse {
        0% {
          background-color: #00020e;
        }
        50% {
          background-color: #00264d;
        }
        100% {
          background-color: #00020e;
        }
      }

      @keyframes solar-rotate {
        0% {
          transform: rotateX(0) rotateY(0) rotateZ(0);
        }
        100% {
          transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
        }
      }

      * {
        box-sizing: border-box;
        -ms-overflow-style: none;
        scrollbar-width: none;
        ::-webkit-scrollbar {
          display: none;
        }
      }

      :-moz-focus-inner {
        border: 0;
      }
    `}
  />
);

export default GlobalStylesheet;
