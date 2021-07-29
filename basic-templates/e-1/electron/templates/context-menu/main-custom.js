const { Menu } = require('electron')

module.exports.Template = () => {
  return Menu.buildFromTemplate([
    {
      label: 'Navigation',
      submenu: [
        {
          label: 'Item 1',
          submenu: [
            {
              label: 'Hello',
            },
          ],
        },
      ],
    },
    {
      label: 'Refrsh',
    },
  ])
}
