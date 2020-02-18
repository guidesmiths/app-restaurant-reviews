import styled from 'styled-components';

export const Loading = styled.div`
	position: relative;
	margin-top: 30vh;
	animation: loader-1 1s infinite linear;
	&::before,
	&::after {
		content: '';
		width: 0;
		height: 0;
		border: 1.2em solid #00c6ae;
		display: block;
		position: absolute;
		border-radius: 100%;
		animation: loader-2 1s infinite ease-in-out;
	}
	&::before {
		top: 0;
		left: 50%;
	}
	&::after {
		bottom: 0;
		right: 50%;
		animation-delay: -0.5s;
	}

	@keyframes loader-1 {
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes loader-2 {
		0%,
		100% {
			transform: scale(0);
		}
		50% {
			transform: scale(1);
		}
	}
`;
