const { BrowserWindow } = require('electron')
const {
  consoleInformation,
  consoleEvents,
  browserInformation,
  browserEvents,
  inputEvents,
  downloadPath,
} = require('../../../configs/index')
const ContextMenu_Main_Custom = require('../../../templates/context-menu/main-custom')
let Screen
let Contents
let Session

module.exports = (id) => {
  Screen = BrowserWindow.fromId(id)
  Contents = Screen.webContents
  Session = Contents.session

  Contents.on('did-finish-load', () => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Did Finish Load')
    // getCookies()
  })
  Contents.on(
    'did-fail-load',
    (
      event,
      errorCode,
      errorDescription,
      validatedURL,
      isMainFrame,
      frameProcessId,
      frameRoutingId,
    ) => {
      if (consoleEvents)
        console.log('Main Window - Web Contents - Did Fail Load')
    },
  )
  Contents.on(
    'did-fail-provisional-load',
    (
      event,
      errorCode,
      errorDescription,
      validatedURL,
      isMainFrame,
      frameProcessId,
      frameRoutingId,
    ) => {
      if (consoleEvents)
        console.log('Main Window - Web Contents - Did Fail Provisional Load')
    },
  )
  Contents.on(
    'did-frame-finish-load',
    (event, isMainFrame, frameProcessId, frameRoutingId) => {
      if (consoleEvents)
        console.log('Main Window - Web Contents - Did Frame Finish Load')
    },
  )
  Contents.on('did-start-loading', () => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Did Start Loading')
  })
  Contents.on('did-stop-loading', () => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Did Stop Loading')
  })
  Contents.on('dom-ready', (event) => {
    if (consoleEvents) console.log('Main Window - Web Contents - Dom Ready')
  })
  Contents.on('page-title-updated', (event, title, explicitSet) => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Page Title Updated')
  })
  Contents.on('page-favicon-updated', (event, favicons) => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Page Favicon Updated')
  })
  Contents.on('crached', (event, killed) => {
    if (consoleEvents) console.log('Main Window - Web Contents - Crashed')
  })
  Contents.on(
    'new-window',
    (
      event,
      url,
      frameName,
      disposition,
      options,
      additionalFeatures,
      referrer,
      postBody,
    ) => {
      if (consoleEvents)
        console.log('Main Window - Web Contents - New Window: ', url)
    },
  )
  Contents.on('did-create-window', (window, details) => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Did Create Window')
  })
  Contents.on('will-navigate', (event, url) => {
    if (consoleEvents) console.log('Main Window - Web Contents - Will Navigate')
  })
  Contents.on(
    'did-start-navigation',
    (event, url, isInPlace, isMainFrame, frameProcessId, frameRoutingId) => {
      if (consoleEvents)
        console.log('Main Window - Web Contents - Did Start Navigation')
    },
  )
  Contents.on(
    'will-redirect',
    (event, url, isInPlace, isMainFrame, frameProcessId, frameRoutingId) => {
      if (consoleEvents)
        console.log('Main Window - Web Contents - Will Redirect')
    },
  )
  Contents.on(
    'did-redirect-navigation',
    (event, url, isInPlace, isMainFrame, frameProcessId, frameRoutingId) => {
      if (consoleEvents)
        console.log('Main Window - Web Contents - Did Redirect Navigation')
    },
  )
  Contents.on(
    'did-navigate',
    (event, url, httpResponseCode, httpStatusText) => {
      if (consoleEvents)
        console.log(
          'Main Window - Web Contents - Did Navigate: ',
          url,
          httpResponseCode,
          httpStatusText,
          Contents.getURL(),
        )
    },
  )
  Contents.on(
    'did-frame-navigate',
    (
      event,
      url,
      httpResponseCode,
      httpStatusText,
      isMainFrame,
      frameProcessId,
      frameRoutingId,
    ) => {
      if (consoleEvents)
        console.log('Main Window - Web Contents - Did Frame Navigate')
    },
  )
  Contents.on(
    'did-navigate-in-page',
    (event, url, isMainFrame, frameProcessId, frameRoutingId) => {
      if (consoleEvents)
        console.log('Main Window - Web Contents - Did Navigate In Page')
    },
  )
  Contents.on('will-prevent-unload', (event) => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Will Prevent Unload')
  })
  Contents.on('render-process-gone', (event, details) => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Render Process Gone')
  })
  Contents.on('responsive', () => {
    if (consoleEvents) console.log('Main Window - Web Contents - Responsive')
  })
  Contents.on('unresponsive', () => {
    console.log('Main Window - Web Contents - UnResponsive')
  })
  Contents.on('plugin-crashed', (event, name, version) => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Plugin Crashed')
  })
  Contents.on('destroyed', () => {
    if (consoleEvents) console.log('Main Window - Web Contents - Destroyed')
  })
  Contents.on('before-input-event', (event, input) => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Before Input Event')
  })
  Contents.on('enter-html-full-screen', () => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Enter Html Full Screen')
  })
  Contents.on('leave-html-full-screen', () => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Leave Html Full Screen')
  })
  Contents.on('zoom-changed', (event, zoomDirection) => {
    if (consoleEvents) console.log('Main Window - Web Contents - Zoom Changed')
  })
  Contents.on('devtools-opened', () => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Devtools Opened')
  })
  Contents.on('devtools-closed', () => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Devtools Closed')
  })
  Contents.on('devtools-focused', () => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Devtools Focused')
  })
  Contents.on(
    'certificate-error',
    (event, url, error, certificate, callback) => {
      if (consoleEvents)
        console.log('Main Window - Web Contents - Certificate Error')
    },
  )
  Contents.on(
    'select-client-certificate',
    (event, url, certificateList, callback) => {
      if (consoleEvents)
        console.log('Main Window - Web Contents - Certificate Error')
    },
  )
  Contents.on(
    'login',
    (event, authenticationResponseDetails, authInfo, callback) => {
      if (consoleEvents) console.log('Main Window - Web Contents - Login')
    },
  )
  Contents.on('found-in-page', (event, result) => {
    if (consoleEvents) console.log('Main Window - Web Contents - Found In Page')
  })
  Contents.on('media-start-playing', () => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Media Start Playing')
  })
  Contents.on('media-paused', () => {
    if (consoleEvents) console.log('Main Window - Web Contents - Media Paused')
  })
  Contents.on('did-change-theme-color', (event, color) => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Did Change Theme Color')
  })
  Contents.on('update-target-url', (event, url) => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Update Target Url')
  })
  Contents.on('cursor-changed', (event, type, image, scale, size, hotspot) => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Curcor Changed: ', type)
  })
  Contents.on('context-menu', (event, params) => {
    if (consoleEvents) console.log('Main Window - Web Contents - Content Menu')
    ContextMenu_Main_Custom.Template().popup()
  })
  Contents.on('select-bluetooth-device', (event, devices, callback) => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Select Bluetooth Device')
  })
  Contents.on('paint', (event, dirty, image) => {
    if (consoleEvents) console.log('Main Window - Web Contents - Paint')
  })
  Contents.on('paint', (event, dirty, image) => {
    if (consoleEvents) console.log('Main Window - Web Contents - Paint')
  })
  Contents.on('devtools-reload-page', () => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Devtools Reload Page')
  })
  Contents.on('will-attach-webview', (event, webPreferences, params) => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Will Attach Web View')
  })
  Contents.on('did-attach-webview', (event, webContents) => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Did Attach Web View')
  })
  Contents.on('console-message', (event, level, message, line, sourceId) => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Console Message')
  })
  Contents.on('preload-error', (event, preloadPath, error) => {
    if (consoleEvents) console.log('Main Window - Web Contents - Preload Error')
  })
  Contents.on('ipc-message', (event, channel, ...args) => {
    if (consoleEvents) console.log('Main Window - Web Contents - IPC Message')
  })
  Contents.on('ipc-message-sync', (event, channel, ...args) => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - IPC Message Sync')
  })
  Contents.on('ipc-message-sync', (event, channel, ...args) => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - IPC Message Sync')
  })
  Contents.on('desktop-capturer-get-sources', (event) => {
    if (consoleEvents)
      console.log('Main Window - Web Contents - Desktop Capturer Get Sources')
  })
  Contents.openDevTools()
}
