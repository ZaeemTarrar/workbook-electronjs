const Remote = require('electron').remote
const { dialog, BrowserWindow } = Remote
const path = require('path')

const CreateMessage = () => {
  let Message = new BrowserWindow({
    width: 400,
    height: 200,
    show: true,
    alwaysOnTop: true,
  })

  Message.loadFile(path.join(__dirname, 'index.html'))
  Message.on('close', () => {
    Message = null
  })
}

module.exports = CreateMessage
