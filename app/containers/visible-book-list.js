import BookList from '../components/book-list';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

const VisibleBookList = connect(
    mapStateToProps
)(BookList);

export default VisibleBookList;
