import React, { Fragment, useContext } from 'react';

import { Loading } from '../common/styled';
import { CardContainer } from './styled/Card';
import Card from './Card';
import ReviewsDisplay from '../reviewsdisplay/ReviewsDisplay';
import { getAllRestaurants } from '../../apiService/apiService';
import { useFetch } from '../../hooks';
import { RefreshContext } from '../../context/RefreshContext';
import { SortingContext } from '../../context/SortingContext';

import { Restaurant } from '../../interfaces';

const sortBy = {
	rate: (a, b) => b.average_rate - a.average_rate,
	price: (a, b) => a.avgprice - b.avgprice,
	distance: (a, b) => a.distance - b.distance,
};

const List = () => {
	const [selectedRestaurant, setSelectedRestaurant] = React.useState<Restaurant | undefined>(undefined);
	const [reviewsIsOpen, setReviewsIsOpen] = React.useState(false);
	const { refreshFlag } = useContext(RefreshContext);
	const { criteria, flip } = useContext(SortingContext);

	const [restaurants, isLoading, error] = useFetch(getAllRestaurants, refreshFlag);

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
			{isLoading && !restaurants.length ? <Loading></Loading> : null}
			<CardContainer>
				{restaurants.length
					? restaurants
							.sort(sortBy[criteria])
							.map((elm, idx) => (
								<Card
									key={criteria + elm.name}
									{...elm}
									onclick={onClickCard}
									inactive={reviewsIsOpen}
									flip={flip}
								></Card>
							))
					: null}
			</CardContainer>
			<ReviewsDisplay
				isOpen={reviewsIsOpen}
				onClickClose={() => {
					setSelectedRestaurant(undefined);
					setReviewsIsOpen(false);
				}}
				id={selectedRestaurant ? selectedRestaurant.id : undefined}
				name={selectedRestaurant ? selectedRestaurant.name : ''}
				img={selectedRestaurant ? selectedRestaurant.img : ''}
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
