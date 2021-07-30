const { Menu, Tray } = require('electron')
const path = require('path')

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
  let toggle = false
  let TrayImagePath = path.join(__dirname, 'icon.ico')
  TrayMenu = new Tray(TrayImagePath)
  TrayMenu.setTitle('My Electron Tray')
  TrayMenu.setToolTip('This is my application.')
  TrayMenu.setContextMenu(Template())

  TrayMenu.on('click', () => {
    // DESKTOP_APP_WINDOW_MAIN_SCREEN.isVisible()
    //   ? DESKTOP_APP_WINDOW_MAIN_SCREEN.hide()
    //   : DESKTOP_APP_WINDOW_MAIN_SCREEN.show()
    toggle ? TrayMenu.closeContextMenu() : TrayMenu.popUpContextMenu()
    toggle = !toggle
  })
  TrayMenu.on('double-click', () => {})
  TrayMenu.on('right-click', () => {})

  global.DESKTOP_APP_WINDOW_TRAY_MENU = TrayMenu
}
