const { BrowserWindow } = require('electron')
const windowsStateKeeper = require('electron-window-state')
const Properties = require('./properties')
const ScreenEvents = require('./events/screen')
const ContentEvents = require('./events/content')
const SessionEvents = require('./events/session')

let WindowState
let Screen
let Contents
let Session

/**
 * Main Window Screen Creation
 */
module.exports.CreateWindow = () => {
  WindowState = windowsStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800,
  })

  Screen = new BrowserWindow(Properties(WindowState))
  Screen.loadFile('public/index.html')
  WindowState.manage(Screen)
  Screen.setResizable(true)

  Contents = Screen.webContents
  Session = Screen.session

  ContentEvents(Screen.id)
  SessionEvents(Screen.id)
  ScreenEvents(Screen.id)

  global.DESKTOP_APP_WINDOW_MAIN_SCREEN_Id = Screen.id
  global.DESKTOP_APP_WINDOW_MAIN_SCREEN = Screen
}
