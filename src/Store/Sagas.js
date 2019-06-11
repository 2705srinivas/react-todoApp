import {all} from 'redux-saga/effects';
import Currencysaga from './../CurrencyContainer/CurrencySaga.js';

export default function* rootSagas(){
    yield all([Currencysaga()]);
}