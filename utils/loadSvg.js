const updateDOMSprite = svgSprite => {
  const currentAppendedSprite = document.querySelector('#svg-sprite');

  if (currentAppendedSprite) {
    return (currentAppendedSprite.innerHTML = svgSprite);
  }

  const div = document.createElement('div');
  div.id = 'svg-sprite';
  div.innerHTML = svgSprite;
  document.body.insertBefore(div, document.body.childNodes[0]);
};

export default function loadSvg(fileName = '/images/sprite.svg') {
  new Promise(resolve => {
    const currentSprite = localStorage.getItem(fileName);

    if (currentSprite) {
      updateDOMSprite(currentSprite);
      return resolve();
    }

    const ajax = new XMLHttpRequest();
    ajax.open('GET', fileName, true);
    ajax.send();

    ajax.onload = function() {
      const svgSprite = ajax.responseText;
      localStorage.setItem(fileName, svgSprite);
      updateDOMSprite(svgSprite);
      resolve();
    };
  });
}
