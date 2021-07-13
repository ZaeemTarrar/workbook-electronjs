const {
  app,
  ipcMain,
  BrowserWindow,
  systemPreferences,
  Tray,
  Menu,
  screen,
} = require('electron')
const path = require('path')
const url = require('url')
const isDev = require('electron-is-dev')
const IPC = require('./../ipc/tray')

let MainTray = null
let MainTrayWindow = null
let MainTrayVisibility = false

// let template = [
//   {
//     label: 'Audio',
//     submenu: [
//       {
//         label: 'Low',
//         type: 'radio',
//         checked: true,
//         click: () => {},
//       },
//       {
//         label: 'High',
//         type: 'radio',
//         click: () => {},
//       },
//     ],
//   },
//   {
//     label: 'Video',
//     submenu: [
//       {
//         label: '1280x720',
//         type: 'radio',
//         checked: true,
//         click: () => {},
//       },
//       {
//         label: '1920x1080',
//         type: 'radio',
//         click: () => {},
//       },
//     ],
//   },
// ]

const WINDOW_SIZE_DEFAULTS = {
  width: 300,
  height: 400,
  margin: {
    x: 0,
    y: 0,
  },
}

// const InitTrayMenu = (tray) => {
//   /**
//    * Application Menu
//    */
//   const ctxMenu = Menu.buildFromTemplate(template)
//   const iconPath = path.join(__dirname, './../../icon.ico')
//   tray = new Tray(iconPath)
//   tray.setContextMenu(ctxMenu)
//   tray.setToolTip('Tray Application')
//   return tray
// }

const createTrayWindow = () => {
  MainTrayWindow = new BrowserWindow({
    width: WINDOW_SIZE_DEFAULTS.width,
    height: WINDOW_SIZE_DEFAULTS.height,
    maxWidth: WINDOW_SIZE_DEFAULTS.width,
    maxHeight: WINDOW_SIZE_DEFAULTS.height,
    show: true,
    frame: false,
    fullscreenable: false,
    resizable: false,
    useContentSize: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: false,
      webviewTag: true,
      backgroundThrottling: false,
    },
  })
  MainTrayWindow.setMenu(null)
  MainTrayWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../../../build/index.html')}`,
  )
  MainTrayWindow.hide()
  //   MainTrayWindow.on('blur', () => {
  //     if (!MainTrayWindow) return
  //     if (!MainTrayWindow.webContents.isDevToolsOpened()) {
  //       MainTrayWindow.hide()
  //       ipcMain.emit('tray-window-hidden', {
  //         window: MainTrayWindow,
  //         tray: MainTray,
  //       })
  //     }
  //   })
  MainTrayWindow.on('close', (event) => {
    if (!MainTrayWindow) return
    event.preventDefault()
    MainTrayWindow.hide()
  })
}

const toggleTrayWindow = () => {
  const Chain = new Promise((resolve, reject) => {
    if (!MainTrayWindow) reject()
    else resolve()
  })
  Chain.then(() => {
    if (MainTrayWindow.isVisible() === true && MainTrayVisibility == true) {
      MainTrayVisibility = false
      return MainTrayWindow.hide()
    } else {
      MainTrayVisibility = true
      return MainTrayWindow.show()
    }
  })
    .then(() => {
      return ipcMain.emit('tray-window-hidden', {
        window: MainTrayWindow,
        tray: MainTray,
      })
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
}

const calculateWindowPosition = () => {
  if (!MainTray) return
  const screenBounds = screen.getPrimaryDisplay().size
  const trayBounds = MainTray.getBounds()
  let x = 0
  let y = 0
  let StartMenu = 40
  x = screenBounds.width - WINDOW_SIZE_DEFAULTS.width
  y = screenBounds.height - WINDOW_SIZE_DEFAULTS.height - StartMenu
  return { x, y }
}

const alignWindow = () => {
  if (!MainTrayWindow) return
  const position = calculateWindowPosition()
  if (!position) return
  MainTrayWindow.setBounds({
    width: WINDOW_SIZE_DEFAULTS.width,
    height: WINDOW_SIZE_DEFAULTS.height,
    x: position.x,
    y: position.y,
  })
}

const InitTrayWindow = () => {
  const iconPath = path.join(__dirname, './../../icon.ico')
  MainTray = new Tray(iconPath)
  createTrayWindow()
  MainTrayWindow.webContents.on('did-finish-load', () => {
    // IPC(MainTrayWindow, MainTray, ipcMain)
    MainTrayWindow.webContents.send('isTray', true)
    ipcMain.on('quitApp', (event) => {
      try {
        MainTrayWindow.close()
      } catch (err) {
        console.log('Error: ', err)
      }
    })
    MainTray.setIgnoreDoubleClickEvents(true)
    MainTray.on('click', (event) => {
      //   console.log('Clicked: ', MainTrayWindow.isVisible(), MainTrayVisibility)
      const Chain = new Promise((resolve, reject) => resolve())
      Chain.then(() => {
        return ipcMain.emit('tray-window-clicked', {
          window: MainTrayWindow,
          tray: MainTray,
        })
      })
        .then(() => {
          return toggleTrayWindow()
        })
        .catch((err) => {
          console.log('Error: ', err.message)
        })
    })
    alignWindow()
    ipcMain.emit('tray-window-ready', {
      window: MainTrayWindow,
      tray: MainTray,
    })
  })
}

module.exports = {
  InitTrayWindow,
}
