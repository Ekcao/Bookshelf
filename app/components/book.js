import React, { PropTypes } from 'react';
import {Card, CardHeader, CardMedia } from 'material-ui/Card';

export default class Book extends React.Component {

    render() {
        return (
            <Card className="book">
                <CardMedia className="book-cover">
                    <img src={this.props.cover}/>
                </CardMedia>

                <CardHeader
                    className="book-header"
                    title={this.props.title}
                    subtitle={this.props.author}/>
            </Card>
        );
    }
}

Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    cover: PropTypes.string
};
