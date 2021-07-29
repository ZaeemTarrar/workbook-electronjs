const { Menu } = require('electron')

module.exports.Template = () => {
  return Menu.buildFromTemplate([
    {
      label: 'Electron',
      submenu: [
        {
          label: 'Item 1',
          submenu: [
            {
              label: 'Hello',
            },
          ],
        },
        {
          label: 'Item 2',
          enabled: true,
          accelerator: 'Shift+Alt+G',
          click: () => {
            console.log('Clicked')
          },
        },
        {
          label: 'ToggleDevTools',
          role: 'toggleDevTools',
        },
      ],
    },
  ])
}
