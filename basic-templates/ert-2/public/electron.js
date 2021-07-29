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
  contextBridge,
  nativeTheme,
} = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')
const Store = require('electron-store')
const IPC = require('./helpers/ipc/index')
// const { InitTray } = require('./helpers/trayWindow/index')
const { InitTrayWindow } = require('./helpers/trayWindow/index2')
const CreateMenu = require('./helpers/menus/menu-1')

// contextBridge.exposeInMainWorld('darkMode', {
//   toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
//   system: () => ipcRenderer.invoke('dark-mode:system'),
// })

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
    width: 900,
    height: 600,
    minWidth: 900,
    minHeight: 600,
    frame: false,
    backgroundColor: 'transparent',
    center: true,
    hasShadow: true,
    opacity: 1,
    darktheme: false,
    transparent: true,
    titleBarStyle: 'hidden',
    roundedCorners: true,
    thickFrame: false,
    alwaysOnTop: false,
    fullscreenable: true,
    resizable: true,
    maximizable: true,
    minimizable: true,
    useContentSize: true,
    maximize: false,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devtools: true,
      enableRemoteModule: false,
      webviewTag: true,
      backgroundThrottling: false,
    },
  })

  splash = new BrowserWindow({
    width: 800,
    height: 600,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
  })
  splash.loadURL(`file://${__dirname}/splash.html`)

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  )

  // ipcMain.handle('dark-mode:toggle', () => {
  //   if (nativeTheme.shouldUseDarkColors) {
  //     nativeTheme.themeSource = 'light'
  //   } else {
  //     nativeTheme.themeSource = 'dark'
  //   }
  //   return nativeTheme.shouldUseDarkColors
  // })

  // ipcMain.handle('dark-mode:system', () => {
  //   nativeTheme.themeSource = 'system'
  // })

  // nativeTheme.themeSource = 'dark'

  // if (isDev) mainWindow.webContents.openDevTools()
  CreateMenu()
  mainWindow.setMenuBarVisibility(false)
  // mainWindow.setFullScreen(true)
  // mainWindow.minimize()

  mainWindow.webContents.on('did-finish-load', function () {
    // IPC(mainWindow, ipcMain)
    mainWindow.webContents.send('isTray', false)
    ipcMain.on('traySection', (event, data) => {
      mainWindow.webContents.send('trayRoute', data)
    })
    ipcMain.on('quitApp', (event) => {
      try {
        mainWindow.close()
      } catch (err) {
        console.log('Error: ', err)
      }
    })
    ipcMain.on('minimizeApp', (event) => {
      try {
        mainWindow.minimize()
      } catch (err) {
        console.log('Error: ', err)
      }
    })
    ipcMain.on('minMaxApp', (event) => {
      try {
        console.log(mainWindow.isFullScreen(), mainWindow.isMaximized())
        if (mainWindow.isMaximized()) {
          mainWindow.restore()
          mainWindow.unmaximize()
        } else {
          mainWindow.maximize()
        }
      } catch (err) {
        console.log('Error: ', err)
      }
    })
    setTimeout(() => {
      splash.destroy()
      mainWindow.show()
    }, 2000)
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
