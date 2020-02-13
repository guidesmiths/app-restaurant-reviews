const axios = require('axios');

module.exports = () => {
	const start = async ({ app, config }) => {
		app.get('/api/v1/restaurants', async (req, res) => {
			try {
				const { data } = await axios.get(`${config.url}/api/v1/restaurants`, {
					headers: { Authorization: req.headers.authorization },
				});
				return res.json(data);
			} catch (error) {
				return res.json(error);
			}
		});

		return Promise.resolve();
	};

	return { start };
};
