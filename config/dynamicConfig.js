const dynamicConfig = {
	"default": {
		title: 'Soccer it',
		description: '',
		apps: {},
		medias: {},
		API: {
			APP_KEY: 'e5a3989859b2873853885f452e976741',
			ROOT: 'https://hts9fj5b72.execute-api.us-east-2.amazonaws.com/dev/',
			teams: '/teams/'
		},
		ROOT_PATH: '/',
		"BREAKPOINTS": {
			'bp-xs': '0',
			'bp-sm': '500',
			'bp-m': '700',
			'bp-l': '1024',
			'bp-xl': '1366',
			'bp-hd': '1920'
		},
	},
	'local': {},
	'prod': {},
	'dev': {},
	'staging': {}
};

module.exports = dynamicConfig;
