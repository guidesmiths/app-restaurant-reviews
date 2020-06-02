import React from 'react';
import { SortingContext } from '../../context/SortingContext';
import { Wrapper, Button, Back } from './styled/SortBy';

const crit2number = criteria => {
	if (criteria === 'rate') return 0;
	if (criteria === 'price') return 1;
	return 2;
};
export default () => {
	const { preCriteria, changeSorting } = React.useContext(SortingContext);

	return (
		<div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
			<Wrapper>
				<Button active={crit2number(preCriteria) === 0} onClick={() => changeSorting('rate')}>
					Rate
				</Button>
				<Button active={crit2number(preCriteria) === 1} onClick={() => changeSorting('price')}>
					Price
				</Button>
				<Button active={crit2number(preCriteria) === 2} onClick={() => changeSorting('distance')}>
					Distance
				</Button>
				<Back position={crit2number(preCriteria)}></Back>
			</Wrapper>
		</div>
	);
};
