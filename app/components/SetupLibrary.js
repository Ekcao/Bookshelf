import React from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';

import OkButton from './OkButton';
import BrowseButton from './BrowseButton';

export default class SetupLibrary extends React.Component {

    render () {
        return (
            <div id="setup-library">
                <TextField
                    className="setup-library-text-field"
                    hintText="Path"
                    floatingLabelText="Set directory for Bookshelf library"
                    floatingLabelFixed={true}
                    />
                <BrowseButton />
                <Link to="/book-list">
                    <OkButton />
                </Link>
            </div>
        );
    }
}
