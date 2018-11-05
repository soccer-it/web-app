import { fetchData } from 'ducks/requests';

/* global APP */

const { API = {} } = APP;

const { AUTH } = API;

const handleAppAuth = (dispatch) => {
	if (!dispatch || !AUTH) {
		console.log('Error on dispatch getAppAuth action')
		return false;
	}

	return dispatch(fetchData({
		url: AUTH,
		key: 'appAuth'
	}))
		.catch(err => console.log('Error on get app auth token', err));
};

export default handleAppAuth;
