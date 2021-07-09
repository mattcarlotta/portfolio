const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const { analyze } = process.env;

module.exports = {
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
