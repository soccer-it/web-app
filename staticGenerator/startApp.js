const reactRedux = require('react-redux'),
	reactServer = require('react-dom/server'),
	reactRouter = require('react-router'),
	{ Helmet } = require('react-helmet'),
	keys = require('ramda').keys,
	serialize = require('serialize-javascript');

const { Provider } = reactRedux,
	{ RouterContext } = reactRouter,
	{ renderToString } = reactServer;

const currentAssets = require('../assets.json');

const getPreloadedChunks = (assets) => {
	return Object.keys(assets)
		.reduce((acc, route) => {
			if (route === 'vendor' || route === 'main') return acc;

			const chunk = assets[route]['js'];

			return [].concat(
				acc,
				`<link rel="preload" as="script" href="${chunk}">`
			);
		}, [])
		.join('');
};

const template = require('./template');

const startApp = locals => (store, renderProps, currentState) => {
	const { path, ADOBE } = locals;
	const { main, vendor } = currentAssets;

	let markup,
		templateMarkup,
		currentRouteConfig = renderProps.routes[1];

	const { hasDynamicContent, mainRoute, name, category } = currentRouteConfig;

	const createStaticMarkup = ({ name, category, mainRoute }) => {
		const helmetData = Helmet.renderStatic(),
			  headTags = keys(helmetData)
				.filter(tag => !/(attributes)/gi.test(tag))
				.map(tag => helmetData[tag].toString())
				.join('');

		markup = renderToString(
			<Provider store={store}>
				<RouterContext {...renderProps} />
			</Provider>
		);

		const preloadedChunks = mainRoute
			? getPreloadedChunks(currentAssets)
			: '';

		templateMarkup = template({
			pageName: name,
			preloadedChunks,
			pageCategory: category || '',
			markup,
			main,
			vendor,
			currentState: serialize(store.getState(), { isJSON: true }),
			options: locals,
			ADOBE,
			headTags,
		});

		return new Promise((resolve, reject) => {
			if (!templateMarkup) {
				let err = new Error(`Error on generate ${path} static markup`);
				reject(err);
			} else {
				console.log(`${path} static markup successfully generated`);
				resolve(templateMarkup);
			}
		});
	};

	return createStaticMarkup({ name, category, mainRoute });
};

module.exports = startApp;
