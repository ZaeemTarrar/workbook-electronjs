const { app, BrowserWindow } = require('electron');

function createWindow() {
	const win = new BrowserWindow({
		width: 1200,
		height: 800,
		backgroundColor: 'gold',
		webPreferences: {
			nodeIntegration: false,
			worldSafeExecuteJavaScript: true,
			contextIsolation: true
		},
		show: true
	});

	win.loadUrl('http://google.com');
	win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
