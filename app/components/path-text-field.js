import React from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import OkButton from './ok-button';

export default class PathTextField extends React.Component {
    getChildContext() {
        return {muiTheme: getMuiTheme()};
    }

    render () {
        return (
            <div>

                <TextField
                    hintText="Path"
                    floatingLabelText="Set directory for Bookshelf library"
                    floatingLabelFixed={true}
                    />
                
                <Link to="/index">
                    <OkButton/>
                </Link>
            </div>
        );
    }
}

// For testing
PathTextField.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
}
