/**
 * Imports
 */
const {
  app,
  ipcMain,
  BrowserWindow,
  systemPreferences,
  Tray,
  Menu,
} = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')
const Store = require('electron-store')
const IPC = require('./helpers/ipc/index')
// const { InitTray } = require('./helpers/trayWindow/index')
const { InitTrayMenu, InitTrayWindow } = require('./helpers/trayWindow/index2')

/**
 * Electron Store
 */
const schema = {
  foo: {
    type: 'number',
    maximum: 100,
    minimum: 1,
    default: 50,
  },
  bar: {
    type: 'string',
    format: 'url',
  },
}

const store = new Store({ schema })

store.store = {
  foo: 34,
  bar: 'http://zaeem.com/',
}

/**
 * Electron Store - Event Handlers
 */
const unsubscribe = store.onDidChange('foo', () => {})
const unsubscribe2 = store.onDidAnyChange(() => {})

unsubscribe()
unsubscribe2()

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit()
}

/**
 * Electron Windows and Trays
 */
let mainWindow = null
let tray = null
let trayWindow = null

const createWindow = () => {
  // app.dock.hide()
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: true,
    backgroundColor: 'transparent',
    center: true,
    hasShadow: true,
    opacity: 1,
    darktheme: true,
    transparent: true,
    titleBarStyle: 'hidden',
    roundedCorners: true,
    thickFrame: true,
    alwaysOnTop: false,
    fullscreenable: true,
    resizable: true,
    useContentSize: true,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: false,
      webviewTag: true,
      backgroundThrottling: false,
    },
  })

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  )

  if (isDev) mainWindow.webContents.openDevTools()
  mainWindow.setMenuBarVisibility(false)

  mainWindow.webContents.on('did-finish-load', function () {
    IPC(mainWindow, ipcMain)
    mainWindow.show()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
    process.exit()
  })
}

/**
 * Application Events
 */
const Ready = () => {
  // tray = InitTrayMenu(tray)
  InitTrayWindow()

  createWindow()
  // InitTray()
}
app.on('ready', Ready)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
  process.exit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
