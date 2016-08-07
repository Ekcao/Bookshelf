'use strict';
var { dialog } = require('electron').remote;

import SetupLibrary from '../components/setup-library';
import { setLibrary } from '../actions';
import { connect } from 'react-redux';

function chooseLibrary() {
    return dialog.showOpenDialog({ properties: ['openDirectory']})[0];
}

function mapStateToProps(state) {
    return {
        pathValue: state.library.path,
        noPath: state.library.noPath
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
