import styled from 'styled-components';

export const LoginContainer = styled.div`
	margin: 30vh auto;
	width: 60%;
	height: 40vh;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	&::after {
		content: '';
		background-image: url('https://mk0buddhaweeklyqoftb.kinstacdn.com/wp-content/uploads/2016/03/Buddha-Weekly-Happy-pig-Buddhism.jpg');
		background-position: center;
		background-size: cover;
		filter: grayscale(100%);
		opacity: 0.04;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		position: absolute;
		z-index: -1;
	}
	@media (max-width: 640px) {
		width: 80%;
	}
`;

export const LoginTitle = styled.h1`
	font-weight: 700;
	font-size: 3em;
	margin: 0 auto 40px auto;
	@media (max-width: 540px) {
		font-size: 2em;
	}
`;
