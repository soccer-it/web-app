const template = ({
	main,
	vendor,
	markup,
	currentState,
	preloadedChunks,
	options,
	hash,
	ADOBE,
	headTags,
	version
}) => {
	return `
		<!doctype html>
			<html lang="pt-br">
				<head>
					<title>${options.title}</title>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
					<meta content="IE=11" http-equiv="x-ua-compatible">
					${headTags}
					<meta name="mobile-web-app-capable" content="yes">
					<meta name="theme-color" content="${options.theme.appColor}">
					<meta name="application-name" content="${options.title}">
					<link rel="apple-touch-icon" sizes="57x57" href="${options.rootPath}icons/apple-touch-icon-57x57.png">
					<link rel="apple-touch-icon" sizes="60x60" href="${options.rootPath}icons/apple-touch-icon-60x60.png">
					<link rel="apple-touch-icon" sizes="72x72" href="${options.rootPath}icons/apple-touch-icon-72x72.png">
					<link rel="apple-touch-icon" sizes="76x76" href="${options.rootPath}icons/apple-touch-icon-76x76.png">
					<link rel="apple-touch-icon" sizes="114x114" href="${options.rootPath}icons/apple-touch-icon-114x114.png">
					<link rel="apple-touch-icon" sizes="120x120" href="${options.rootPath}icons/apple-touch-icon-120x120.png">
					<link rel="apple-touch-icon" sizes="144x144" href="${options.rootPath}icons/apple-touch-icon-144x144.png">
					<link rel="apple-touch-icon" sizes="152x152" href="${options.rootPath}icons/apple-touch-icon-152x152.png">
					<link rel="apple-touch-icon" sizes="180x180" href="${options.rootPath}icons/apple-touch-icon-180x180.png">
					<meta name="apple-mobile-web-app-capable" content="yes">
					<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
					<meta name="apple-mobile-web-app-title" content="${options.title}">
					<link rel="icon" type="image/png" sizes="228x228" href="${options.rootPath}icons/coast-228x228.png">
					<meta name="msapplication-TileColor" content="${options.theme.appColor}">
					<meta name="msapplication-TileImage" content="mstile-144x144.png">
					<meta name="msapplication-config" content="browserconfig.xml">
					<link rel="icon" type="image/png" sizes="32x32" href="${options.rootPath}icons/favicon-32x32.png">
					<link rel="icon" type="image/png" sizes="16x16" href="${options.rootPath}icons/favicon-16x16.png">
					<link rel="shortcut icon" href="${options.rootPath}icons/favicon.ico">
					<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)" href="${options.rootPath}icons/apple-touch-startup-image-320x460.png">
					<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)" href="${options.rootPath}icons/apple-touch-startup-image-640x920.png">
					<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" href="${options.rootPath}icons/apple-touch-startup-image-640x1096.png">
					<link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" href="${options.rootPath}icons/apple-touch-startup-image-750x1294.png">
					<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)" href="${options.rootPath}icons/apple-touch-startup-image-1182x2208.png">
					<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)" href="${options.rootPath}icons/apple-touch-startup-image-1242x2148.png">
					<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)" href="${options.rootPath}icons/apple-touch-startup-image-748x1024.png">
					<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)" href="${options.rootPath}icons/apple-touch-startup-image-768x1004.png">
					<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)" href="${options.rootPath}icons/apple-touch-startup-image-1496x2048.png">
					<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)" href="${options.rootPath}icons/apple-touch-startup-image-1536x2008.png">
					<link rel="stylesheet" href="${main.css}">
					<link rel="stylesheet" href="${main.css}">
					<link rel="manifest" href="/app-manifest.json">
					<script defer src="${vendor.js}"></script>
					<script defer src="${main.js}"></script>
			</head>
			<body>
				<div id="react-view"><div>${markup}</div></div>
			</body>
		</html>
	`;
};

module.exports = template;
