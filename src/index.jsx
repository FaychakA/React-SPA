import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import thunk from "redux-thunk";
import Provider from "react-redux/es/components/Provider";
import {createStore, applyMiddleware} from "redux";

import './index.scss';
import App from './App';
import combineReducers from "./reducers/allRedusers";

const store = createStore(combineReducers, applyMiddleware(thunk));

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);

