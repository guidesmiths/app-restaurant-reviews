import React from 'react';

import { Header, HeaderTitle } from './styled/Header';
import SortBy from './SortBy';

export default () => {
	return (
		<Header>
			<HeaderTitle>Matteo Affinity</HeaderTitle>
			<SortBy></SortBy>
		</Header>
	);
};
