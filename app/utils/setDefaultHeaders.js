import axios from 'axios';
import isClient from 'utils/isClient';

const defaultHeaders = {
	...JSON.parse(
		isClient()
			? sessionStorage.getItem('default-headers')
			: '{}'
		),
	...axios.defaults.headers.common
};

export default function setDefaultHeaders(headerObj = {}) {
	if (Object.keys(headerObj).length) {
		axios.defaults.headers.common = Object.assign(defaultHeaders, headerObj);
	} else {
		axios.defaults.headers.common = defaultHeaders;
	}
};
