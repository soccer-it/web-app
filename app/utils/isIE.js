import isClient from 'utils/isClient';

const isIE = isClient() && !!window.navigator.userAgent.match(/Trident\/7\./);

export default isIE;
