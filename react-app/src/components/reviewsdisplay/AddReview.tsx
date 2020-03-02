import React, { useState, useEffect } from 'react';
import { Gauge } from '@danielherrerohernando/matteoaffinity-storybook';
import { RateSlider } from './SubComponents';
import { ReviewInput, AddReviewButton } from './styled';

export default ({ name }) => {
	const [cuisineValue, setCuisineValue] = useState(0);
	const [settingValue, setSettingValue] = useState(0);
	const [serviceValue, setServiceValue] = useState(0);
	const [rate, setRate] = useState(0);

	useEffect(() => {
		setRate((cuisineValue * 2 + settingValue + serviceValue) / 4);
	}, [cuisineValue, serviceValue, settingValue]);
	return (
		<div style={{ textAlign: 'center' }}>
			<h4 style={{ marginTop: 0, paddingTop: '50px' }}>{`Your review for ${name}`}</h4>
			<div style={{ fontSize: '.5em', display: 'flex', justifyContent: 'center' }}>
				<Gauge diameter={100} thickness={4} innerColor={'rgb(247, 247, 247)'} backColor={'white'} data={rate}></Gauge>
			</div>
			<p style={{ marginTop: '20px', fontSize: '1em' }}>Your rate</p>
			<p style={{ marginTop: '20px', fontSize: '1em', fontWeight: 'lighter' }}>
				{'Drag & drop to rate the different categories'}
			</p>
			<RateSlider topic="Cuisine" value={cuisineValue} setValue={setCuisineValue}></RateSlider>
			<RateSlider topic="Setting" value={settingValue} setValue={setSettingValue}></RateSlider>
			<RateSlider topic="Service" value={serviceValue} setValue={setServiceValue}></RateSlider>
			<div style={{ margin: '0 20px 0 30px' }}>
				<div style={{ textAlign: 'left', margin: '10px 0 2px 0' }}>
					<label style={{ fontSize: '.85em' }} htmlFor="addcomment">
						Add a comment for your review
					</label>
				</div>
				<ReviewInput id="addcomment" placeholder="Write your comment here"></ReviewInput>
			</div>
			<AddReviewButton onClick={() => console.log('holi')}>Submit</AddReviewButton>
		</div>
	);
};
