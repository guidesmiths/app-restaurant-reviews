import React, { useEffect, useState } from 'react';

import { ReviewsContainer, ImgContainer, OverlayContainer, GaugesContainer, ReviewLineContainer } from './styled';
import { CloseButton } from '../common/styled';
import { ReactComponent as Close } from '../../assets/close.svg';
import { Restaurant } from '../../interfaces';
import ReviewsList from './ReviewsList';
import { OverlayTitle, ReviewGauge } from './SubComponents';

interface IsOpen {
	isOpen: boolean;
	onClickClose: () => void;
}

export default ({ name, img, rate, address, avgprice, isOpen, onClickClose }: Restaurant & IsOpen) => {
	const [restaurantData, setRestaurantData] = useState({ name, img, rate, address, avgprice });

	useEffect(() => {
		name && setRestaurantData({ name, img, rate, address, avgprice });
	}, [name, img, rate, address, avgprice]);

	return (
		<ReviewsContainer isOpen={isOpen}>
			<div style={{ position: 'relative', height: '100%' }}>
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
				<ReviewsList></ReviewsList>
			</div>
		</ReviewsContainer>
	);
};
