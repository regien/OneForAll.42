const { BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

const { systemTray } = require('./tray');

module.exports = {
  createWindow: function () {
    var mainWindow = new BrowserWindow({ 
      width: 800, 
      height: 600
    });
    mainWindow.loadURL(
      process.env.ELECTRON_START_URL ||
        url.format({
          pathname: 'localhost:3000',
          protocol: 'http:',
          slashes: true
        })
    )
    mainWindow.on('closed', () => {
      mainWindow = null
    })
    systemTray(mainWindow);
    return (mainWindow);
  }
}
