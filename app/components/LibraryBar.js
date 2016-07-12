import React from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import OkButton from './OkButton';

export default class LibraryBar extends React.Component {

    render () {
        return (
            <div id="library-bar">
                <TextField
                    className="library-bar-text-field"
                    hintText="Path"
                    floatingLabelText="Set directory for Bookshelf library"
                    floatingLabelFixed={true}
                    />
                <Link to="/book-list">
                    <OkButton />
                </Link>
            </div>
        );
    }
}
