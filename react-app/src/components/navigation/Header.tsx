import React, { useContext } from 'react';

import { PollContext } from '../../context/PollContext';

import { Header, HeaderTitle, AddPollButton } from './styled/Header';
import SortBy from './SortBy';

export default () => {
	const { toggle } = useContext(PollContext);
	return (
		<Header>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					borderBottom: '3px solid #00c6ae',
					marginBottom: '10px',
					paddingBottom: '5px',
				}}
			>
				<HeaderTitle>Matteo Affinity</HeaderTitle>
				<div className="add-poll" onClick={() => toggle(true)}>
					<span>Create poll</span>
					<AddPollButton>+</AddPollButton>
				</div>
			</div>
			<SortBy></SortBy>
		</Header>
	);
};
