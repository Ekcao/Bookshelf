import React, { PropTypes } from 'react';

import Book from './book';
import AddBookFab from './add-book-fab';

export default class BookList extends React.Component {
    render() {
        return (
            <div>
                <ul className="book-list">
                    {this.props.books.map(book =>
                        <li className="book-item" key={book.id}>
                            <Book
                                title={book.title}
                                author={book.author}
                                cover={book.cover}
                            />
                        </li>
                    )}
                </ul>
                <AddBookFab onFabClick={this.props.onFabClick} />
            </div>
        );
    }
}

BookList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        cover: PropTypes.string
    }).isRequired).isRequired,
    onFabClick: PropTypes.func
};
