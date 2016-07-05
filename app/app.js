var {dialog} = require('electron').remote;

'use-strict';

import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Book from './components/book'
import '../public/css/app.css';

const muiTheme = getMuiTheme();

class App extends React.Component {
    setLibraryDirectory () {
        dialog.showOpenDialog({
            properties: ['openDirectory']
        });
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div id="app-root">
                    <Book
                        bookTitle="Mistborn: The Final Empire"
                        bookAuthor="Brandon Sanderson"
                        bookCover="https://upload.wikimedia.org/wikipedia/en/4/44/Mistborn-cover.jpg"/>
                    <RaisedButton
                        style={{margin: 8}}
                        label="Set Directory"
                        onClick={this.setLibraryDirectory.bind(this)}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
