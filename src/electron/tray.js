const { Tray, Menu } = require('electron');
const path = require('path');
const icon = './icon.png';
const iconPath = path.join(__dirname, icon);

module.exports = {
  systemTray: function (win) {
    var appIcon = new Tray(iconPath);
    var contextMenu = Menu.buildFromTemplate([
      {
        label: 'Toggle DevTools',
        accelerator: 'Alt+Command+I',
        click: function() {
          win.show();
          win.toggleDevTools();
        }
      },
      { label: 'Quit',
        accelerator: 'Command+Q',
        selector: 'terminate:',
      }
    ]);
    appIcon.setToolTip('This is my application.');
    appIcon.setContextMenu(contextMenu);
    return (appIcon);
  }
}
