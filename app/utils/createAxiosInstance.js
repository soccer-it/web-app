import axios from 'axios';

/* global APP */

const { API } = APP,
			{ ROOT } = API;

const instance = axios.create({
	baseURL: ROOT,
	timeout: 3000
});

export default instance;
