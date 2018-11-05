const { exec } = require('child_process');
const path = require('path');

let currentAssets = null;

const copyAssets = () => {
	return new Promise((resolve, reject) => {

		try {
			currentAssets = require(path.resolve('currentApp.json'))
		} catch(e) {
			reject(new Error(e));
		}

		const publicDir = currentAssets.ROOT_PATH;

		console.log('Copying files');

		const command = `cp -Rf build/*.html build/docs build/icons build/fonts build/images build/scripts build/styles build${publicDir}`;

		exec(command, (err, stdout, stdin) => {
			
			if (err) {
				console.log('Error on copy files!', err);
				reject(new Error(err));
			} else {
				console.log('Done! Assets got copied!');
				resolve(stdout);
			}
		});
	});
};


module.exports = copyAssets;
