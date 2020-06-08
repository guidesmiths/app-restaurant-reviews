const axios = require('axios');
const bodyParser = require('body-parser');

module.exports = () => {
	const start = async ({ app, config }) => {
		app.use(bodyParser.json());
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

		app.get('/api/v1/review/:restaurantId', async (req, res) => {
			try {
				const id = req.params.restaurantId;
				const { data } = await axios.get(`${config.url}/api/v1/review/${id}`, {
					headers: { Authorization: req.headers.authorization },
				});
				return res.json(data);
			} catch (error) {
				return res.json(error);
			}
		});

		app.post('/api/v1/review', async (req, res) => {
			try {
				const { data } = await axios.post(`${config.url}/api/v1/review`, req.body, {
					headers: { Authorization: req.headers.authorization },
				});
				return res.json(data);
			} catch (error) {
				return res.json(error);
			}
		});

		app.post('/api/v1/createpoll', async (req, res) => {
			try {
				const { data } = await axios.post(`${config.torralpoll_create_url}`, req.body, {
					headers: { Authorization: req.headers.authorization },
				});
				return res.json(data);
			} catch (error) {
				return res.json(error);
			}
		});

		app.post('/api/v1/polltoslack', async (req, res) => {
			try {
				const { data } = await axios.post(`${config.slack}`, req.body, {
					headers: { 'Content-type': 'application/json' },
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
