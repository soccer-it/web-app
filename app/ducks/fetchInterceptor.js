import R from 'ramda'
import axios from 'axios';
import { handleActions } from 'redux-actions';
import setDefaultHeaders from 'utils/setDefaultHeaders';

const mapServerErrorResponses = (message) => message.split(':').pop();

const cleanStorage = dispatch => new Promise((resolve) => {
	let storageIsClear = false;

	dispatch(closeFeedback());

	setTimeout(() => {
		sessionStorage.setItem('default-headers', JSON.stringify({}));
		storageIsClear = true;

		setDefaultHeaders();
		resolve(storageIsClear);
	}, 600);

});

const handleSuccess = (res, dispatch) => {
	const message = R.pathOr('', ['data', 'body', 'message'], res);
	if (message && res.status !== 200) {
		dispatch(throwFeedback({
			message: mapServerErrorResponses(message),
			error: true
		}));
	}

	return res;
}

const handleError = (error, dispatch) => {
	const messagePath = ['response', 'data', 'message']

	const message = R.pipe(
		R.pathOr(
			"Ocorreu um impreviso, tente novamente mais tarde!",
			messagePath
		),
		mapServerErrorResponses
	)(error);

	dispatch(throwFeedback({
		message,
		error: true
	}));

	console.error('Server Error -', message);

	if (/recaptcha/gi.test(R.path(messagePath, error))) {
		cleanStorage(dispatch)
			.then(storageIsClear => location.reload());
	}

	return Promise.reject(error);
}

export function startInterceptor() {
	return dispatch => {
		axios.interceptors.response.use(
			res => handleSuccess(res, dispatch),
			error => handleError(error, dispatch)
		)
	};
};

export function throwFeedback(payload) {
	return {
		type: "THROW_FEEDBACK",
		payload
	};
};

export function closeFeedback() {
	return {
		type: "CLOSE_FEEDBACK"
	}
}

export const fetchInterceptorReducer = handleActions({
	THROW_FEEDBACK: (state, { payload }) => ({
		...payload,
		visible: true
	}),

	CLOSE_FEEDBACK: (state, action) => ({
		...state,
		visible: false
	})
}, {
	visible: false,
	error: false,
	message: 'Algum erro aconteceu.'
});
