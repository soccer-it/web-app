import React from 'react';
import configureStore from 'utils/redux/configureStore';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { match, browserHistory } from 'react-router';
import { RootComponent } from 'components/RootComponent';
import setDefaultHeaders from 'utils/setDefaultHeaders';
import routes from './routes';
import fontObserver from 'utils/fontObserver';
import 'utils/thirdPartyScripts';

const offlineRuntime = require('offline-plugin/runtime');

offlineRuntime.install({
	onInstalled: function() {
		console.log('[SW] - Installed!');
	},

	onUpdating: function() {
		console.log('[SW] - Updating ...');

		offlineRuntime.applyUpdate();
	},

	onUpdateReady: function() {
		console.log('[SW] - Update Ready!');
	},
	
	onUpdated: function() {
		console.log('[SW] - Updated!');
		window.location.reload();
	}
});

/* global APP */

window.__CURRENT_APP__ = JSON.stringify(APP);

const { API } = APP,
			{ APP_KEY } = API;

setDefaultHeaders({ 'x-api-key': APP_KEY });

fontObserver([
	{
		name: 'Fira Sans',
		weight: 400
	},
	{
		name: 'Fira Sans',
		weight: 700
	}
]);

const { pathname, search, hash } = window.location
const location = `${pathname}${search}${hash}`

const store = configureStore(),
			history = browserHistory,
			rootComponentProps = { store, history, routes },
			appWrapper = document.getElementById('react-view');

const renderApp = (Component, props) => {
	render(
		<AppContainer>
			<Component { ...props } />
		</AppContainer>,
		appWrapper
	);
}

const loadApp = props => renderApp(RootComponent, props);

if (process.env.NODE_ENV === 'production') {
	match({ routes, location }, (err, redirectLocation, renderProps) => {
		const props = Object.assign({}, rootComponentProps, renderProps);
		loadApp(props);
	});
} else {
	loadApp(rootComponentProps);
}

if (module.hot) {
	module.hot.accept('components/RootComponent', () => renderApp(RootComponent, rootComponentProps));
	module.hot.accept('routes', () => renderApp(RootComponent, rootComponentProps));
}
