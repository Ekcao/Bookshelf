import React from 'react';

import Book from './book';

export default class BookList extends React.Component {
    render() {
        return (
            <Book
                bookTitle="Mistborn: The Final Empire"
                bookAuthor="Brandon Sanderson"
                bookCover="https://upload.wikimedia.org/wikipedia/en/4/44/Mistborn-cover.jpg"/>
        );
    }
}
