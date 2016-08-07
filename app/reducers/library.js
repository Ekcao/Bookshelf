import { SET_LIBRARY } from '../actions';

export default function library(state = { path: '', noPath: true }, action) {
    switch (action.type) {
    case SET_LIBRARY:
        return {
            path: action.path,
            noPath: action.noPath
        };
    default:
        return state;
    }
}
