# Electron Js - Desktop Application Development

![alt text](https://cdn-media-1.freecodecamp.org/images/I3jU5GCksTIV955jyY1jgZmOUR21ayuDffI9)

## Run Commands

```
npm init -y
```

```
npm i -D electron nodemon
```

```
npm i -g electron electron-builder electron-rebuild
```

```
npm i --save electron-window-state
```

## Add Scripts

Add Scripts to Package.Json

```json
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "electron .",
    "watch": "nodemon --exec electron .",
    "reset": "git reset --hard"
```

## Main Topics

1. Electron App
   - Configurations
   - Events
2. Browser Window
   - Properties
   - Events
3. Web Contents
   - Messages
   - Events
4. Sessions
   - Cookies
   - Local Storage
   - Events
5. Remote
6. IPC ( Sync / Async )
   - Main
     - Send
     - Recieve
   - Renderer
     - Send
     - Recieve
7. Menus / Templates
   - Top Menu
   - Content Menu
8. Tray
   - Tray Menu
   - Tray Screen
9. Dialogs ( Sync / Async )
   - Message Dialogs
   - Save Dialogs
   - Open Dialogs
10. Shortcut Registerations
    - Single Keys
    - Combination Keys
11. Systems Events
12. Process
13. Screen
14. Shell
