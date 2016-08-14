export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const SET_FILTER = 'SET_FILTER';
export const SET_LIBRARY = 'SET_LIBRARY';

export const Filters = {
    SHOW_ALL: 'SHOW_ALL',
    BY_AUTHOR: 'BY_AUTHOR',
    BY_TITLE: 'BY_TITLE'
};

let bookId = 0;
export function addBook(title, author) {
    if (author == null) {
        return {
            type: ADD_BOOK,
            id: bookId++,
            title: title,
            author: '',
            cover: 'https://upload.wikimedia.org/wikipedia/en/4/44/Mistborn-cover.jpg'
        };
    } else {
        return {
            type: ADD_BOOK,
            title: title,
            id: bookId++,
            author: author,
            cover: 'https://upload.wikimedia.org/wikipedia/en/4/44/Mistborn-cover.jpg'
        };
    }
}

export function removeBook(index) {
    return {
        type: REMOVE_BOOK,
        index: index
    };
}

export function sortBooks() {

}

export function filterBooks(filter, arg = '') {
    return {
        type: SET_FILTER,
        filter: filter,
        arg: arg
    };
}

export function setLibrary(path) {
    return {
        type: SET_LIBRARY,
        path: path,
        noPath: false
    };
}
