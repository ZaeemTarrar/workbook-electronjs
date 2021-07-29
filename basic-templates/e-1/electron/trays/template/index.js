const { app, Menu, Tray } = require('electron')

let TrayMenu = null

const Template = () => {
  return Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' },
  ])
}

module.exports.CreateTrayMenu = () => {
  TrayMenu = new Tray('/../public/images/icon.ico')
  TrayMenu.setToolTip('This is my application.')
  TrayMenu.setContextMenu(Template())
}
