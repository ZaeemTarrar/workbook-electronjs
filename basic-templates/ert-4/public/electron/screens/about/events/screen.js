const { BrowserWindow } = require('electron')
const {
  consoleInformation,
  consoleEvents,
  browserInformation,
  browserEvents,
  inputEvents,
  downloadPath,
} = require('./../../../configs/index')

module.exports = (id) => {
  let Screen = BrowserWindow.fromId(id)
  Screen.once('ready-to-show', () => {
    if (consoleEvents) console.log('About Window - Visible')
    setTimeout(() => {
      Screen.show()
      setTimeout(() => {
        Screen.hide()
        Screen.close()
      }, 2000)
    }, 1000)
  })
  Screen.on('closed', () => {
    Screen = null
    global.DESKTOP_APP_WINDOW_ABOUT_SCREEN_Id = null
    if (consoleEvents) console.log('About Window - Closed')
  })
}
