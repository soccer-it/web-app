import isClient from 'utils/isClient';

export default function ga() {
  if (!isClient()) {
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-149910123-1';
  document.body.appendChild(script);

  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', 'UA-149910123-1');
}
