import { userConfig } from 'utils/store';

export function getTeamPhoto(url) {
  return new Promise((resolve, reject) => {
    const currentBannerBlob = userConfig.assets.teams[url];

    if (currentBannerBlob) {
      return resolve(currentBannerBlob);
    }

    fetch(url)
      .then(res =>
        res.blob().then(blobImage => {
          let urlCreator = (window.URL || window.webkitURL || {}).createObjectURL || function() {};
          let imageBlobUrl = urlCreator(blobImage);
          userConfig.assets.teams[url] = imageBlobUrl;
          resolve(imageBlobUrl);
        })
      )
      .catch(reject);
  });
}
