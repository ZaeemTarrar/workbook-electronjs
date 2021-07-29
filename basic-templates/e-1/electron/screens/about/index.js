const { BrowserWindow } = require('electron')
const Properties = require('./properties')
const ScreenEvents = require('./events/screen')

let Screen

module.exports.CreateWindow = () => {
  Screen = new BrowserWindow(Properties())
  Screen.loadFile('public/about.html')
  Contents = Screen.webContents
  Sessions = Screen.session

  ScreenEvents(Screen.id)

  global.DESKTOP_APP_WINDOW_ABOUT_SCREEN_Id = Screen.id
  global.DESKTOP_APP_WINDOW_ABOUT_SCREEN = Screen
}
