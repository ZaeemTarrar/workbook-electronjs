const { app } = require('electron')
const {
  consoleInformation,
  consoleEvents,
  browserInformation,
  browserEvents,
  inputEvents,
  downloadPath,
} = require('./../../configs/index')
const { DialogTests, GetCommonPaths } = require('./../../utils/Testing')
const { RegisterShortcuts } = require('./../../shortcuts/index')
const SystemEvents = require('./../system/index')
const { RegisterInternalProcessConnections } = require('./../ipc/index')
const TrayMenu = require('./../../trays/template/index')
const MainScreen = require('./../../screens/main/index')
const AboutScreen = require('./../../screens/about/index')

module.exports = () => {
  app.on('ready', (event, launchInfo) => {
    if (consoleEvents)
      console.log('App - Is Ready: ', app.isReady(), app.getVersion())
    // Informations
    GetCommonPaths()
    // Registerations
    RegisterShortcuts()
    // Events
    SystemEvents()
    // IPC
    RegisterInternalProcessConnections()
    // Trays
    TrayMenu.CreateTrayMenu()
    // Windows
    MainScreen.CreateWindow()
    // AboutScreen.CreateWindow()
  })

  app.on('browser-window-blur', (event, window) => {
    if (consoleEvents) console.log('App - Browser Window Blur')
  })

  app.on('browser-window-focus', (event, window) => {
    if (consoleEvents) console.log('App - Browser Window Focus')
  })

  app.on('browser-window-created', (event, window) => {
    if (consoleEvents) console.log('App - Browser Window Created')
  })

  app.on('web-contents-created', (event, webContents) => {
    if (consoleEvents) console.log('App - Web Contents Created')
  })

  app.on(
    'certificate-error',
    (event, webContents, url, error, certificate, callback) => {
      if (consoleEvents) console.log('App - Certificate Error')
      if (url === 'https://github.com') {
        event.preventDefault()
        callback(true)
      } else {
        callback(false)
      }
    },
  )

  app.on(
    'select-client-certificate',
    (event, webContents, url, list, callback) => {
      if (consoleEvents) console.log('App - Select Client Certificate')
      event.preventDefault()
      callback(list[0])
    },
  )

  app.on('gpu-info-update', () => {
    if (consoleEvents) console.log('App - GPU Info Update')
  })

  app.on('render-process-gone', (event, webContents, details) => {
    if (consoleEvents) console.log('App - Render Process Gone')
  })

  app.on('child-process-gone', (event, details) => {
    if (consoleEvents) console.log('App - Child Process Gone')
  })

  app.on(
    'accessibility-support-changed',
    (event, accessibilitySupportEnabled) => {
      if (consoleEvents) console.log('App - Accessibility Support Changed')
    },
  )

  app.on('session-created', (session) => {
    if (consoleEvents) console.log('App - Session Created')
  })

  app.on('second-instance', (event, args, workingDirectory) => {
    if (consoleEvents) console.log('App - Second Instance')
  })

  app.on('desktop-capturer-get-resources', (session) => {
    if (consoleEvents) console.log('App - Desktop Capturer Get Resources')
  })

  app.on('will-finish-launching', () => {
    if (consoleEvents) console.log('App - Will Finish Launching')
  })

  app.on('before-quit', (event) => {
    if (consoleEvents) console.log('App - Before Quit')
  })

  app.on('quit', (event, exitCode) => {
    if (consoleEvents) console.log('App - Quit')
    app.exit()
    process.exit()
  })

  app.on('will-quit', (event) => {
    if (consoleEvents) console.log('App - Will Quit')
  })

  app.on('window-all-closed', () => {
    if (consoleEvents) console.log('App - Windows All Closed')
    if (process.platform !== 'darwin') app.quit()
  })

  app.on('activate', () => {
    if (consoleEvents) console.log('App - Activated')
    if (Main.window === null) createWindow()
  })

  if (process.platform === 'darwin') {
  }
}
