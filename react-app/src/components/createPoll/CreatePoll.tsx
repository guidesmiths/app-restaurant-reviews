import React, { useState, useContext } from 'react';

import { createPoll, pollToSlack } from '../../apiService/apiService';

import {
	CreatePollContainer,
	EditContainer,
	ChoicesContainer,
	OptionCard,
	CreatePollButton,
	PollSuccessContainer,
} from './styled';
import { CloseButton } from '../common/styled';
import { PollContext } from '../../context/PollContext';
import { ReactComponent as Close } from '../../assets/close.svg';
import { ReviewInput, TitleInput } from '../reviewsdisplay/styled';

import SlackLogo from '../../assets/slack.png';

export default () => {
	const { isPollOpen, toggle, options, reset } = useContext(PollContext);
	const [isSubmitting, setSubmitting] = useState(false);
	const [isCreated, setCreated] = useState(false);
	const [pollId, setPollId] = useState('');

	const [isShared, setShared] = useState(false);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const onClickCreate = async () => {
		setSubmitting(true);
		setCreated(true);
		try {
			const { id } = await createPoll(title, description, options);
			setPollId(id);
		} catch (error) {
			console.log(error);
		} finally {
			setSubmitting(false);
		}
	};

	const onClickSlack = async () => {
		try {
			await pollToSlack(pollId, title, options);
		} catch (error) {
			console.log(error);
		} finally {
			setShared(true);
		}
	};

	const onClose = () => {
		toggle(false);
		setCreated(false);
		reset();
		setTitle('');
		setDescription('');
		return;
	};

	return (
		<CreatePollContainer isOpen={isPollOpen}>
			<EditContainer active={!isCreated}>
				<div style={{ position: 'absolute', top: '10px', left: '20px', zIndex: 220 }}>
					<CloseButton onClick={onClose} diameter={40}>
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
					<TitleInput
						id="addtitle"
						placeholder="Write your title here"
						value={title}
						onChange={e => setTitle(e.target.value)}
					></TitleInput>
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
						value={description}
						onChange={e => setDescription(e.target.value)}
					></ReviewInput>
				</div>
				<div style={{ margin: '0 20px 0 30px' }}>
					<div style={{ textAlign: 'left', margin: '10px 0 2px 0' }}>
						<label style={{ fontSize: '.85em' }}>Add options for your poll</label>
					</div>
				</div>
				<ChoicesContainer>
					{options.length ? (
						options.map(name => <OptionCard key={name}>{name}</OptionCard>)
					) : (
						<div className="emptyoptions">Click on the restaurants on the left to add them to this list</div>
					)}
				</ChoicesContainer>
				<CreatePollButton onClick={onClickCreate}>{isSubmitting ? '...Creating...' : 'Create'}</CreatePollButton>
			</EditContainer>
			<PollSuccessContainer active={isCreated}>
				{isSubmitting ? (
					<div
						style={{
							height: '100%',
							paddingLeft: '15%',
							paddingRight: '15%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						Your poll is being created...
					</div>
				) : (
					<>
						<div style={{ position: 'absolute', top: '10px', left: '20px', zIndex: 220 }}>
							<CloseButton onClick={onClose} diameter={40}>
								<Close></Close>
							</CloseButton>
						</div>
						<div style={{ textAlign: 'center', paddingTop: '30%' }}>
							<span role="img" aria-label="emojis" style={{ fontSize: '3em' }}>
								🍔🍻🍕
							</span>
							<h3>Your poll has been successfully created!</h3>
							<p>You can view it here:</p>
							<a className="viewpoll" href={`https://torralpoll.lucas1004jx.now.sh/polls?id=${pollId}`} target="_blank">
								View poll
							</a>
							<h5 className="slackquestion">Do you want to share it via Slack?</h5>
							{!isShared ? (
								<button className="slackbutton" onClick={onClickSlack}>
									<img alt="slack" className="slacklogo" src={SlackLogo}></img>
									<span>Share in Slack</span>
								</button>
							) : (
								<p>Shared!!</p>
							)}
						</div>
					</>
				)}
			</PollSuccessContainer>
		</CreatePollContainer>
	);
};
