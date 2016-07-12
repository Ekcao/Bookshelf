import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Book extends React.Component {

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
