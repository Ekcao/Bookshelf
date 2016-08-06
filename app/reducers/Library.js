import { SET_LIBRARY } from '../actions';

export default function library(state = {}, action) {
    switch (action.type) {
    case SET_LIBRARY:
        return {
            path: action.path
        };
    default:
        return state;
    }
}
