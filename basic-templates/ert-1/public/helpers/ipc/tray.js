const { fork, exec, spawn } = require('child_process')
const path = require('path')

module.exports = (win, ipc) => {
  win.webContents.send('isTray', true)
}
