import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import Home from './containers/home';
import Setup from './containers/setup';
import BookList from './components/book-list';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Setup}/>
        <Route path="/index" component={Home}>
            <Route path="/book-list" component={BookList}/>
        </Route>
    </Route>
);
