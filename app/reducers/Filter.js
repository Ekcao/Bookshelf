export default function filter(state = { filter: 'SHOW_ALL', arg: '' }, action) {
    switch (action.type) {
    case 'SET_FILTER':
        return {
            filter: action.filter,
            arg: action.arg
        };
    default:
        return state;
    }
}
