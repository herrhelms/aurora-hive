var menubar = require('menubar')
var mb = menubar({dir: __dirname, icon: __dirname + '/icon.png', preloadWindow: true, width:400, height:585, showDockIcon: false, resizable: false})

mb.on('ready', () => {
  mb.window.webContents.on('did-finish-load', function() {
    mb.window.webContents.send('ping');
  });
})

mb.on('show', () => {
  mb.tray.setHighlightMode('never');
})
