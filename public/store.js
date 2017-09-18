import { createStore,combineReducers,applyMiddleware,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {routerReducer, routerMiddleware} from 'react-router-redux';

function myCreateStores(history){
	const middleware = routerMiddleware(history);
	const enhancer = compose( applyMiddleware(thunkMiddleware,middleware) );
	const store = createStore(
	    combineReducers({ }),enhancer
	)
	return store;
}

export default myCreateStores;
