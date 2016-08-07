import React, { PropTypes } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class AddBookFab extends React.Component {
    render() {
        return (
            <div className="add-book-fab">
                <FloatingActionButton onClick={this.props.onFabClick}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        );
    }
}

AddBookFab.propTypes = {
    onFabClick: PropTypes.func
};
