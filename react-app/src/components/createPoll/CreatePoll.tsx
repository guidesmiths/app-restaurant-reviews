import React, { useEffect, useState, useContext } from 'react';

import { CreatePollContainer, EditContainer, ChoicesContainer, OptionCard, CreatePollButton } from './styled';
import { CloseButton } from '../common/styled';
import { PollContext } from '../../context/PollContext';
import { ReactComponent as Close } from '../../assets/close.svg';
import { ReviewInput, TitleInput } from '../reviewsdisplay/styled';

export default () => {
	const { isPollOpen, toggle, options } = useContext(PollContext);
	return (
		<CreatePollContainer isOpen={isPollOpen}>
			<EditContainer>
				<div style={{ position: 'absolute', top: '10px', left: '20px', zIndex: 220 }}>
					<CloseButton onClick={() => toggle(false)} diameter={40}>
						<Close></Close>
					</CloseButton>
				</div>
				<h3 style={{ textAlign: 'center', paddingTop: '40px' }}>Create a poll</h3>
				<div style={{ margin: '0 20px 0 30px' }}>
					<div style={{ textAlign: 'left', margin: '10px 0 2px 0' }}>
						<label style={{ fontSize: '.85em' }} htmlFor="addtitle">
							Add a title for your poll
						</label>
					</div>
					<TitleInput id="addtitle" placeholder="Write your title here" value={''} onChange={() => {}}></TitleInput>
				</div>
				<div style={{ margin: '0 20px 0 30px' }}>
					<div style={{ textAlign: 'left', margin: '10px 0 2px 0' }}>
						<label style={{ fontSize: '.85em' }} htmlFor="adddesc">
							Add a description for your poll
						</label>
					</div>
					<ReviewInput
						id="adddesc"
						placeholder="Write your description here"
						value={''}
						onChange={() => {}}
					></ReviewInput>
				</div>
				<div style={{ margin: '0 20px 0 30px' }}>
					<div style={{ textAlign: 'left', margin: '10px 0 2px 0' }}>
						<label style={{ fontSize: '.85em' }}>Add options for your poll</label>
					</div>
				</div>
				<ChoicesContainer>
					{options.length ? (
						options.map(name => <OptionCard>{name}</OptionCard>)
					) : (
						<div className="emptyoptions">Click on the restaurants on the left to add them to this list</div>
					)}
				</ChoicesContainer>
				<CreatePollButton>Create</CreatePollButton>
			</EditContainer>
		</CreatePollContainer>
	);
};
