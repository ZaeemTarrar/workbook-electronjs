const { app, BrowserWindow, session } = require('electron')
const {
  consoleInformation,
  consoleEvents,
  browserInformation,
  browserEvents,
  inputEvents,
  downloadPath,
} = require('../../../configs/index')
let Screen
let Contents
let Session

// module.exports.Cookies = () => {
//   let cookie = {
//     url: 'http://webloapplo.com',
//     name: 'Weblo Applo',
//     value: 'electron',
//   }
//   Session.cookies
//     .set(cookie)
//     .then(() => {
//       if (consoleInformation) console.log('Cookie1 Set')
//     })
//     .catch((err) => {
//       if (consoleInformation) console.log('Cookie1 Set Error')
//     })
//   Session.cookies
//     .get({ name: 'Weblo Applo' })
//     .then((cookies) => {
//       if (consoleInformation) console.log('Cookies: ', cookies)
//     })
//     .catch((err) => {
//       if (consoleInformation) console.log('Cookies Get Error')
//     })
//   Session.cookies
//     .remove('http://webloapplo.com/', 'Weblo Applo')
//     .then(() => {
//       if (consoleInformation) console.log('Cookie1 Removed')
//     })
//     .catch((err) => {
//       if (consoleInformation) console.log('Cookie1 Removal Error')
//     })
// }

module.exports = (id) => {
  Screen = BrowserWindow.fromId(id)
  Contents = Screen.webContents
  Session = Contents.session

  // Session.flushStorageData()
  // Session.clearStorageData()
  // Session.clearCache()

  Session.on('will-download', (event, item, webContents) => {
    let fname = item.getFilename()
    let fsize = item.getTotalBytes()
    if (consoleEvents)
      console.log(
        'Main Window - WebContents - Session - Will Download: ',
        fname,
        fsize,
      )
    let downloadPath = app.getPath('desktop') + `\\${fname}`
    if (consoleInformation) console.log('Path: ', downloadPath)
    if (downloadPath) item.setSavePath(downloadPath)
    item.on('updated', (event, state) => {
      let recieved = item.getReceivedBytes()
      let progress = Math.round((recieved / fsize) * 100)
      if (state === 'interrupted') {
        if (consoleEvents)
          console.log('Download is interrupted but can be resumed')
      } else if (state === 'progressing') {
        if (item.isPaused()) {
          if (consoleEvents) console.log('Download is paused')
        } else {
          if (consoleEvents) console.log(`Received bytes: ${progress}`)
        }
      }
    })
    item.once('done', (event, state) => {
      if (state === 'completed') {
        if (consoleEvents) console.log('Download successfully')
        if (browserEvents)
          Contents.executeJavaScript(`console.log('Download Complete')`)
      } else {
        if (consoleEvents) console.log(`Download failed: ${state}`)
      }
    })
    // request(item.getURL(), (data) => {
    //   fs.writeFileSync('/images', data)
    // })
  })
  Session.on('extension-loaded', (event, extension) => {
    if (consoleEvents)
      console.log('Main Window - WebContents - Session - Extension Loaded')
  })
  Session.on('extension-unloaded', (event, extension) => {
    if (consoleEvents)
      console.log('Main Window - WebContents - Session - Extension UnLoaded')
  })
  Session.on('extension-ready', (event, extension) => {
    if (consoleEvents)
      console.log('Main Window - WebContents - Session - Extension Ready')
  })
  Session.on('preconnect', (event, preconnectUrl, allowCredentials) => {
    if (consoleEvents)
      console.log('Main Window - WebContents - Session - Preconnect')
  })
  Session.on('spellcheck-dictionary-initialized', (event, languageCode) => {
    if (consoleEvents)
      console.log(
        'Main Window - WebContents - Session - Spell Check Dictionary Initialized',
      )
  })
  Session.on('spellcheck-dictionary-download-begin', (event, languageCode) => {
    if (consoleEvents)
      console.log(
        'Main Window - WebContents - Session - Spell Check Dictionary Download Begin',
      )
  })
  Session.on(
    'spellcheck-dictionary-download-success',
    (event, languageCode) => {
      if (consoleEvents)
        console.log(
          'Main Window - WebContents - Session - Spell Check Dictionary Download Success',
        )
    },
  )
  Session.on(
    'spellcheck-dictionary-download-failure',
    (event, languageCode) => {
      if (consoleEvents)
        console.log(
          'Main Window - WebContents - Session - Spell Check Dictionary Download Failure',
        )
    },
  )
  Session.on('select-serial-port', (event, portList, webContents, callback) => {
    if (consoleEvents)
      console.log('Main Window - WebContents - Session - Select Serial Port')
    event.preventDefault()
    const selectedPort = portList.find((device) => {
      return device.vendorId === '9025' && device.productId === '67'
    })
    if (!selectedPort) {
      callback('')
    } else {
      callback(selectedPort.portId)
    }
  })
  Session.on('serial-port-added', (event, port, webContents) => {
    if (consoleEvents)
      console.log('Main Window - WebContents - Session - Serial Port Added')
  })
  Session.on('serial-port-removed', (event, port, webContents) => {
    if (consoleEvents)
      console.log('Main Window - WebContents - Session - Serial Port Removed')
  })
  Session.setPermissionRequestHandler((webContents, permission, callback) => {
    if (consoleEvents)
      console.log(
        'Main Window - WebContents - Session - Set Permission Request Handler',
      )
    if (
      webContents.getURL() === 'some-host' &&
      permission === 'notifications'
    ) {
      return callback(false) // denied.
    }
    callback(true)
  })
  Session.setPermissionCheckHandler(
    (webContents, permission, requestingOrigin) => {
      if (consoleEvents)
        console.log(
          'Main Window - WebContents - Session - Set Permission Check Handler',
        )
      if (
        new URL(requestingOrigin).hostname === 'some-host' &&
        permission === 'notifications'
      ) {
        return true // granted
      }
      return false // denied
    },
  )
}
