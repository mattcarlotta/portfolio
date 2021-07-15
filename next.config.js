const { NormalModuleReplacementPlugin } = require("webpack");
const { resolve } = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const address = require("address");

const { analyze, PORT } = process.env;

console.log(`Remote URL http://${address.ip()}:${PORT}`);

const polyfillsDir = "./src/polyfills/index.js";

module.exports = {
  webpack5: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config, { isServer }) {
    /* add framer motion support for IE11 */
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if (entries["main.js"] && !entries["main.js"].includes(polyfillsDir))
        entries["main.js"].unshift(polyfillsDir);

      return entries;
    };

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
        !isServer &&
          new NormalModuleReplacementPlugin(
            /^framer-motion$/,
            resolve(__dirname, "src/polyfills/framerMotionWrapper.js"),
          ),
      ].filter(Boolean),
    );

    /* return new config to next */
    return config;
  },
};
