import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Store from './Store/Store.js';
import {Provider} from 'react-redux';
import Login from './Login/Login.js'

ReactDOM.render(<Provider store={Store} >
                    <Login />
                </Provider> 
, document.getElementById('root'));

