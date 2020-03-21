import axios from 'axios';
import * as I from '../interfaces';

const getAllRestaurants = async (): Promise<Array<I.Restaurant>> => {
	const { data } = await axios.get('/api/v1/restaurants', {
		headers: { Authorization: localStorage.getItem('token') },
	});
	return data;
};

const getRestaurantReviews = async (id): Promise<any> => {
	const { data } =
		id &&
		(await axios.get(`/api/v1/review/${id}`, {
			headers: { Authorization: localStorage.getItem('token') },
		}));
	return data;
};

const postReview = async (review): Promise<any> => {
	const { data } = await axios.post(`/api/v1/review`, review, {
		headers: { Authorization: localStorage.getItem('token') },
	});
	return data;
};

export { getAllRestaurants, getRestaurantReviews, postReview };
