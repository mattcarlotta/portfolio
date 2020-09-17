require("./env");
const openBrowser = require("react-dev-utils/openBrowser");
const plugins = require("./config/plugins");

const { NODE_ENV, LOCALHOST } = process.env;

/* opens a browser window */
if (NODE_ENV === "development") openBrowser(LOCALHOST);

module.exports = {
  exportPathMap: () => ({
    "/": { page: "/" },
    "/project-aeon": { page: "/project-aeon" },
    "/composable-styled-components": { page: "/composable-styled-components" },
    "/sjs-ice-team": { page: "/sjs-ice-team" },
    "/nextjs-ssr-kit": { page: "/nextjs-ssr-kit" },
    "/react-smde": { page: "/react-smde" },
    "/alias-dirs": { page: "/alias-dirs" },
    "/react-hooks-guide": { page: "/react-hooks-guide" },
    "/subskribble": { page: "/subskribble" },
    "/fullstack-mern-kit": { page: "/fullstack-mern-kit" },
    "/yelp-camp": { page: "/yelp-camp" },
    "/nvfc-app": { page: "/nvfc-app" },
    "/ssdtgen-app": { page: "/ssdtgen-app" },
  }),
  webpack(config, { isServer }) {
    /* adds custom plugins to client and server */
    config.plugins.push(...plugins(isServer));

    /* return new config to next */
    return config;
  },
};
