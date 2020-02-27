import React from 'react';

import { CommentDiv, CommentPic } from './styled';

export default () => {
	const Review = () => (
		<CommentDiv>
			<CommentPic
				src={'https://lh3.googleusercontent.com/a-/AAuE7mC_IrTi3dHT2e5MGaTSidwra--EJBgEwplghrPh=s96-c'}
			></CommentPic>
			<div
				style={{
					position: 'absolute',
					top: '-40px',
					width: 'auto',
					right: 0,
					left: '10px',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<h5>Daniel Herrero Hernando</h5>
				<h5 style={{ fontWeight: 'lighter' }}>27/02/2020</h5>
			</div>
			<p style={{ margin: 0, padding: '5px 10px' }}>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
				standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
				a type specimen book.
			</p>
		</CommentDiv>
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
