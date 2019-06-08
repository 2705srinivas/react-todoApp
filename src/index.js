import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyRoot from './CurrencyRoot.js';
import 'antd/dist/antd.css';
import Store from './Store/Store.js';
import {Provider} from 'react-redux';

ReactDOM.render(<Provider store={Store} >
                    <CurrencyRoot />
                </Provider> 
, document.getElementById('root'));

