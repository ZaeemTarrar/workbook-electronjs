const { app, dialog } = require('electron')
const {
  consoleInformation,
  consoleEvents,
  browserInformation,
  browserEvents,
  inputEvents,
  downloadPath,
} = require('../configs/index')

/**
 * Dialog Tests
 */
module.exports.DialogTests = () => {
  dialog.showOpenDialogSync(mainWindow, {
    title: 'Select an Image',
    default: app.getPath('desktop'),
    buttonLabel: 'Select Image',
    filters: [
      { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
      { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
      { name: 'Custom File Type', extensions: ['as'] },
      { name: 'All Files', extensions: ['*'] },
    ],
    properties: [
      'openFile',
      'openDirectory',
      'multiSelections',
      'showHiddenFiles',
      'createDirectory', // MacOs
      'promptToCreate',
      'noResolveAliases', // MacOs
      'treatPackageAsDirectory', // MacOs
      'dontAddToRecent',
      'message', // MacOs
      'securityScopedBookmarks', // macOs
      'showOverwriteConformation', // Linux
    ],
  })
  dialog
    .showOpenDialog(mainWindow, {
      properties: ['openFile', 'openDirectory'],
    })
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.log(err)
    })
  dialog
    .showSaveDialog(mainWindow, {
      properties: ['openFile', 'openDirectory'],
    })
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.log(err)
    })
  let dialogTypes = ['none', 'info', 'error', 'question', 'warning']
  for (let i = 0; i < dialogTypes.length; i++) {
    dialog
      .showMessageBox(mainWindow, {
        type: dialogTypes[i].toLowerCase(),
        title: dialogTypes[i].toUpperCase(),
        message: 'Hello world',
        checkboxChecked: false,
        buttons: ['yes', 'no'],
        details:
          'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
        defaultId: 0,
        cancelId: 1,
        noLink: true,
        icon: './../public/images/thumbsup.png',
      })
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  // dialog
  //   .showErrorBox({
  //     title: 'Random Error',
  //     content: 'hello there ...',
  //   })
  //   .then((result) => {
  //     console.log(result)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // dialog
  //   .showCertificateMessage({
  //     certificate: {},
  //     message: 'hello there ...',
  //   })
  //   .then((result) => {
  //     console.log(result)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
}

/**
 * List of Paths of the Main Locations on my System
 */
module.exports.GetCommonPaths = () => {
  const allPaths = {
    desktop: app.getPath('desktop'),
    music: app.getPath('music'),
    temp: app.getPath('temp'),
    userData: app.getPath('userData'),
    documents: app.getPath('documents'),
    downloads: app.getPath('downloads'),
    videos: app.getPath('videos'),
    appData: app.getPath('appData'),
  }
  if (consoleInformation) console.log('My Computer Paths: ', allPaths)
}
