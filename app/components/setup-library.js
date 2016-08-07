import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

import OkButton from './ok-button';
import BrowseButton from './browse-button';

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
                <OkButton
                    noPath={this.props.noPath}
                    onOkClick={() => this.context.router.push('/book-list')}
                    />
            </div>
        );
    }
}

SetupLibrary.contextTypes = {
    router: PropTypes.object.isRequired
};

SetupLibrary.propTypes = {
    pathValue: PropTypes.string,
    onBrowseClick: PropTypes.func.isRequired,
    noPath: PropTypes.bool.isRequired
};
