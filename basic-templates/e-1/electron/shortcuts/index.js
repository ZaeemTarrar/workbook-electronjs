const { app, globalShortcut } = require('electron')

/**
 * Global Shortcut Registerations
 */
module.exports.RegisterShortcuts = () => {
  globalShortcut.register('G', () => {
    if (inputEvents) console.log("User Pressed 'G'")
  })
  globalShortcut.register('CommandOrControl+G', () => {
    if (inputEvents) console.log("User Pressed Command or Control + 'G'")
  })
}
