'use strict';
var { dialog } = require('electron').remote;

import SetupLibrary from '../components/SetupLibrary';
import { setLibrary } from '../actions';
import { connect } from 'react-redux';

function chooseLibrary() {
    return dialog.showOpenDialog({ properties: ['openDirectory']});
}

function mapStateToProps(state) {
    return {
        pathValue: state.library.path
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onBrowseClick: () => {
            dispatch(setLibrary(chooseLibrary()));
        }
    };
}

const Setup = connect(
    mapStateToProps,
    mapDispatchToProps
)(SetupLibrary);

export default Setup;
