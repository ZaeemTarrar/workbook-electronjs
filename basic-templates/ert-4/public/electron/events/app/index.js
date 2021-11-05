const { app, Notification, BrowserWindow } = require('electron');
const {
	consoleInformation,
	consoleEvents,
	browserInformation,
	browserEvents,
	inputEvents,
	downloadPath
} = require('../../configs/index');
const notifier = require('node-notifier');
const path = require('path');
const { DialogTests, GetCommonPaths } = require('../../utils/Testing');
const { RegisterShortcuts } = require('./../../shortcuts/index');
const SystemEvents = require('./../system/index');
const { RegisterInternalProcessConnections } = require('./../ipc/index');
// const TrayMenu = require('./../../trays/template/index');
const MainScreen = require('../../screens/main/index');
// const AboutScreen = require('./../../screens/about/index');

// const NotificationTest = () => {
// 	notifier.notify(
// 		{
// 			appID: '\t',
// 			title: 'My awesome title',
// 			subtitle: 'This is SubTitle',
// 			message: 'Hello from node, Mr. User!',
// 			icon: path.join(__dirname, './../../../public/images/thumbsup.png'), // Absolute path (doesn't work on balloons)
// 			contentImage: path.join(__dirname, './../../../public/images/thumbsup.png'),
// 			open: undefined,
// 			sound: true, // Only Notification Center or Windows Toasters
// 			wait: true, // Wait with callback, until user action is taken against notification, does not apply to Windows Toasters as they always wait or notify-send as it does not support the wait option
// 			timeout: 5, // Takes precedence over wait if both are defined.
// 			closeLabel: undefined, // String. Label for cancel button
// 			actions: undefined, // String | Array<String>. Action label or list of labels in case of dropdown
// 			dropdownLabel: undefined, // String. Label to be used if multiple actions
// 			reply: false, // Boolean. If notification should take input. Value passed as third argument in callback and event emitter.
// 			sticky: false,
// 			label: 'Hello There',
// 			priority: undefined
// 		},
// 		function(err, response, metadata) {
// 			// Response is response from notification
// 			// Metadata contains activationType, activationAt, deliveredAt
// 		}
// 	);

// 	notifier.on('click', function(notifierObject, options, event) {
// 		// Triggers if `wait: true` and user clicks notification
// 		console.log('Notification Clicked');
// 		// if (!DESKTOP_APP_WINDOW_MAIN_SCREEN.isVisible())
// 		DESKTOP_APP_WINDOW_MAIN_SCREEN.show();
// 		DESKTOP_APP_WINDOW_MAIN_SCREEN.focus();
// 	});

// 	notifier.on('timeout', function(notifierObject, options) {
// 		// Triggers if `wait: true` and notification closes
// 		console.log('Notification TimedOut');
// 	});
// };

module.exports = () => {
	app.on('ready', (event, launchInfo) => {
		if (consoleEvents) console.log('App - Is Ready: ', app.isReady(), app.getVersion());
		// Splash
		splash = new BrowserWindow({
			width: 800,
			height: 600,
			transparent: true,
			frame: false,
			alwaysOnTop: true
		});
		splash.loadURL(
			isDev
				? `file://${path.join(__dirname, './../../../../build/splash.html')}`
				: `file://${path.join(__dirname, './../build/splash.html')}`
		);
		global.DESKTOP_APP_WINDOW_SPLASH_SCREEN_Id = splash.id;
		global.DESKTOP_APP_WINDOW_SPLASH_SCREEN = splash;

		// Informations
		GetCommonPaths();

		// Registerations
		RegisterShortcuts();

		// Events
		SystemEvents();

		// IPC
		RegisterInternalProcessConnections();

		// Trays
		// TrayMenu.CreateTrayMenu();

		// Windows
		MainScreen.CreateWindow();
		// AboutScreen.CreateWindow()

		// setTimeout(() => {
		//   NotificationTest()
		// }, 4000)
	});

	app.on('browser-window-blur', (event, window) => {
		if (consoleEvents) console.log('App - Browser Window Blur');
	});

	app.on('browser-window-focus', (event, window) => {
		if (consoleEvents) console.log('App - Browser Window Focus');
	});

	app.on('browser-window-created', (event, window) => {
		if (consoleEvents) console.log('App - Browser Window Created');
	});

	app.on('web-contents-created', (event, webContents) => {
		if (consoleEvents) console.log('App - Web Contents Created');
	});

	app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
		if (consoleEvents) console.log('App - Certificate Error');
		if (url === 'https://github.com') {
			event.preventDefault();
			callback(true);
		} else {
			callback(false);
		}
	});

	app.on('select-client-certificate', (event, webContents, url, list, callback) => {
		if (consoleEvents) console.log('App - Select Client Certificate');
		event.preventDefault();
		callback(list[0]);
	});

	app.on('gpu-info-update', () => {
		if (consoleEvents) console.log('App - GPU Info Update');
	});

	app.on('render-process-gone', (event, webContents, details) => {
		if (consoleEvents) console.log('App - Render Process Gone');
	});

	app.on('child-process-gone', (event, details) => {
		if (consoleEvents) console.log('App - Child Process Gone');
	});

	app.on('accessibility-support-changed', (event, accessibilitySupportEnabled) => {
		if (consoleEvents) console.log('App - Accessibility Support Changed');
	});

	app.on('session-created', (session) => {
		if (consoleEvents) console.log('App - Session Created');
	});

	app.on('second-instance', (event, args, workingDirectory) => {
		if (consoleEvents) console.log('App - Second Instance');
	});

	app.on('desktop-capturer-get-resources', (session) => {
		if (consoleEvents) console.log('App - Desktop Capturer Get Resources');
	});

	app.on('will-finish-launching', () => {
		if (consoleEvents) console.log('App - Will Finish Launching');
	});

	app.on('before-quit', (event) => {
		if (consoleEvents) console.log('App - Before Quit');
	});

	app.on('quit', (event, exitCode) => {
		if (consoleEvents) console.log('App - Quit');
		app.exit();
		process.exit();
	});

	app.on('will-quit', (event) => {
		if (consoleEvents) console.log('App - Will Quit');
	});

	app.on('window-all-closed', () => {
		if (consoleEvents) console.log('App - Windows All Closed');
		// if (process.platform !== 'darwin') app.quit();
		app.quit();
		app.exit();
		process.exit();
	});

	app.on('activate', () => {
		if (consoleEvents) console.log('App - Activated');
		// if (Main.window === null) createWindow();
	});

	if (process.platform === 'darwin') {
	}
};
