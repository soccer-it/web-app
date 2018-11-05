const createPageNames = ({ rootUrl, routes }) => {

	return {
		RootUrl: {
			path: rootUrl,
			nonCritical: true
		},
		home: {
			path: '/',
			route: '/',
			name: "home",
			category: "home"
		}
	};
};

module.exports = createPageNames;
