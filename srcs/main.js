const {app} = require('electron');

const {createWindow} = require('./createWindow');

let mainWindow = null;

app.on('ready', createWindow);

// mac shit goes here
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});
app.on('activate', function () {
  if (mainWindow === null) {
    mainWindow = createWindow();
  }
});
