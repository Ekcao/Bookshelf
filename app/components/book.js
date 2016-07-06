import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import '../../public/css/book.css';

export default class Book extends React.Component {
    getChildContext() {
        return {muiTheme: getMuiTheme()};
    }

    render() {
        return (
            <Card className="book">
                <CardMedia className="book-cover">
                    <img src={this.props.bookCover}/>
                </CardMedia>

                <CardHeader
                    className="book-header"
                    title={this.props.bookTitle}
                    subtitle={this.props.bookAuthor}/>
            </Card>
        );
    }
}

// For testing
Book.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
}
