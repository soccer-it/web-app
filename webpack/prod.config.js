const webpack = require('webpack'),
			webpackClientConfig = require('./client.config.js'),
			path = require('path'),
			ExtractTextPlugin = require('extract-text-webpack-plugin'),
			ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin'),
			FaviconsWebpackPlugin = require('favicons-webpack-plugin'),
			bundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
			commonCssLoaderConfig = require('./common/loaders'),
			commonPlugins = require('./common/plugins'),
			LodashWebpackPlugin = require('lodash-webpack-plugin'),
			HtmlIgnoreChunkPlugin = require('html-webpack-exclude-assets-plugin');

module.exports = (env = {}) => {
	const commonClientConfig = webpackClientConfig(env);

	const isDev = !!(env.env !== 'prod');

	return Object.assign({}, commonClientConfig, {
		output: Object.assign({}, commonClientConfig.output, {
			filename: 'scripts/bundle.[name].[hash].js',
			chunkFilename: 'scripts/bundle.[name].[chunkHash].js'
		}),
		devtool: isDev ? 'cheap-module-source-map' : 'source-map',
		module: {
			rules: commonClientConfig.module.rules.concat([
				{
					test: /\.js$/,
					exclude: /node_modules\/.*/,
					use: [{
						loader: 'babel-loader',
						options: {
							presets: [
								['env', {
									targets: {
										ie: 10,
										safari: 10
									},
									modules: false
								}],
								'react'
							],
							plugins: commonPlugins(env)
						}
					}]
				},
				{
					test: /\.styl$/,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: [
							commonCssLoaderConfig(env),
							'stylus-loader'
						]
					})
				}
			])
		},
		plugins: commonClientConfig.plugins.concat([
			new LodashWebpackPlugin({
				currying: true,
				flattening: true,
				paths: true,
				placeholders: true,
				shorthands: true
			}),
			new HtmlIgnoreChunkPlugin(),
			new ExtractTextPlugin({
				filename: 'styles/[name].[hash].css',
				allChunks: true
			}),
			new ScriptExtHtmlWebpackPlugin({
				defer: ['vendor', 'main']
			}),
			new FaviconsWebpackPlugin({
				logo: path.resolve(__dirname, '../', `build/images/logo.png`),
				emitStats: false,
				prefix: 'icons/',
				persistentCache: false,
				inject: true,
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: true,
					favicons: true,
					firefox: true,
					opengraph: true,
					twitter: true,
					yandex: true,
					windows: true
				}
			}),
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify('production')
				}
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					'screw_ie8': true,
					'unused': true,
					'warnings': true,
					'dead_code': true
				},
				output: {
					comments: false
				},
				mangle: true,
				sourceMap: true
			}),
			new webpack.LoaderOptionsPlugin({
				minimize: true,
				debug: false
			}),
			new webpack.optimize.ModuleConcatenationPlugin(),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'vendor',
				minChunks: (m) => m.resource && /node_modules/.test(m.resource)
			}),
			new webpack.optimize.MinChunkSizePlugin({
			  minChunkSize: 80000
			}),
			new bundleAnalyzerPlugin({
				analyzerMode: 'static',
				reportFilename: 'report.html',
				defaultSizes: 'gzip',
				openAnalyzer: false
			})
		])
	});
}
