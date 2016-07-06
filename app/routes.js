import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Index from './index';
import Setup from './setup';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={Setup}/>
        <Route path="/index" component={Index}/>
    </Router>
);
