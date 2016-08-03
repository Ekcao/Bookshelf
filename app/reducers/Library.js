import { SET_LIBRARY } from '../actions';

export default function setLibrary(state = '', action) {
    switch (action.type) {
    case SET_LIBRARY:
        return action.path;
    default:
        return state;
    }
}
