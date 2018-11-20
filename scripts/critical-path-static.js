const critical = require('critical');
const path = require('path');
const assets = require(path.resolve('./assets.json'));
const { ROOT_PATH, routes } = require(path.resolve('./currentApp.json'));
const createPageNames = require(path.resolve('./app/utils/createPageNames'));
const pageNames = createPageNames({ routeUrl: ROOT_PATH, routes: routes });

const generate = (pages) => {

	const { path, name } = pages.shift();

	critical.generate({
		inline: true,
		minify: true,
		extract: false,
		base: 'build/',
		src: `.${path}/index.html`,
		dest: `.${path}/index.html`,
		width: 1920,
		height: 1080,
		forceInclude: [
			'#icons'
		],
		css: `build/${assets.main.css}`,
		ignore: [/url\(/,'@font-face',/print/,/\[]/]
	}).then( () => {
		console.log(`Generated ${name} critical path`);

		if (pages.length) {
			generate(pages);
		} else {
			console.log('Critical path generator finished!');
			return true;
		}
	}).catch(e => console.log('Error on generate critical path', e))
}

const start = () => {
	const pages = Object.keys(pageNames)
		.reduce((acc, key) => {
			const pageConfig = pageNames[key];

			return !pageConfig.nonCritical
			 ? [].concat(acc, pageConfig)
			 : acc
		}, []);

	console.log('pages', pages);

	return generate(pages);
}

start();
