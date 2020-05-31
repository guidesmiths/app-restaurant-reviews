import React from 'react';
import { SortingContext } from '../../context/SortingContext';

export default () => {
	const { changeSorting } = React.useContext(SortingContext);

	return (
		<div style={{ display: 'flex' }}>
			<p>Sort by:</p>
			<div style={{ display: 'flex' }}>
				<button onClick={() => changeSorting('rate')}>Rate</button>
				<button onClick={() => changeSorting('price')}>Price</button>
				<button onClick={() => changeSorting('distance')}>Distance</button>
			</div>
		</div>
	);
};
