'use strict';

var {app} = require('electron');
var {BrowserWindow} = require('electron');

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({height: 1000, width: 1200});

    // BrowserWindow.addDevToolsExtension('C:\\Users\\Eric\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\0.15.0_0');
    // BrowserWindow.addDevToolsExtension('C:\\Users\\Eric\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\lmhkpmbekcpmknklioeibfkpmmfibljd\\2.4.1_0');

    mainWindow.loadURL('file://' + __dirname + '/public/html/index.html');

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
