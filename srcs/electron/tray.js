const {Tray, Menu} = require('electron');
const path = require('path')

module.exports = {
  systemTray: function (win) {
    const iconPath = path.join(__dirname, '../app/img/icon.png');
    var appIcon = new Tray(iconPath);
    var contextMenu = Menu.buildFromTemplate([
      {
        label: 'Item1',
        type: 'radio',
        icon: iconPath
      },
      {
        label: 'Item2',
        submenu: [
          { label: 'submenu1' },
          { label: 'submenu2' }
        ]
      },
      {
        label: 'Item3',
        type: 'radio',
        checked: true
      },
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
