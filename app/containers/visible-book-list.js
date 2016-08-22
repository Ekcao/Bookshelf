import BookList from '../components/book-list';
import { connect } from 'react-redux';
import { setLibrary } from '../actions';
import { selectEpubPath } from '../util/renderer';

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onFabClick: () => {
            dispatch(setLibrary(selectEpubPath()));
        }
    };
}

const VisibleBookList = connect(
    mapStateToProps,
    mapDispatchToProps
)(BookList);

export default VisibleBookList;
