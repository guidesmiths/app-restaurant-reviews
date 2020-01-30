import React, { Fragment } from 'react';
import styled from 'styled-components';

import Loading from './Loading';
import Card from './Card';

import { getAllRestaurants } from '../apiService/apiService';
import { useFetch } from '../hooks';

const CardContainer = styled.div`
	width: 80%;
	margin: 50px auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
`;

const List = () => {
	const [restaurants, isLoading, error] = useFetch(getAllRestaurants);

	return error ? (
		<div>An error occurred</div>
	) : (
		<Fragment>
			{isLoading ? <Loading></Loading> : null}
			<CardContainer>
				{restaurants.length ? restaurants.map((elm, idx) => <Card key={idx} name={elm.name}></Card>) : null}
			</CardContainer>
		</Fragment>
	);
};

export default List;
