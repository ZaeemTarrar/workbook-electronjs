const Electron = require('electron')
const {
  webFrame,
  desktopCapturer,
  ipcRenderer,
  nativeImage,
  clipboard,
} = Electron
const Remote = Electron.remote
const { dialog, BrowserWindow } = Remote
const MessageScreen = require('./screens/message/index')

const Launch = () => {
  ipcRenderer.on('app-ready', (event, args) => {
    console.log('Initial Ipc Render By Main Screen WenContents: ', args)
  })

  webFrame.setZoomLevel(1)

  const CurrentScreen = Remote.getCurrentWindow()

  const splash = nativeImage.createFromPath(
    `${__dirname}/../images/thumbsup.png`,
  )

  console.log('Splash Image Size: ', splash.getSize())
  //   splash.toPNG()
  //   splash.toJPEG(100)

  let Link1_Screen
  const Link1 = document.getElementById('link1')
  Link1.onclick = function (event) {
    event.preventDefault()
    Link1_Screen = window.open(
      'http://www.google.com/',
      '_blank',
      'width=500,height=500,alwaysOnTop=1',
    )
    Link1_Screen.eval(
      "document.getElementsByTagName('body')[0].style.fontFamily='Comic Sans MS'",
    )
  }
  const Btn1 = document.getElementById('btn1')
  Btn1.onclick = function (event) {
    desktopCapturer
      .getSources({
        types: ['screen', 'window'],
        thumbnailSize: { width: 1920, height: 1080 },
      })
      .then((sources) => {
        document.getElementById('img1').src = sources[0].thumbnail.toDataURL()
      })
      .catch((error) => {
        console.log('Desktop Capture Error: ', error)
      })
    // dialog.showMessageBox(Remote.getGlobal('DESKTOP_APP_WINDOW_MAIN_SCREEN'), {
    //   type: 'info',
    //   message: 'Popped You !!!',
    // })
    // MessageScreen()
  }

  const Btn2 = document.getElementById('btn2')
  Btn2.onclick = function (event) {
    ipcRenderer.send('test1', 'Ipc Testing From the Browser')
  }
  ipcRenderer.on('test1-response', (event, args) => {
    console.log('Ipc Renderer - Test1: ', args)
  })

  const Btn3 = document.getElementById('btn3')
  Btn3.onclick = function (event) {
    let response = ipcRenderer.sendSync('test2', 'Ipc Testing From the Browser')
    console.log('Ipc Renderer - Test2: ', response)
  }
}

window.onload = Launch
