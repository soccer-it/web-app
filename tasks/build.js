const { options } = require('runjs');

const reset = require('./reset'),
			bundle = require('./bundle'),
			optimizeImages = require('./optimizeImages'),
			generateCritical = require('./generateCritical');
			copyAssets = require('./copyAssets');

function build() {
	const givenOptions = options(this);

	const callBundleTask = (opts = { static: false }) => {
		return bundle({
			static: opts.static,
			...givenOptions
		});
	};

	const isOrganicBuild = JSON.parse(givenOptions.isOrganic);

	reset();
	optimizeImages();
	callBundleTask()
	callBundleTask({ static: true })

	if (isOrganicBuild) {
		copyAssets()
		.catch(e => {
			console.log('Error on copy assets', e);
			process.exit(-1);
		});
	}

	generateCritical();
}

module.exports = build;
