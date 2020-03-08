import styled from 'styled-components';

export const LoginContainer = styled.div`
	margin: 30vh auto;
	width: 60%;
	height: 40vh;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	position: relative;
	&::after {
		content: '';
		background-color: white;
		opacity: 0.74;
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
	margin: 50px auto 0 auto;
	@media (max-width: 540px) {
		font-size: 2em;
	}
`;
