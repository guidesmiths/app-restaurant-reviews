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

interface IsOpen {
	isOpen: boolean;
	onClickClose: () => void;
}

export default ({ name, img, rate, address, avgprice, isOpen, onClickClose }: Restaurant & IsOpen) => {
	const [restaurantData, setRestaurantData] = useState({ name, img, rate, address, avgprice });
	const [isDisplaying, toggleDisplay] = useState(true);

	useEffect(() => {
		name && setRestaurantData({ name, img, rate, address, avgprice });
	}, [name, img, rate, address, avgprice]);

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
					<ReviewGauge data={65} text={'Cuisine'}></ReviewGauge>
					<ReviewGauge data={83} text={'Setting'}></ReviewGauge>
					<ReviewGauge data={37} text={'Service'}></ReviewGauge>
				</GaugesContainer>
				<ReviewLineContainer>4 reviews</ReviewLineContainer>
				<ReviewsList toggleDisplay={toggleDisplay}></ReviewsList>
			</DisplayContainer>
			<AddReviewContainer active={!isDisplaying}>
				<div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 220 }}>
					<CloseButton onClick={() => toggleDisplay(true)} diameter={40}>
						<Close></Close>
					</CloseButton>
				</div>
				<AddReview name={restaurantData.name}></AddReview>
			</AddReviewContainer>
		</ReviewsContainer>
	);
};
