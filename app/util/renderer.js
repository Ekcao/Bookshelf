'use strict';
var { dialog } = require('electron').remote;

export function selectLibraryPath() {
    return dialog.showOpenDialog({ properties: ['openDirectory']})[0];
}

export function selectEpubPath() {
    return dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [
            {name: 'EPUB', extensions: ['epub']}
        ]
    })[0];
}
