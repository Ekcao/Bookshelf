import { combineReducers } from 'redux';
import books from './Books';
import filter from './Filter';
import library from './Library';

const bookApp = combineReducers({
    books,
    filter,
    library
});

export default bookApp;
