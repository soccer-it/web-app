import isClient from 'utils/isClient';
import debounce from 'utils/debounce';
import { $ } from 'utils/helpers'
import R from 'ramda'

const isLazyImageOn = img => img.getAttribute('data-lazy-image') === 'on'

const setOffLazyImage = img => img.setAttribute('data-lazy-image', 'off')

const getLazyImages = () => $.querySelectorAll('[data-lazy-image]')

const unbindImages = (lazyImagesObserver) => {
  getLazyImages()
    .map(R.forEach(img => lazyImagesObserver.unobserve(img)))
};

const bindImages = (lazyImagesObserver) => {
  getLazyImages()
    .map(R.forEach(R.when(isLazyImageOn, img => lazyImagesObserver.observe(img))))
};

const rebindImages = (lazyImagesObserver) => () => {
	unbindImages(lazyImagesObserver);
	bindImages(lazyImagesObserver);
};

export const loadImage = (sourceImage) => {
	if (!sourceImage) {
		return null;
	}

	const url = sourceImage.getAttribute('data-src');

	const updateImage = () => {
		sourceImage.src = url;
    setOffLazyImage(sourceImage)
	};

	return new Promise((resolve, reject) => {
		const image = new Image();
		image.src = url;
		image.onload = resolve;
		image.onerror = reject;
	}).then(updateImage);
}

const lazyLoadImages = (options = {
	observerConfig: {}
}) => {
	const {
		observerConfig
	} = options;

	if (!isClient()) return;

	if (!('IntersectionObserver' in window)) {
    getLazyImages().map(
      R.forEach(R.when(isLazyImageOn, img => {
        img.src = img.getAttribute('data-src');
        setOffLazyImage(img)
      }))
    )

		return;
	}

	const intersectionConfig = {
		root: null,
		rootMargin: '-80px',
		threshold: [0, 1],
		...observerConfig
	};

	const lazyImagesObserver = new IntersectionObserver(onIntersection, intersectionConfig);

	function onIntersection(entries, observer) {
		if (entries.length === 0) {
			observer.disconect();
		}

		entries.forEach(entry => {
			if (entry.intersectionRatio > 0) {
				observer.unobserve(entry.target);
				loadImage(entry.target)
			}
		});
	};

	bindImages(lazyImagesObserver);

	let rebindWithDebounce = debounce(50, rebindImages(lazyImagesObserver));

	document.addEventListener('lazyimage:mounted', rebindWithDebounce);
};


export default lazyLoadImages;
