import { createStore as reduxCreateStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const initialState = { }

const enhancers = applyMiddleware(thunk);

const createStore = () => reduxCreateStore(rootReducer, initialState, enhancers);
export default createStore