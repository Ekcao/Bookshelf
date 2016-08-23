import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import bookApp from './reducers';
import Routes from './routes';
import { addBook } from './actions';
import ePub from 'epubjs';

// let store = createStore(bookApp);
let store = createStore(bookApp, window.devToolsExtension && window.devToolsExtension());
store.dispatch(addBook('Mistborn', 'Brandon Sanderson'));
store.dispatch(addBook('Mistborn 2', 'Brandon Sanderson'));

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={Routes} />
    </Provider>,
    document.getElementById('root')
);

var book = ePub('../../Mistborn - The Final Empire.epub');
book.loaded.metadata.then(function(meta) {
    console.log(meta.title);
});
