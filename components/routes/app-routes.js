const path = require('path');
const express = require('express');

module.exports = () => {
	const start = async ({ app }) => {
		/**
		 * This endpoint serves the app as a standalone version
		 * @route GET /
		 * @group Content - Everything about serving the app
		 * @returns 200 - Sucessful response
		 * @returns {ErrorServer.model} 500 - Server error
		 */

		app.use(express.static(path.resolve(`${__dirname}/../../react-app/build`)));

		app.get('/*', (req, res) => res.sendFile(path.resolve(`${__dirname}/../../react-app/build/index.html`)));

		return Promise.resolve();
	};

	return { start };
};
