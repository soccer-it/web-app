import isClient from 'utils/isClient';

export default function setCustomProperties(properties) {
  if (!isClient()) return;

  Object.keys(properties).forEach(key => {
    document.documentElement.style.setProperty(`--${key}`, properties[key]);
  });
}
