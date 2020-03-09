import React from 'react';

export default ({ setSorting }) => {
	return (
		<div>
			<p>Sort by:</p>
			<div style={{ display: 'flex' }}>
				<button onClick={() => setSorting('rate')}>Rate</button>
				<button onClick={() => setSorting('price')}>Price</button>
				<button onClick={() => setSorting('distance')}>Distance</button>
			</div>
		</div>
	);
};
