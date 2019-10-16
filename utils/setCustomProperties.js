export default function setCustomProperties(properties) {
  Object.keys(properties).forEach(key => {
    document.documentElement.style.setProperty(`--${key}`, properties[key]);
  });
}
