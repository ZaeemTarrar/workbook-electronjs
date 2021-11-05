const { powerMonitor } = require('electron');

module.exports = () => {
	powerMonitor.on('suspend', (event) => {
		// MW
	});
	powerMonitor.on('resume', (event) => {
		// MW
	});
	powerMonitor.on('on-ac', (event) => {
		// MW
	});
	powerMonitor.on('on-battery', (event) => {
		// MW
	});
	powerMonitor.on('shutdown', (event) => {
		// LM
	});
	powerMonitor.on('lock-screen', (event) => {
		// MW
	});
	powerMonitor.on('unlock-screen', (event) => {
		// MW
	});
	powerMonitor.on('user-did-become-active', (event) => {
		// M
	});
	powerMonitor.on('user-did-resign-active', (event) => {
		// M
	});
};
