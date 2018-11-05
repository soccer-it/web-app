import { combineReducers } from 'redux';
import { requestsReducer } from './requests';
import { fetchInterceptorReducer } from 'ducks/fetchInterceptor';
import { leadReducer } from 'ducks/lead';

const rootReducer = combineReducers({
	requests: requestsReducer,
	interceptor: fetchInterceptorReducer,
	lead: leadReducer
});

export default rootReducer;
