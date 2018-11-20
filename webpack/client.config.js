const webpack = require('webpack'),
			path = require('path'),
			AssetsPlugin = require('assets-webpack-plugin'),
			webpackCommonConfig = require('./common/config.js'),
			WebpackPwaManifest = require('webpack-pwa-manifest'),
			OfflinePlugin = require('offline-plugin'),
			glob = require('glob');

module.exports = env => {

	const commonWebpackConfig = webpackCommonConfig(env);

	const currentAppConfig = commonWebpackConfig.plugins.find(p => {
		if (p.definitions && p.definitions['APP']) return true;
	}).definitions['APP'];

	const currentApp = JSON.parse(currentAppConfig);

	const externalAssets = glob.sync('build/**/*.+(png|jpg|woff2|woff|svg)').map(p => p.replace('build/', currentApp.ROOT_PATH))

	return Object.assign({}, commonWebpackConfig, {
		name: 'Client',
		entry: {
			main: ['babel-polyfill', path.resolve('app/', 'main.js')]
		},
		output: {
			publicPath: currentApp.ROOT_PATH,
			path: path.join(process.cwd(), 'build/')
		},
		plugins: commonWebpackConfig.plugins.concat([
			new webpack.DefinePlugin({
				'React': 'react',
				'process.env': {
					'BROWSER': true
				}
			}),
			new AssetsPlugin({
				filename: "assets.json"
			}),
			new WebpackPwaManifest(currentApp.manifest),
			new OfflinePlugin({
				excludes: ['**/.*', '**/*.map', '**/*.gz', '*iconstats*', '*manifest*'],
				publicPath: currentApp.ROOT_PATH,
				externals: externalAssets,
				ServiceWorker: {
					events: true
				},
				AppCache: false
			})
		])
	});
}
