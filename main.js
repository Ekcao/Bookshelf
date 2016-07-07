'use strict';

var {app} = require('electron');
var {BrowserWindow} = require('electron');
var {ipcMain} = require('electron');

var settings = require('./app/settings');

var mainWindow = null;

app.on('ready', function() {
    settings.saveSetting('test', 'test test');
    mainWindow = new BrowserWindow({height: 800, width: 1000});

    mainWindow.loadURL('file://' + __dirname + '/public/html/index.html');

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});

ipcMain.on('read setting', function() {
    mainWindow.webContents.send('setting read', settings.readSetting('test'));
});
