import React, { PropTypes } from 'react';

import Book from './book';
import AddBookFab from './add-book-fab';

export default class BookList extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.books.map(book =>
                        <Book
                            key={book.id}
                            title={book.title}
                            author={book.author}
                            cover={book.cover}
                        />
                    )}
                </ul>
                <AddBookFab onFabClick={() => console.log('FAB clicked')} />
            </div>
        );
    }
}

BookList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        cover: PropTypes.string
    }).isRequired).isRequired
};
