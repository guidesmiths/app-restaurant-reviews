import React, { useEffect, useState } from 'react';

import { ReviewsContainer, ImgContainer } from './styled';
import { CloseButton } from '../common/styled';
import { ReactComponent as Close } from '../../assets/close.svg';
import { Restaurant } from '../../interfaces';

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
			<div style={{ position: 'relative' }}>
				<div style={{ position: 'absolute', top: '20px', right: '20px' }}>
					<CloseButton
						onClick={onClickClose}
						diameter={40}
						style={{ fill: 'white', boxSizing: 'border-box', padding: '10px', cursor: 'pointer' }}
					>
						<Close></Close>
					</CloseButton>
				</div>
				<ImgContainer src={restaurantData.img}></ImgContainer>
				<div style={{ padding: '20px', boxSizing: 'border-box' }}>
					<h2>{restaurantData.name}</h2>
					<p>{restaurantData.address}</p>
					<p>{restaurantData.avgprice}</p>
				</div>
			</div>
		</ReviewsContainer>
	);
};
