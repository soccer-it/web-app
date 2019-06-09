const withPlugins = require("next-compose-plugins");
const withOffline = require("next-offline");
const withSass = require("@zeit/next-sass");
const { PHASE_PRODUCTION_BUILD } = require("next-server/constants");

const sassConfig = [
  withSass,
  {
    cssModules: true,
    cssLoaderOptions: {
      localIdentName: "[path]___[local]___[hash:base64:5]"
    },
    [PHASE_PRODUCTION_BUILD]: {
      cssLoaderOptions: {
        localIdentName: "[hash:base64:8]"
      }
    }
  }
];

const nextConfig = {
  resolve: {
    modules: [__dirname, "node_modules"]
  }
};

module.exports = withPlugins([withOffline, sassConfig], nextConfig);
