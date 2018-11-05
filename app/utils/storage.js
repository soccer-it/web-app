import isClient from 'utils/isClient';

/* global APP __webpack_hash__ */

const { appName, env } = APP;

const hash = APP.local ? __webpack_hash__() : __webpack_hash__;

const key = `storage-${appName}-${env}-${hash}`;

export const loadState = () => {
	if (isClient()) {
		const state = localStorage.getItem(key);
		return JSON.parse(state);
	}
};

export const saveState = (state) => {
	if (isClient()) {
		localStorage.setItem(key, JSON.stringify(state));
		return true;
	}
};

export const addToState = (state) => {
	if (isClient()) {
		const loadedState = loadState();

		const newState = {
			...loadedState,
			...state
		};

		saveState(newState);

		return true;
	}
}
