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

const createPoll = async (title: string, description: string, options: Array<string>): Promise<any> => {
	const pollData = {
		name: title,
		description,
		options,
		category: 'restaurant',
	};
	const { data } = await axios.post(`/api/v1/createpoll`, pollData, {
		headers: { Authorization: localStorage.getItem('token') },
	});
	return data;
};

const pollToSlack = async (id: string, title: string, options: Array<string>): Promise<any> => {
	const slackPayload = {
		blocks: [
			{
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: `A new poll has been created with the title: \n *${title}*`,
				},
			},
			{
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: `You can vote here -> https://torralpoll.lucas1004jx.now.sh/polls?id=${id}`,
				},
			},
			{
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: `The options are:`,
				},
			},
		],
		attachments: options.map(option => ({ text: option })),
		icon_emoji: ':matteo:',
		username: 'MatteoAffinity',
	};
	await axios.post(`/api/v1/polltoslack`, slackPayload);
	return;
};

export { getAllRestaurants, getRestaurantReviews, postReview, createPoll, pollToSlack };
