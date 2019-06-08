import currencyReducer from './../CurrencyContainer/Reducer.js';
import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
    currencyStore: currencyReducer
});

const Store = createStore(rootReducer);

export default Store;