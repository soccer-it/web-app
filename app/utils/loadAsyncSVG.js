import pageNames from 'constants/pageNames';
const { RootUrl } = pageNames;

function getSVGDef() {

	const request = new XMLHttpRequest(),
				spritePath = `${RootUrl.path}images/sprite.svg`;

	const onRequestLoad = () => createSVGDefWrapper(request.responseText);

	request.open("GET", spritePath, true);
	request.send();
	request.onload = onRequestLoad;
}

function createSVGDefWrapper(response) {
	let wrapper = document.createElement("div");
	wrapper.id = 'icons-sprite';
	wrapper.innerHTML = response;
	document.body.insertBefore(wrapper, document.body.childNodes[0]);
}

getSVGDef();
