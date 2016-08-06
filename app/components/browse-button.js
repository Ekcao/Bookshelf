import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class BrowseButton extends React.Component {
    render () {
        return (
            <RaisedButton
                className="browse-button"
                label="Browse"
                onClick={this.props.onBrowseClick}/>
        );
    }
}

BrowseButton.propTypes = {
    onBrowseClick: PropTypes.func.isRequired
};
