const request = require('request');

function uploadAsset(assets) {
  return new Promise((resolve, reject) => {
    request.post(
      {
        url: process.env.DEPLOY_API,
        headers: {
          Authorization: `Bearer ${process.env.DEPLOY_API_TOKEN}`
        },
        body: JSON.stringify({
          name: process.env.DEPLOY_BUCKET_NAME,
          version: 2,
          files: assets
        })
      },
      function(err, res, body) {
        if (err) {
          return reject(err);
        }

        resolve(body);
      }
    );
  });
}

module.exports = uploadAsset;
