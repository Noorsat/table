import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index.ts';

export const store = createStore(rootReducer, applyMiddleware(thunk))
