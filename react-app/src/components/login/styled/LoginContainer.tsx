import styled from 'styled-components';

export const LoginContainer = styled.div`
	margin: 25vh 0 0 0;
	padding: 0 15%;
	border-bottom: 4px solid #00cc99;
	@media (max-width: 640px) {
		padding: 0 8%;
		border-bottom: none;
	}
`;
export const LoginContainer2 = styled.div`
	width: fit-content;
	height: fit-content;
	@media (max-width: 640px) {
		width: 100%;
	}
`;

export const LoginTitle = styled.h1`
	font-weight: 700;
	font-size: 6em;
	text-align: left;
	margin: 0;
	@media (max-width: 540px) {
		font-size: 4.5em;
	}
`;
export const LoginTitle2 = styled.h1`
	font-weight: 700;
	font-size: 8em;
	text-align: left;
	margin: 0;
	@media (max-width: 540px) {
		font-size: 5.5em;
	}
`;
