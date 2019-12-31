import isClient from 'utils/isClient';

export default function ga() {
  if (!isClient()) {
    return;
  }

  const id = 'UA-149910123-1';

  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.body.appendChild(script);

  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', id);
}
