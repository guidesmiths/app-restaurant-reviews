const path = require('path');
const express = require('express');

module.exports = () => {
	const start = async ({ app }) => {
		app.use(express.static(path.resolve(`${__dirname}/../../react-app/build`)));

		app.get('/test', (req, res) => res.JSON(process.env.TEST));

		app.get('/*', (req, res) => res.sendFile(path.resolve(`${__dirname}/../../react-app/build/index.html`)));

		return Promise.resolve();
	};

	return { start };
};
