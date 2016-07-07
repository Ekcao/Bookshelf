import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { ipcRenderer } from 'electron';

import AppToolbar from '../components/app-toolbar';

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

ipcRenderer.send('read setting', 'test');
ipcRenderer.on('setting read', (event, arg) => {
    console.log(arg);
});
