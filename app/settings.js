'use strict';

var settingsFile = require('nconf').file({file: getUserHome() + '/Bookshelf/bookshelf-settings.json'});

function saveSetting(settingKey, settingValue) {
    settingsFile.set(settingKey, settingValue);
    settingsFile.save();
}

function readSetting(settingKey) {
    settingsFile.load();
    return settingsFile.get(settingKey);
}

function getUserHome() {
    return process.env['USERPROFILE'];
}

module.exports = {
    saveSetting: saveSetting,
    readSetting: readSetting
};
