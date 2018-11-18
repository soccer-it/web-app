const path = require('path');

const dynamicConfig = {
	default: {
		theme: {
			appColor: '#2F3640'
		},
		manifest: {
			name: 'Soccer It',
			filename: 'app-manifest.json',
			short_name: 'Soccer It',
			description: 'Um novo jeito de torcer!',
			theme_color: '#2F3640',
			background_color: '#2F3640',
			crossorigin: null,
			icons: [
				{
					src: path.resolve('build/images/icon.png'),
					sizes: [96, 128, 192, 256, 384, 512, 1024]
				}
			]
		},
		title: 'Soccer It | Um novo jeito de torcer',
		description: '',
		apps: {},
		medias: {},
		API: {
			APP_KEY: '',
			ROOT: ''
		},
		ROOT_PATH: '/',
		BREAKPOINTS: {
			'bp-xs': '0',
			'bp-sm': '500',
			'bp-m': '700',
			'bp-l': '1024',
			'bp-xl': '1366',
			'bp-hd': '1920'
		},
	},
	local: {},
	prod: {},
	dev: {},
	staging: {}
};

module.exports = dynamicConfig;
