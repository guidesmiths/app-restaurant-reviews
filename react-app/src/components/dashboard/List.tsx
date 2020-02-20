import React, { Fragment } from 'react';

import { Loading } from '../common/styled';
import { CardContainer } from './styled/Card';
import Card from './Card';
import ReviewsDisplay from '../reviewsdisplay/ReviewsDisplay';
import { getAllRestaurants } from '../../apiService/apiService';
import { useFetch } from '../../hooks';

import { Restaurant } from '../../interfaces';

const List = () => {
	const [selectedRestaurant, setSelectedRestaurant] = React.useState<Restaurant | undefined>(undefined);
	const [reviewsIsOpen, setReviewsIsOpen] = React.useState(false);
	const [restaurants, isLoading, error] = useFetch(getAllRestaurants);

	const reviewsAntiDiv: any = React.useRef(null);

	const onClickCard = (restaurant: Restaurant): void => {
		setSelectedRestaurant(restaurant);
		setReviewsIsOpen(true);
	};

	React.useEffect(() => {
		const handleClicks = (e: MouseEvent) => {
			if (reviewsAntiDiv.current === e.target) {
				setSelectedRestaurant(undefined);
				setReviewsIsOpen(false);
			}
		};
		const ref = reviewsAntiDiv.current;
		ref && ref.addEventListener('click', handleClicks);
		return () => ref && ref.removeEventListener('click', handleClicks);
	}, [selectedRestaurant, reviewsAntiDiv]);

	return error ? (
		<div>An error occurred</div>
	) : (
		<Fragment>
			{isLoading ? <Loading></Loading> : null}
			<CardContainer>
				{restaurants.length
					? restaurants.map((elm, idx) => <Card key={idx} {...elm} onclick={onClickCard}></Card>)
					: null}
			</CardContainer>
			<ReviewsDisplay
				isOpen={reviewsIsOpen}
				onClickClose={() => setReviewsIsOpen(false)}
				name={selectedRestaurant ? selectedRestaurant.name : ''}
				img={selectedRestaurant ? selectedRestaurant.img : ''}
				rate={selectedRestaurant ? selectedRestaurant.rate : 0}
				address={selectedRestaurant ? selectedRestaurant.address : ''}
				avgprice={selectedRestaurant ? selectedRestaurant.avgprice : 0}
			></ReviewsDisplay>
			{selectedRestaurant ? (
				<div
					style={{ position: 'fixed', top: 80, bottom: 0, left: 0, right: 0, zIndex: 10 }}
					ref={reviewsAntiDiv}
				></div>
			) : null}
		</Fragment>
	);
};

export default List;
