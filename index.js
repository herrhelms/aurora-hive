var menubar = require('menubar')
var settings = require('./package.json').env
  console.log('settings',settings);


var mb = menubar({dir: __dirname, icon: __dirname + '/icon.png', preloadWindow: true, width:400, height:585, showDockIcon: settings.showDockIcon, resizable: false})

const {Menu} = require('electron')

mb.on('ready', () => {
  const template = [{
    label: 'AuroraHive',
    submenu: [
      { label: "About AuroraHive", selector: "orderFrontStandardAboutPanel:" },
      { type: "separator" },
      { label: "Quit", accelerator: "Command+Q", click: function() { mb.app.quit(); }}
    ]}, {
    label: "Edit",
    submenu: [
      { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
      { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
      { type: "separator" },
      { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
      { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
      { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
      { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
    ]}
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
  mb.window.webContents.on('did-finish-load', function() {
    mb.window.webContents.send('ping');
  });
})

mb.on('show', () => {
  mb.tray.setHighlightMode('never');
})
