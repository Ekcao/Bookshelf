import update from 'react-addons-update';
import { ADD_BOOK, REMOVE_BOOK } from '../actions';

export default function books(state = [], action) {
    switch (action.type) {
    case ADD_BOOK:
        var book = {
            id: action.id,
            title: action.title,
            author: action.author,
            cover: action.cover
        };
        return update(state, {$push: [book]});
    case REMOVE_BOOK:
        return update(state, {$splice: [[action.index, 1]]});

    default:
        return state;
    }
}
