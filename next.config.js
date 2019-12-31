require('dotenv').config();

const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const withESLint = require('next-eslint');
const withOffline = require('next-offline');
const path = require('path');
const routes = require('./routes');
const nextBuildId = require('next-build-id');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const { PHASE_PRODUCTION_BUILD } = require('next-server/constants');

require('dotenv').config();

const getBuildId = () => nextBuildId.sync({ dir: __dirname, describe: true });

const getResolvedPath = dir => path.join(__dirname, dir);

const setAbsolutePaths = (paths = [], currentConfig) =>
  paths.reduce(
    (acc, currentPath) => ({
      ...acc,
      [currentPath]: getResolvedPath(currentPath)
    }),
    currentConfig
  );

const currentBuildId = getBuildId();

module.exports = withPlugins([
  [withESLint],
  [
    withSass,
    {
      webpack: (config, _) => {
        config.plugins = config.plugins || [];

        config.node = {
          fs: 'empty',
          net: 'empty',
          tls: 'empty'
        };

        config.plugins = [
          ...config.plugins,

          new Dotenv({
            path: path.join(__dirname, '.env'),
            systemvars: true
          }),
          new webpack.DefinePlugin({
            'process.env.BUILD_ID': JSON.stringify(currentBuildId)
          })
        ];

        config.module.rules.push({
          test: /\.(raw)(\?v=[/d]\.[/d]\.[/d])?$/,
          use: 'raw-loader'
        });

        if (config.mode === 'production') {
          if (Array.isArray(config.optimization.minimizer)) {
            config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
          }
        }

        const newAliasConfig = setAbsolutePaths(
          ['components', 'pages', 'layouts', 'utils', 'styles'],
          config.resolve.alias
        );

        config.resolve.alias = newAliasConfig;

        return config;
      },
      cssModules: true,
      cssLoaderOptions: {
        localIdentName: '[path]___[local]___[hash:base64:5]'
      },
      generateBuildId: () => currentBuildId,
      [PHASE_PRODUCTION_BUILD]: {
        cssLoaderOptions: {
          localIdentName: '[hash:base64:8]'
        }
      },
      exportPathMap: routes
    }
  ],
  [withOffline]
]);
