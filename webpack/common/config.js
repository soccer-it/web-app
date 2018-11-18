const webpack = require('webpack'),
			path = require('path'),
			fs = require('fs'),
			dynamicConfig = require(path.resolve('./config/dynamicConfig')),
			postStylus = require('poststylus'),
			rupture = require('rupture'),
			merge = require('lodash.merge'),
			commonPlugins = require('./plugins'),
			stylus = require('stylus'),
			hexToRgbA = require('./hexToRgba'),
			applyToConstructor = require('./applyToConstructor');

module.exports = (env = {}) => {
	const currentEnv = env['env'],
		  currentAppName = env['appName'],
			currentMedia = JSON.parse(env['isOrganic']) ? 'organic' : 'paid';
			
	const secureObject = (obj) => obj || {};

	const currentDefaultApp = secureObject(dynamicConfig.default.apps[currentAppName]);

	const currentDefaultEnv = secureObject(dynamicConfig[currentEnv]);

	const currentMedias = secureObject(currentDefaultApp.medias);

	const currentApp = merge(
		secureObject(dynamicConfig.default),
		secureObject(currentDefaultApp),
		secureObject(currentMedias[currentMedia]),
		secureObject(currentDefaultEnv[currentAppName]),
		env,
		{
			apps: null,
			medias: null
		}
	);

	fs.writeFileSync('currentApp.json', JSON.stringify(currentApp), 'utf-8', (err) => {
		if (err) {
			console.log('Error on write current App config file!');
		}

		console.log('Current App Config File has been created!');
	});

	const createStylusRGBA = (color) => applyToConstructor(stylus.nodes.RGBA, hexToRgbA(color));

	const createStylusVars = (colors = {}) => {
		return Object.keys(colors).reduce( (prev, key) => {
			prev[key] = createStylusRGBA(colors[key])
			return prev;
		}, {})
	};

	const colors = currentApp.theme;

	return {
		resolve: {
			modules: [
				path.resolve(__dirname, '../../', 'app/'),
				path.resolve(__dirname, '../../', 'config/'),
				path.resolve(__dirname, '../../', 'node_modules')
			],
			extensions: ['.styl', '.js', '.jsx']
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					enforce: 'pre',
					use: [
						{
							loader: 'eslint-loader',
						}
					]
				}
			]
		},
		plugins: [
			new webpack.LoaderOptionsPlugin({
				test: /\.styl$/,
				stylus: {
					preferPathResolver: 'webpack',
					default: {
						use: [
							postStylus([
								'rucksack-css',
								'css-mqpacker',
								'autoprefixer',
								'lost'
							]),
							rupture()
						],
						import: [
							'~styles/config/variables.styl'
						],
						define: Object.assign({}, createStylusVars(colors), {
							'publicPath': new stylus.nodes.String(currentApp.ROOT_PATH),
							'appName': new stylus.nodes.String(currentApp.appName),
							...Object.keys((currentApp.BREAKPOINTS || {}))
								 .reduce((initialState, bp) => {
									 return {
										 ...initialState,
										 [bp]: new stylus.nodes.Unit(currentApp.BREAKPOINTS[bp], 'px')
									 }
								 }, {})
						})
					}
				},
				options: {
					context: __dirname
				}
			}),
			new webpack.ExtendedAPIPlugin(),
			new webpack.ProvidePlugin({
				Promise: 'es6-promise',
				React: 'react',
			}),
			new webpack.DefinePlugin({
				'APP': JSON.stringify(currentApp)
			})
		]
	}
};
