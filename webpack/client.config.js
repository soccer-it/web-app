const webpack = require('webpack'),
			path = require('path'),
			AssetsPlugin = require('assets-webpack-plugin'),
			webpackCommonConfig = require('./common/config.js'),
			WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = env => {

	const commonWebpackConfig = webpackCommonConfig(env);

	const currentAppConfig = commonWebpackConfig.plugins.find(p => {
		if (p.definitions && p.definitions['APP']) return true;
	}).definitions['APP'];

	const currentApp = JSON.parse(currentAppConfig);

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
			new WebpackPwaManifest(currentApp.manifest)
		])
	});
}
