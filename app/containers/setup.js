import SetupLibrary from '../components/setup-library';
import { setLibrary } from '../actions';
import { connect } from 'react-redux';
import { selectLibraryPath } from '../util/renderer';

function mapStateToProps(state) {
    return {
        pathValue: state.library.path,
        noPath: state.library.noPath
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onBrowseClick: () => {
            dispatch(setLibrary(selectLibraryPath()));
        }
    };
}

const Setup = connect(
    mapStateToProps,
    mapDispatchToProps
)(SetupLibrary);

export default Setup;
