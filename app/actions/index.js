export const addBook = function(title, author) {
    if (title == null) {
        throw new Error("Null title");
    }

    if (author == null) {
        return {
            type: 'ADD_BOOK',
            title: title,
            author: ''
        };
    } else {
        return {
            type: 'ADD_BOOK',
            title: title,
            author: author
        };
    }
}

export const removeBook = function(index) {
    return {
        type: 'REMOVE_BOOK',
        index: index
    };
}

export const sortBooks = function() {

}

export const filterBooks = function(filter) {

}
