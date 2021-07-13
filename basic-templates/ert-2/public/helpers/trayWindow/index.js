const { app, BrowserWindow, ipcMain, Tray, screen } = require('electron')
const path = require('path')
const url = require('url')
const isDev = require('electron-is-dev')

let MainTray = null
let TrayWindow = null

const WINDOW_SIZE_DEFAULTS = {
  width: 200,
  height: 300,
  margin: {
    x: 0,
    y: 0,
  },
}

const createWindow = () => {
  TrayWindow = new BrowserWindow({
    width: WINDOW_SIZE_DEFAULTS.width,
    height: WINDOW_SIZE_DEFAULTS.height,
    maxWidth: WINDOW_SIZE_DEFAULTS.width,
    maxHeight: WINDOW_SIZE_DEFAULTS.height,
    show: false,
    frame: false,
    fullscreenable: false,
    resizable: false,
    useContentSize: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      backgroundThrottling: false,
    },
  })
  TrayWindow.setMenu(null)
  TrayWindow.loadURL(
    isDev
      ? 'http://localhost:3000/'
      : `file://${path.join(__dirname, '../build/index.html')}/`,
  )
  TrayWindow.hide()
  TrayWindow.on('blur', () => {
    if (!TrayWindow) return
    if (!TrayWindow.webContents.isDevToolsOpened()) {
      TrayWindow.hide()
      ipcMain.emit('tray-window-hidden', { window: TrayWindow, tray: MainTray })
    }
  })
  TrayWindow.on('close', (event) => {
    if (!TrayWindow) return
    event.preventDefault()
    TrayWindow.hide()
  })
}

const toggleTrayWindow = () => {
  if (!TrayWindow) return
  if (TrayWindow.isVisible()) {
    TrayWindow.hide()
  } else {
    TrayWindow.show()
  }
  ipcMain.emit('tray-window-hidden', { window: TrayWindow, tray: MainTray })
}

const calculateWindowPosition = () => {
  if (!MainTray) return
  const screenBounds = screen.getPrimaryDisplay().size
  const trayBounds = MainTray.getBounds()
  let trayPos = 4
  trayPos = trayBounds.y > screenBounds.height / 2 ? trayPos : trayPos / 2
  trayPos = trayBounds.x > screenBounds.width / 2 ? trayPos : trayPos - 1
  let x = 0
  let y = 0
  switch (trayPos) {
    case 1:
      {
        x = Math.floor(
          trayBounds.x + WINDOW_SIZE_DEFAULTS.margin.x + trayBounds.x,
        )
        y = Math.floor(
          trayBounds.y + WINDOW_SIZE_DEFAULTS.margin.y + trayBounds.y,
        )
      }
      break
    case 2:
      {
        x = Math.floor(
          trayBounds.x -
            WINDOW_SIZE_DEFAULTS.width -
            WINDOW_SIZE_DEFAULTS.margin.x,
        )
        y = Math.floor(
          trayBounds.y + WINDOW_SIZE_DEFAULTS.margin.y + trayBounds.y,
        )
      }
      break
    case 3:
      {
        x = Math.floor(
          trayBounds.x + WINDOW_SIZE_DEFAULTS.margin.x + trayBounds.x,
        )
        y = Math.floor(
          trayBounds.y -
            WINDOW_SIZE_DEFAULTS.height -
            WINDOW_SIZE_DEFAULTS.margin.y,
        )
      }
      break
    case 4:
      {
        x = Math.floor(
          trayBounds.x -
            WINDOW_SIZE_DEFAULTS.width -
            WINDOW_SIZE_DEFAULTS.margin.x,
        )
        y = Math.floor(
          trayBounds.y -
            WINDOW_SIZE_DEFAULTS.height -
            WINDOW_SIZE_DEFAULTS.margin.y,
        )
      }
      break
    default: {
    }
  }
  return { x, y }
}

const alignWindow = () => {
  if (!TrayWindow) return
  const position = calculateWindowPosition()
  if (!position) return
  TrayWindow.setBounds({
    width: WINDOW_SIZE_DEFAULTS.width,
    height: WINDOW_SIZE_DEFAULTS.height,
    x: position.x,
    y: position.y,
  })
}

const InitTray = () => {
  MainTray = new Tray(path.join(__dirname, 'icon.ico'))
  createWindow()
  MainTray.on('click', function (event) {
    ipcMain.emit('tray-window-clicked', { window: TrayWindow, tray: MainTray })
    toggleTrayWindow()
  })
  alignWindow()
  ipcMain.emit('tray-window-ready', { window: TrayWindow, tray: MainTray })
}

module.exports = {
  InitTray,
}
