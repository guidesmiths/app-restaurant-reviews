import axios from 'axios';
import * as I from '../interfaces';

const getAllRestaurants = async (): Promise<Array<I.Restaurant>> => {
	const { data } = await axios.get('/api/v1/restaurants');
	return data;
};

export { getAllRestaurants };
