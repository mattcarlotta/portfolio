const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const open = require("opener");

const { analyze, NEXT_PUBLIC_CLIENT, NODE_ENV } = process.env;

/* opens a browser window */
if (NODE_ENV === "development") open(NEXT_PUBLIC_CLIENT);

module.exports = {
  webpack(config, { isServer }) {
    /* adds custom plugins to client and server */
    config.plugins.push(
      ...[
        analyze &&
          new BundleAnalyzerPlugin({
            analyzerMode: "static",
            reportFilename: isServer
              ? "../analyze/server.html"
              : "./analyze/client.html",
          }),
      ].filter(Boolean),
    );

    /* return new config to next */
    return config;
  },
};
