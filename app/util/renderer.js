'use strict';
var { dialog } = require('electron').remote;

export function selectLibraryPath() {
    return dialog.showOpenDialog({ properties: ['openDirectory']})[0];
}
