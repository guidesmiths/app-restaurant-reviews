import React from 'react';

import { CommentDiv, CommentPic, CommentRate, AddReviewButton, CommentInfo } from './styled';
import { ReviewRates } from './SubComponents';

const Review = ({ content, rate, cuisinerate, pricerate, settingrate, date, authorname, authorimg }) => (
	<div style={{ display: 'flex', marginBottom: '20px' }}>
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				alignItems: 'center',
				marginTop: '5px',
			}}
		>
			<CommentPic src={authorimg}></CommentPic>
			<CommentRate>{rate && (rate / 10).toFixed(1)}</CommentRate>
		</div>
		<div className="boxreview">
			<CommentInfo>
				<h5 style={{ margin: '5px 0' }}>{authorname}</h5>
				<h5 style={{ margin: '5px 0', fontWeight: 'lighter', fontSize: '.7em' }}>
					{date.replace('T', ' ').replace('.000Z', '')}
				</h5>
			</CommentInfo>
			<CommentDiv>
				<p style={{ margin: 0, padding: '5px 10px' }}>{content}</p>
			</CommentDiv>
			<ReviewRates cuisinerate={cuisinerate} pricerate={pricerate} settingrate={settingrate}></ReviewRates>
		</div>
	</div>
);

export default ({ reviews, isLoading, toggleDisplay }) => {
	return (
		<div
			style={{
				padding: '0 20px 10px 20px',
				overflow: 'scroll',
				position: 'absolute',
				top: '315px',
				bottom: 0,
				width: '100%',
				boxSizing: 'border-box',
			}}
		>
			{isLoading && <div>Loading!!!</div>}
			{!isLoading && reviews && reviews.map((review, idx) => <Review key={idx} {...review}></Review>)}
			<AddReviewButton onClick={() => toggleDisplay(false)}>Add Review</AddReviewButton>
		</div>
	);
};
