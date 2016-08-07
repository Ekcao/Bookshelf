import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import bookApp from './reducers';
import Routes from './routes';

// let store = createStore(bookApp);
let store = createStore(bookApp, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={Routes} />
    </Provider>,
    document.getElementById('root')
);
