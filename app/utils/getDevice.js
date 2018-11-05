import isClient from './isClient'

/* TODO = {
	Get breakpoints reference by global dynamic config
} */

export const isDesktop = () => {
	if (!isClient()) return;

	return !!(window.matchMedia('screen and (min-width:1025px)').matches)
}

export const isTablet = () => {
	if (!isClient()) return;

	return !!(window.matchMedia('screen and (min-width:640px) and (max-width: 1024px)').matches)
};

export const isMobile = () => {
	if (!isClient()) return;

	return !!(window.matchMedia('screen and (max-width:639px)').matches)
};
