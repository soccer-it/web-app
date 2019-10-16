module.exports = function loadSvg() {
  return new Promise((resolve, _) => {
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "/static/images/sprite.svg", true);
    ajax.send();

    ajax.onload = function(e) {
      let div = document.createElement("div");
      div.id = "svg-sprite";
      div.innerHTML = ajax.responseText;
      document.body.insertBefore(div, document.body.childNodes[0]);
      resolve();
    };
  });
};
