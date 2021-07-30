const { ipcMain } = require('electron')

module.exports.RegisterInternalProcessConnections = () => {
  ipcMain.on('test1', (event, args) => {
    console.log('Ipc Main - Test1: ', args)
    event.sender.send('test1-response', 'Test1 Response Recieved ...')
  })
  ipcMain.on('test2', (event, args) => {
    console.log('Ipc Main - Test2: ', args)
    setTimeout(() => {
      event.returnValue = 'Test2 Response Recieved ...'
    }, 2000)
  })
}
