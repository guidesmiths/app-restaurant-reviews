const axios = require('axios');

module.exports = () => {
	const start = async ({ app, config }) => {
		app.get('/api/v1/restaurants', async (req, res) => {
			const { data } = await axios.get(`${config.url}/api/v1/restaurants`);
			return res.json(data);
		});

		return Promise.resolve();
	};

	return { start };
};
