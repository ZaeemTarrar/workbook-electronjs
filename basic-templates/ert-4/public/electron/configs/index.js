const { app } = require('electron');

const consoleInformation = true;
const consoleEvents = true;
const browserInformation = true;
const browserEvents = true;
const inputEvents = true;
const downloadPath = null; // app.getPath('desktop')

module.exports = {
	consoleInformation,
	consoleEvents,
	browserInformation,
	browserEvents,
	inputEvents,
	downloadPath
};
