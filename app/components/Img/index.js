import { Fragment } from 'react';
import pageNames from 'constants/pageNames';

const { RootUrl } = pageNames;

/* global APP */

const Img = ({
	src,
	alt,
	width,
	sourceIsRemote,
	async = true,
	height,
	placeholderImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII",
	...rest
}) => {

	const dataSrc = sourceIsRemote
		? src
		: `${RootUrl.path}${src}`;

	return (
		<Fragment>
			<img
				data-lazy-image={async ? 'on' : 'off'}
				src={async ? placeholderImage : `${APP.ROOT_PATH}${src}`}
				data-src={dataSrc}
				alt={alt}
				{ ...rest }
			/>
		</Fragment>
	);
};

export default Img;
