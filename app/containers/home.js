import React from 'react';
import ReactDOM from 'react-dom';

import Book from './BookList'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
