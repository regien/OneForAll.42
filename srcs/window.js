const {BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

const {systemTray} = require('./tray');

module.exports = {
  createWindow: function () {
    var mainWindow = new BrowserWindow({width: 800, height: 600});

    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, '../app/index.html'),
      protocol: 'file:',
      slashes: true
    }));
    mainWindow.on('closed', function() {
      mainWindow = null
    });
    systemTray(mainWindow);
    return (mainWindow);
  }
}
