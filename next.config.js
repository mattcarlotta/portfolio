const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const address = require("address");

const { analyze } = process.env;

console.log(`Remote URL http://${address.ip()}:3000`);

module.exports = {
  webpack5: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
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
