import styled from 'styled-components';

const Loading = styled.div`
	margin: 100px auto;
	width: 11em;
	height: 11em;
	border-radius: 50%;
	border-left: 8px solid #00c6ae;
	position: relative;
	animation: rot 1.4s infinite linear;

	@keyframes rot {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

export default Loading;
