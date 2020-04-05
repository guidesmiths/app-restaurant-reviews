import React, { useEffect, useState } from 'react';

import {
	ReviewsContainer,
	ImgContainer,
	OverlayContainer,
	GaugesContainer,
	ReviewLineContainer,
	DisplayContainer,
	AddReviewContainer,
} from './styled';
import { CloseButton } from '../common/styled';
import { ReactComponent as Close } from '../../assets/close.svg';
import { Restaurant } from '../../interfaces';
import ReviewsList from './ReviewsList';
import { OverlayTitle, ReviewGauge } from './SubComponents';
import AddReview from './AddReview';
import { getRestaurantReviews } from '../../apiService/apiService';
import { useFetch } from '../../hooks';

interface IsOpen {
	isOpen: boolean;
	onClickClose: () => void;
}

export default ({ id, name, img, isOpen, onClickClose }: Restaurant & IsOpen) => {
	const [restaurantData, setRestaurantData] = useState({ id, name, img });
	const [isDisplaying, toggleDisplay] = useState(true);
	const [restaurantReviews, isLoading, error] = useFetch(getRestaurantReviews, restaurantData.id);

	useEffect(() => {
		name && setRestaurantData({ id, name, img });
	}, [id, name, img]);

	useEffect(() => {
		toggleDisplay(true);
	}, [isOpen]);

	return (
		<ReviewsContainer isOpen={isOpen}>
			<DisplayContainer active={isDisplaying}>
				<div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 220 }}>
					<CloseButton onClick={onClickClose} diameter={40}>
						<Close></Close>
					</CloseButton>
				</div>
				<ImgContainer src={restaurantData.img}></ImgContainer>
				<OverlayContainer>
					<OverlayTitle name={restaurantData.name}></OverlayTitle>
				</OverlayContainer>
				<GaugesContainer>
					<ReviewGauge
						data={(restaurantReviews[0] && restaurantReviews[0].cuisineavgrate) || 0}
						text={'Cuisine'}
					></ReviewGauge>
					<ReviewGauge
						data={(restaurantReviews[0] && restaurantReviews[0].priceavgrate) || 0}
						text={'Price'}
					></ReviewGauge>
					<ReviewGauge
						data={(restaurantReviews[0] && restaurantReviews[0].settingavgrate) || 0}
						text={'Setting'}
					></ReviewGauge>
				</GaugesContainer>
				<ReviewLineContainer>{(restaurantReviews[1] && restaurantReviews[1].length) || 0} reviews</ReviewLineContainer>
				<ReviewsList reviews={restaurantReviews[1]} isLoading={isLoading} toggleDisplay={toggleDisplay}></ReviewsList>
			</DisplayContainer>
			<AddReviewContainer active={!isDisplaying}>
				<div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 220 }}>
					<CloseButton onClick={() => toggleDisplay(true)} diameter={40}>
						<Close></Close>
					</CloseButton>
				</div>
				<AddReview id={restaurantData.id} name={restaurantData.name}></AddReview>
			</AddReviewContainer>
		</ReviewsContainer>
	);
};
