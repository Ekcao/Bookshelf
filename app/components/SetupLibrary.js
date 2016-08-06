import React, { PropTypes } from 'react';
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
                    value={this.props.pathValue}
                    floatingLabelText="Set directory for Bookshelf library"
                    floatingLabelFixed={true}
                    />
                <BrowseButton
                    onBrowseClick={this.props.onBrowseClick}
                     />
                <Link to="/book-list">
                    <OkButton
                        />
                </Link>
            </div>
        );
    }
}

SetupLibrary.propTypes = {
    pathValue: PropTypes.string,
    onBrowseClick: PropTypes.func.isRequired,
};
