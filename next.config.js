require('dotenv').config();

const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const withESLint = require('next-eslint');
const path = require('path');
const routes = require('./routes');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const uuidv1 = require('uuid/v1');
const { PHASE_PRODUCTION_BUILD } = require('next-server/constants');

const getBuildId = () => uuidv1();

const getResolvedPath = (dir) => path.join(__dirname, dir);

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
	[ withESLint ],
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
					[ 'components', 'pages', 'layouts', 'utils', 'styles' ],
					config.resolve.alias
				);

				config.resolve.alias = newAliasConfig;

				return config;
			},
			cssModules: true,
			cssLoaderOptions: {
				localIdentName: '[local]___[hash:base64:3]'
			},
			generateBuildId: () => currentBuildId,
			[PHASE_PRODUCTION_BUILD]: {
				cssLoaderOptions: {
					localIdentName: '[hash:base64:8]'
				}
			},
			exportTrailingSlash: true,
			exportPathMap: routes
		}
	]
]);
