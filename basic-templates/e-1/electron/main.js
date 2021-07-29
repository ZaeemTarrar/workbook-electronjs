/**
 * Required Imports
 */
const {
  app,
  BrowserWindow,
  session,
  dialog,
  globalShortcut,
  Menu,
  MenuItem,
} = require('electron')
const {
  consoleInformation,
  consoleEvents,
  browserInformation,
  browserEvents,
  inputEvents,
  downloadPath,
} = require('./configs/index')
const AppEvents = require('./events/app/index')
const request = require('request')
const fs = require('fs')

const Application = () => {
  try {
    app.commandLine.appendSwitch('enable-features', 'ElectronSerialChooser')
    AppEvents()
  } catch (error) {
    console.log('Application Error: ', error)
  }
}

Application()
