const { BrowserWindow } = require('electron');
const windowsStateKeeper = require('electron-window-state');
const Properties = require('./properties');
const ScreenEvents = require('./events/screen');
const ContentEvents = require('./events/content');
const SessionEvents = require('./events/session');
const isDev = require('electron-is-dev');
const path = require('path');

let WindowState;
let Screen;
let Contents;
let Session;

/**
 * Main Window Screen Creation
 */
module.exports.CreateWindow = () => {
	WindowState = windowsStateKeeper({
		defaultWidth: 1000,
		defaultHeight: 800
	});

	Screen = new BrowserWindow(Properties(WindowState));
	Screen.loadURL(
		isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, './../../../../build/index.html')}`
	);
	WindowState.manage(Screen);
	Screen.setResizable(true);

	Contents = Screen.webContents;
	Session = Screen.session;

	if (isDev) Contents.openDevTools();

	ContentEvents(Screen.id);
	SessionEvents(Screen.id);
	ScreenEvents(Screen.id);

	global.DESKTOP_APP_WINDOW_SPLASH_SCREEN.hide();
	global.DESKTOP_APP_WINDOW_SPLASH_SCREEN = null;
	global.DESKTOP_APP_WINDOW_SPLASH_SCREEN_Id = null;

	global.DESKTOP_APP_WINDOW_MAIN_SCREEN_Id = Screen.id;
	global.DESKTOP_APP_WINDOW_MAIN_SCREEN = Screen;
};
