module.exports = () => {
  return {
    width: 1000,
    height: 500,
    show: false,
    backgroundColor: '#fefefe',
    alwaysOnTop: true,
    frame: true,
    titleBarStyle: 'hidden',
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
    //   parent: mainWindow,
    //   model: true,
  }
}
