const axios = require('axios');

const getAllRestaurants = async () => {
	const { data } = await axios.get(`/api/v1/restaurants`);
	return data;
};

module.exports = { getAllRestaurants };
