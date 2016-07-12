import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { ipcRenderer } from 'electron';

import AppToolbar from '../components/AppToolbar';

import '../../public/css/app.css';

export default class App extends React.Component {
    getChildContext() {
        return {muiTheme: getMuiTheme()};
    }

    render() {
        return (
            <div>
                <AppToolbar />
                {this.props.children}
            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
}
