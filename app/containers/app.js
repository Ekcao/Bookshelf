import React from 'react';
import ReactDOM from 'react-dom';

import '../../public/css/app.css';

export default class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
