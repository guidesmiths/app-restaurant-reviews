import React, { Fragment } from 'react';

import { Loading } from './styled/Common';
import { CardContainer } from './styled/Card';
import Card from './Card';

import { getAllRestaurants } from '../apiService/apiService';
import { useFetch } from '../hooks';

const List = () => {
	const [restaurants, isLoading, error] = useFetch(getAllRestaurants);

	return error ? (
		<div>An error occurred</div>
	) : (
		<Fragment>
			{isLoading ? <Loading></Loading> : null}
			<CardContainer>
				{restaurants.length
					? restaurants.map((elm, idx) => <Card key={idx} name={elm.name} rate={elm.rate} img={elm.img}></Card>)
					: null}
			</CardContainer>
		</Fragment>
	);
};

export default List;
