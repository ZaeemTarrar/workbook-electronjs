const os = require('os-utils')
const { fork, exec, spawn } = require('child_process')
const path = require('path')

// const DummyProcess = fork('../forks/dummy')

module.exports = (win, ipc) => {
  //   ipc.on('pop', (event, data) => {
  //     console.log('Popped: ', data, path.resolve(__dirname))
  // const child = exec('git clone https://github.com/whatwg/html.git')
  // child.stdout.on('data', (data) => {
  //   console.log('StdOut: ', data)
  //   win.webContents.send('dir', data)
  // })
  // child.stderr.on('data', (data) => {
  //   console.log('StdErr: ', data)
  // })
  // child.on('error', (error) => {
  //   console.log('Error: ', error.message)
  // })
  // child.on('exit', (code, signal) => {
  //   if (code) {
  //     console.log('Process Exit with Code: ', code)
  //   }
  //   if (signal) {
  //     console.log('Process Killed with Signal: ', signal)
  //   }
  // })
  //   })
  //   os.cpuUsage(function (v) {
  //     win.webContents.send('cpu', v * 100)
  //   })
  win.webContents.send('isTray', false)
}
