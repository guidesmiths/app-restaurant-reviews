import React, { useEffect, useState } from 'react';

import { ReviewsContainer, ImgContainer, OverlayContainer } from './styled';
import { CloseButton } from '../common/styled';
import { ReactComponent as Close } from '../../assets/close.svg';
import { Gauge } from '@danielherrerohernando/matteoaffinity-storybook';
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

	const ReviewGauge = ({ data, text }) => (
		<div style={{ margin: '0 8px' }}>
			<Gauge diameter={70} thickness={3} innerColor={'rgb(247, 247, 247)'} data={data}></Gauge>
			<p style={{ marginTop: '20px', textAlign: 'center', fontSize: '2.3em' }}>{text}</p>
		</div>
	);

	return (
		<ReviewsContainer isOpen={isOpen}>
			<div style={{ position: 'relative' }}>
				<div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 220 }}>
					<CloseButton
						onClick={onClickClose}
						diameter={40}
						style={{ fill: 'white', boxSizing: 'border-box', padding: '10px', cursor: 'pointer' }}
					>
						<Close></Close>
					</CloseButton>
				</div>
				<ImgContainer src={restaurantData.img}></ImgContainer>
				<OverlayContainer>
					<div style={{ textAlign: 'center', width: '70%' }}>
						<p>GuideSmiths reviews</p>
						<div style={{ height: '2px', width: '100%', borderTop: '1px solid white' }}></div>
						<h2>{restaurantData.name}</h2>
					</div>
				</OverlayContainer>
				<div
					style={{
						boxSizing: 'border-box',
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
						position: 'absolute',
						top: '215px',
						width: '95%',
						fontSize: '6px',
					}}
				>
					<ReviewGauge data={65} text={'Cuisine'}></ReviewGauge>
					<ReviewGauge data={83} text={'Setting'}></ReviewGauge>
					<ReviewGauge data={37} text={'Service'}></ReviewGauge>
				</div>
				<div
					style={{ margin: '60px auto 0 auto', height: '100px', width: '90%', borderTop: '1px solid rgba(0,0,0,0.08)' }}
				></div>
			</div>
		</ReviewsContainer>
	);
};
