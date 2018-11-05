const createEndpoint = (options = {
	endpoint: '',
	data: {}
}) => {
	let { endpoint, data } = options;

	Object.keys(data)
		.forEach((key) => {
			const value = data[key],
						pattern = new RegExp(`{${key}}`, 'gi');

			endpoint = endpoint.replace(pattern, value);
		});

	return endpoint;
};

export default createEndpoint
