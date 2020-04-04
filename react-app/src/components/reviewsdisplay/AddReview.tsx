import React, { useState, useEffect } from 'react';
import { Gauge } from '@danielherrerohernando/matteoaffinity-storybook';
import { RateSlider } from './SubComponents';
import { ReviewInput, AddReviewButton } from './styled';
import { postReview } from '../../apiService/apiService';

export default ({ id, name }) => {
	const [cuisineValue, setCuisineValue] = useState(0);
	const [priceValue, setPriceValue] = useState(0);
	const [settingValue, setSettingValue] = useState(0);

	const [rate, setRate] = useState(0);
	const [content, setContent] = useState('');

	useEffect(() => {
		setRate((cuisineValue * 2 + settingValue + priceValue) / 4);
	}, [cuisineValue, priceValue, settingValue]);

	const onClickSubmit = async () => {
		try {
			await postReview({
				restaurant_id: id,
				rate: rate,
				cuisinerate: cuisineValue,
				pricerate: priceValue,
				settingrate: settingValue,
				content: content,
			});
		} catch (error) {}
	};
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
			<RateSlider topic="Price" value={priceValue} setValue={setPriceValue}></RateSlider>
			<RateSlider topic="Setting" value={settingValue} setValue={setSettingValue}></RateSlider>
			<div style={{ margin: '0 20px 0 30px' }}>
				<div style={{ textAlign: 'left', margin: '10px 0 2px 0' }}>
					<label style={{ fontSize: '.85em' }} htmlFor="addcomment">
						Add a comment for your review
					</label>
				</div>
				<ReviewInput
					id="addcomment"
					placeholder="Write your comment here"
					value={content}
					onChange={e => console.log(e)}
				></ReviewInput>
			</div>
			<AddReviewButton onClick={() => onClickSubmit()}>Submit</AddReviewButton>
		</div>
	);
};
