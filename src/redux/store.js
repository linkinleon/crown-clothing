import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middlewares)));
const persistor = persistStore(store);

export { store, persistor };