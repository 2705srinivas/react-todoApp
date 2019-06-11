import currencyReducer from './../CurrencyContainer/Reducer.js';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './Sagas.js';

const rootReducer = combineReducers({
    currencyStore: currencyReducer
});

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);

export default Store;