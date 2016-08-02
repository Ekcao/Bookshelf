import update from 'react-addons-update';

export default function books(state = [], action) {
    switch (action.type) {
        case 'ADD_BOOK':
            var book = {
                title: action.title,
                author: action.author
            };
            return update(state, {$push: [book]});
        case 'REMOVE_BOOK':
            return update(state, {$splice: [[action.index, 1]]});

        default:
            return state;
    }
}
