const { BrowserWindow, Menu } = require('electron')
const {
  consoleInformation,
  consoleEvents,
  browserInformation,
  browserEvents,
  inputEvents,
  downloadPath,
} = require('./../../../configs/index')
const TopMenu_Main_Basic = require('./../../../templates/main-menu/main-basic')
let Screen
let Contents
let Session

module.exports = (id) => {
  Screen = BrowserWindow.fromId(id)
  Contents = Screen.webContents
  Session = Contents.session

  Screen.once('ready-to-show', () => {
    if (consoleEvents)
      console.log(
        'Main Window - Visible: ',
        Screen.getBounds(),
        Screen.getContentBounds(),
        Screen.getPosition(),
      )
    Screen.show()
    Contents.send('app-ready', 'The Application is Ready')
    // dialogTests()
  })
  Screen.on('page-title-updated', (event, title, explicitSet) => {
    if (consoleEvents) console.log('Main Window - Page Title Updated')
  })
  Screen.on('session-end', () => {
    if (consoleEvents) console.log('Main Window - Session End')
  })
  Screen.on('unresponsive', () => {
    if (consoleEvents) console.log('Main Window - UnResponsive')
  })
  Screen.on('responsive', () => {
    if (consoleEvents) console.log('Main Window - Responsive')
  })
  Screen.on('blur', () => {
    if (consoleEvents) console.log('Main Window - Blur')
  })
  Screen.on('focus', () => {
    Menu.setApplicationMenu(TopMenu_Main_Basic.Template())
    if (consoleEvents) console.log('Main Window - Focus')
  })
  Screen.on('show', () => {
    if (consoleEvents) console.log('Main Window - Show')
  })
  Screen.on('hide', () => {
    if (consoleEvents) console.log('Main Window - Hide')
  })
  Screen.on('maximize', () => {
    if (consoleEvents) console.log('Main Window - Maximize')
  })
  Screen.on('minimize', () => {
    if (consoleEvents) console.log('Main Window - Minimize')
  })
  Screen.on('unmaximize', () => {
    if (consoleEvents) console.log('Main Window - UnMaximize')
  })
  Screen.on('restore', () => {
    if (consoleEvents) console.log('Main Window - Restore')
  })
  Screen.on('will-resize', (event, newBounds) => {
    if (consoleEvents) console.log('Main Window - Will Resize')
  })
  Screen.on('resize', () => {
    if (consoleEvents) console.log('Main Window - Resize')
  })
  Screen.on('resized', () => {
    if (consoleEvents) console.log('Main Window - Resized')
  })
  Screen.on('will-move', (event, newBounds) => {
    if (consoleEvents) console.log('Main Window - Will Move')
  })
  Screen.on('move', () => {
    if (consoleEvents) console.log('Main Window - Move')
  })
  Screen.on('moved', () => {
    if (consoleEvents) console.log('Main Window - Moved')
  })
  Screen.on('enter-full-screen', () => {
    if (consoleEvents) console.log('Main Window - Enter Full Screen')
  })
  Screen.on('leave-full-screen', () => {
    if (consoleEvents) console.log('Main Window - Leave Full Screen')
  })
  Screen.on('enter-html-full-screen', () => {
    if (consoleEvents) console.log('Main Window - Enter Html Full Screen')
  })
  Screen.on('leave-html-full-screen', () => {
    if (consoleEvents) console.log('Main Window - Leave Html Full Screen')
  })
  Screen.on('always-on-top-changed', (event, isAlwaysOnTop) => {
    if (consoleEvents)
      console.log('Main Window - Always on Top Changed: ', isAlwaysOnTop)
  })
  Screen.on('app-command', (event, cmd) => {
    if (consoleEvents) console.log('Main Window - App Command Invoked')
  })
  Screen.on('scroll-touch-begin', () => {
    if (consoleEvents) console.log('Main Window - Scroll Touch Begin')
  })
  Screen.on('scroll-touch-end', () => {
    if (consoleEvents) console.log('Main Window - Scroll Touch End')
  })
  Screen.on('scroll-touch-edge', () => {
    if (consoleEvents) console.log('Main Window - Scroll Touch Edge')
  })
  Screen.on('swipe', () => {
    if (consoleEvents) console.log('Main Window - Swipe')
  })
  Screen.on('system-context-menu', (event, point) => {
    if (consoleEvents) console.log('Main Window - System Context Menu')
  })
  Screen.on('close', (event) => {
    if (consoleEvents) console.log('Main Window - Closing')
  })
  Screen.on('closed', () => {
    Screen = null
    global.DESKTOP_APP_WINDOW_MAIN_SCREEN_Id = null
    global.DESKTOP_APP_WINDOW_TRAY_MENU.destroy()
    global.DESKTOP_APP_WINDOW_TRAY_MENU = null
    if (consoleEvents) console.log('Main Window - Closed')
  })
}
