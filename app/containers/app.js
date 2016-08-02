import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppToolbar from '../components/AppToolbar';

import '../../public/css/app.scss';

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
};
