const {
  consoleInformation,
  consoleEvents,
  browserInformation,
  browserEvents,
  inputEvents,
  downloadPath,
} = require('./../../configs/index')
const path = require('path')

module.exports = (WindowState) => {
  if (WindowState === null || WindowState === undefined)
    throw new Error('Window State is Not Passed in Properties')
  let macOsProps = {
    simpleFullscreen: false,
    enableLargerThanScreen: false,
    // visualEffectState: 'vibrancy',
    roundedCorners: true,
    vibrancy: 'popover',
  }
  let winOsProps = {}
  let linuxOsProps = {}
  let properties = {
    width: WindowState.width,
    height: WindowState.height,
    minWidth: 1000,
    minHeight: 500,
    maxWidth: 1600,
    maxHeight: 1000,
    x: WindowState.x,
    y: WindowState.y,
    useContentSize: false,
    center: true,
    show: false,
    frame: true,
    titleBarStyle: 'default',
    backgroundColor: '#fefefe',
    resizable: true,
    movable: true,
    minimizable: true,
    maximizable: true,
    closable: true,
    focusable: true,
    alwaysOnTop: true,
    fullscreenable: true,
    fullscreen: false,
    skipTaskbar: false,
    kiosk: false,
    title: 'Electon - Desktop Application',
    icon: undefined,
    paintWhenInitiallyHidden: true,
    acceptFirstMouse: false,
    disableAutoHideCursor: false,
    autoHideMenuBar: false,
    hasShadow: true,
    opacity: 1.0,
    darkTheme: false,
    transparent: false,
    trafficLightPosition: {
      x: 0,
      y: 0,
    },
    thickFrame: true,
    webPreferences: {
      devTools: true,
      offscreen: true,
      contextIsolation: false,
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      nodeIntegrationInSubFrames: true,
      // preload: "",
      // sandbox: "",
      enableRemoteModule: true,
      zoomFactor: 1.0,
      javascript: true,
      webSecurity: true,
      allowRunningInsecureContent: false,
      images: true,
      textAreasAreResizable: true,
      webgl: true,
      plugins: false,
      scrollBounce: false, // MasOs
      defaultFontFamily: 'Comic Sans MS',
      defaultFontSize: 12,
      minimumFontSize: 6,
      offscreen: false,
      nativeWindowOpen: false,
      additionalArguments: '',
      safeDialogs: false,
      safeDialogsMessage: 'Safe Dialog Message by Me',
      disableDialogs: false,
      navigateOnDragDrop: false,
      autoplayPolicy: 'no-user-gesture-required',
      spellcheck: true,
      enableWebSQL: true,
      enablePreferredSizeMode: false,
      // session: customSes,
      partition: 'persist:part1',
      preload: path.join(__dirname, './../../../public/scripts/preload.js'),
    },
  }
  if (process.platform === 'win32' || process.platform === 'win64') {
    properties = { ...properties, ...winOsProps }
  }
  if (process.platform === 'darwin') {
    properties = { ...properties, ...macOsProps }
  }
  if (process.platform === 'linux') {
    properties = { ...properties, ...linuxOsProps }
  }
  if (consoleInformation)
    console.log('Operating System Properties: ', properties)

  return properties
}
