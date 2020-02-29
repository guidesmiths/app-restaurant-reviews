import React from 'react';

import { CommentDiv, CommentPic, CommentRate, AddReviewButton, CommentInfo } from './styled';
import { ReviewRates } from './SubComponents';

const Review = () => (
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
			<CommentPic
				src={'https://lh3.googleusercontent.com/a-/AAuE7mC_IrTi3dHT2e5MGaTSidwra--EJBgEwplghrPh=s96-c'}
			></CommentPic>
			<CommentRate>7.6</CommentRate>
		</div>
		<div className="boxreview">
			<CommentInfo>
				<h5 style={{ margin: '5px 0' }}>Daniel Herrero Hernando</h5>
				<h5 style={{ margin: '5px 0', fontWeight: 'lighter', fontSize: '.7em' }}>27/02/2020</h5>
			</CommentInfo>
			<CommentDiv>
				<p style={{ margin: 0, padding: '5px 10px' }}>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
					make a type specimen book.
				</p>
			</CommentDiv>
			<ReviewRates></ReviewRates>
		</div>
	</div>
);

export default () => {
	return (
		<div
			style={{
				margin: '0 0 10px 20px',
				paddingRight: '30px',
				overflow: 'scroll',
				position: 'absolute',
				top: '315px',
				bottom: 0,
			}}
		>
			<Review></Review>
			<Review></Review>
			<Review></Review>
			<Review></Review>
			<AddReviewButton>Add Review</AddReviewButton>
		</div>
	);
};
