import React from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import OkButton from './ok-button';

export default class LibraryBar extends React.Component {
    getChildContext() {
        return {muiTheme: getMuiTheme()};
    }

    render () {
        return (
            <div id="library-bar">
                <TextField
                    className="library-bar-text-field"
                    hintText="Path"
                    floatingLabelText="Set directory for Bookshelf library"
                    floatingLabelFixed={true}
                    />
                <Link to="/index">
                    <OkButton />
                </Link>
            </div>
        );
    }
}

// For testing
LibraryBar.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
}
