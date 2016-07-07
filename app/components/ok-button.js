import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class OkButton extends React.Component {
    getChildContext() {
        return {muiTheme: getMuiTheme()};
    }

    render () {
        return (
            <RaisedButton
                className="ok-button"
                label="OK"
                onClick={this.props.onClick}/>
        );
    }
}

// For testing
OkButton.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
}
