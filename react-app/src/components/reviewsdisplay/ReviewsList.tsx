import React from 'react';

import { CommentDiv, CommentPic, CommentRate } from './styled';

export default () => {
	const Review = () => (
		<div style={{ display: 'flex', marginBottom: '20px' }}>
			<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '5px' }}>
				<CommentPic
					src={'https://lh3.googleusercontent.com/a-/AAuE7mC_IrTi3dHT2e5MGaTSidwra--EJBgEwplghrPh=s96-c'}
				></CommentPic>
				<CommentRate>7.6</CommentRate>
			</div>
			<div className="boxreview">
				<div
					style={{
						width: 'auto',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<h5 style={{ margin: '5px 0' }}>Daniel Herrero Hernando</h5>
					<h5 style={{ margin: '5px 0', fontWeight: 'lighter', fontSize: '.7em' }}>27/02/2020</h5>
				</div>
				<CommentDiv>
					<p style={{ margin: 0, padding: '5px 10px' }}>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book.
					</p>
				</CommentDiv>
			</div>
		</div>
	);
	return (
		<div style={{ margin: '10px 20px' }}>
			<Review></Review>
			<Review></Review>
			<Review></Review>
			<Review></Review>
		</div>
	);
};
