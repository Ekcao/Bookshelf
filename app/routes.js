import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './containers/app';
import Index from './containers/home';
import Setup from './containers/setup';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Setup}/>
            <Route path="/index" component={Index}/>
        </Route>
    </Router>
);
