const { fork, exec, spawn } = require('child_process')
const path = require('path')
const { ipcMain } = require('electron')

module.exports = (win, tray, ipc) => {
  try {
    win.webContents.send('isTray', true)
    ipcMain.on('quitApp', (event, data) => {
      if (data == true) {
        win.close()
        win = null
        tray = null
      }
    })
  } catch (err) {
    console.log('Error: ', err)
  }
}
