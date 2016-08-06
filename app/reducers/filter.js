import { SET_FILTER, Filters } from '../actions';

export default function filter(state = { filter: Filters.SHOW_ALL, arg: '' }, action) {
    switch (action.type) {
    case SET_FILTER:
        return {
            filter: action.filter,
            arg: action.arg
        };
    default:
        return state;
    }
}
