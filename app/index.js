import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import bookApp from './reducers';
import Routes from './routes';
import { addBook } from './actions';

let store = createStore(bookApp);
store.dispatch(addBook('Mistborn', 'Brandon Sanderson'));

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={Routes} />
    </Provider>,
    document.getElementById('root')
);
