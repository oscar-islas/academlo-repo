import { combineReducers, createStore, applyMiddleware } from "redux";
import messageReducer from "./mensajes/mensajes-reducer";
import logger from 'redux-logger';

const reducers = combineReducers({ chat: messageReducer });

const store = createStore(reducers, applyMiddleware(logger));

export default store;
