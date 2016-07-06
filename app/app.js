import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Index from './index.js';
import Setup from './setup.js';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Setup}/>
        <Route path="/index" component={Index}/>
    </Router>
), document.getElementById('root'));
