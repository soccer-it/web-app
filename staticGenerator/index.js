const thunkMiddleware = require('redux-thunk').default,
			rootReducer = require('../app/ducks/').default,
			routes = require('../app/routes').default;

const redux = require('redux'),
			reactRouter = require('react-router'),
			serialize = require('serialize-javascript');

const { createStore, applyMiddleware } = redux,
			{ match } = reactRouter;

const startApp = require('./startApp');

const staticGenerator = function(locals, callback) {

	let location = locals.path;

	const onRouteMatch = (err, _redirectLocation, renderProps) => {
		if (err) {
			console.log('Error on route matching!', err);
			return;
		}

		const store = createStore(
			rootReducer,
			applyMiddleware(thunkMiddleware)
		);

		const currentState = serialize(store.getState(), { isJSON: true });
		
		startApp(locals)(store, renderProps, currentState)
			.then((templateMarkup) => {
				const result = templateMarkup.replace(/\s{2,}/g, '').replace(/\'/g, '"');
				callback(null, result)
			})
			.catch((e) => {
				console.log('Error on generate static markup', e);
				process.exit(-1);
			})
	};


	match(
		{ routes, location },
		onRouteMatch
	);
};

module.exports = staticGenerator;
