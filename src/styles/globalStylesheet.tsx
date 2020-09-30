/* istanbul ignore file */
import { css, Global } from "@emotion/core";

export const GlobalStylesheet = (): JSX.Element => (
  <Global
    styles={css`
      @font-face {
        font-family: "Jura Medium";
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url("/fonts/Jura-Medium.ttf") format("truetype");
      }

      #__next,
      body,
      html {
        height: 100%;
        width: 100%;
      }

      body {
        margin: 0;
        font-family: "Jura Medium", -apple-system, BlinkMacSystemFont,
          "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans",
          "Droid Sans", "Helvetica Neue", sans-serif;
        background: url("./bg.webp");
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-color: #010007;
        color: #fff;
      }

      *,
      :after,
      :before {
        box-sizing: border-box;
      }

      :-moz-focus-inner {
        border: 0;
      }
    `}
  />
);

export default GlobalStylesheet;
