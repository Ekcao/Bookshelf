import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class OkButton extends React.Component {

    render () {
        return (
            <RaisedButton
                className="ok-button"
                label="OK"
                onClick={this.props.onClick}/>
        );
    }
}
