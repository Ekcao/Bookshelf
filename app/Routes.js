import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import Setup from './containers/Setup';
import BookList from './components/BookList';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Setup}/>
        <Route path="/index" component={Home}>
            <Route path="/book-list" component={BookList}/>
        </Route>
    </Route>
);
