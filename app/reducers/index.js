import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';
import library from './library';

const bookApp = combineReducers({
    books,
    filter,
    library
});

export default bookApp;
