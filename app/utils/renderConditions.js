import currentBrowserIsIE from 'utils/isIE';

const conditions = {
	thereIsNoSymbol: {
		condition: (!window.Symbol),
		callback: (resolve, reject) => {
			System.import(/* webpackChunkName: "symbolPolyfill" */'./symbolPolyfill.js')
				.then(resolve);
		}
	},

	thereIsNoClosest: {
		condition: (window.Element && !Element.prototype.closest),
		callback: (resolve, reject) => {
			System.import(/* webpackChunkName: "closestPolyfill" */'./closestPolyfill.js')
				.then(resolve);
		}
	},

	isIe: {
		condition: currentBrowserIsIE,
		callback: (resolve, reject) => {
			System.import(/* webpackChunkName: "iePolyfill" */'./loadIEPolyfill.js')
				.then(resolve);
		}
	},

	theresNoLocalStorage: {
		condition: (!('localStorage' in window) || !('sessionStorage' in window)),
		callback: (resolve, reject) => {
			System.import(/* webpackChunkName: "localStorageFallback" */'./localStorageFallback.js')
				.then(resolve);
		}
	}
};

let startAppConditions = [];

const getRenderConditions = () => {
	Object.keys(conditions)
		.forEach((currentCondition) => {
			let { condition, callback } = conditions[currentCondition];

			if (condition) {
				let newStartAppConditions = [
					...startAppConditions,
					new Promise(callback)
				];

				startAppConditions = newStartAppConditions;
			}
		});

	return startAppConditions;
};

export default getRenderConditions;
