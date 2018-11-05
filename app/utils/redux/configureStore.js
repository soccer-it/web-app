import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'ducks';
import { devTools } from './devTools';
import isClient from 'utils/isClient';
import { loadState, addToState } from 'utils/storage';
import pageNames from 'constants/pageNames';
import isDev from 'utils/isDev';

const persistLead = (lead) => {
	addToState({
		lead
	});
};

export default function configureStore() {
	const storeMiddleware = applyMiddleware(
		thunkMiddleware
	);

	const storeEnhancements = compose(
		storeMiddleware,
		...isDev ? [devTools] : []
	);

	let currentState = {};

	if (isClient() && window.location.pathname !== pageNames.RootUrl.path) {
		const localStorageState = loadState();
		currentState = Object.assign({}, localStorageState);
	}

	const store = createStore(rootReducer, currentState, storeEnhancements);

	store.subscribe(() => {
		const state = store.getState(),
					{ requests, lead } = state;

		persistLead(lead);

		if (isDev) {
			window.__STATE__ = state;
		}
	})

	return store;
}
