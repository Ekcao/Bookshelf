import { combineReducers } from 'redux';
import books from './Books';
import filter from './Filter';

const bookApp = combineReducers({
    books,
    filter
});

export default bookApp;
