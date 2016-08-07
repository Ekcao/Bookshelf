import React from 'react';

import Book from './book';
import AddBookFab from './add-book-fab';

export default class BookList extends React.Component {
    render() {
        return (
            <div>
                <Book
                    bookTitle="Mistborn: The Final Empire"
                    bookAuthor="Brandon Sanderson"
                    bookCover="https://upload.wikimedia.org/wikipedia/en/4/44/Mistborn-cover.jpg"/>
                <AddBookFab onFabClick={() => console.log('FAB clicked')} />
            </div>
        );
    }
}
