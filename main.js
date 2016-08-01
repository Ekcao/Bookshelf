'use strict';

var {app} = require('electron');
var {BrowserWindow} = require('electron');

var settings = require('./app/settings');

var mainWindow = null;

app.on('ready', function() {
    settings.saveSetting('test', 'test test');
    mainWindow = new BrowserWindow({height: 800, width: 1000});

    // BrowserWindow.addDevToolsExtension('C:\\Users\\Eric\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\0.15.0_0');

    mainWindow.loadURL('file://' + __dirname + '/public/html/index.html');

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
