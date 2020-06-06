import styled from 'styled-components';

export const Header = styled.div`
	width: 70%;
	margin: 130px auto 20px auto;
	@media (max-width: 880px) {
		width: 74%;
	}
`;

export const HeaderTitle = styled.h1`
	font-weight: 700;
	font-size: 2em;
	margin: 0;
`;

export const HeaderSubTitle = styled.p`
	font-weight: 300;
	font-size: 1em;
`;

export const AddPollButton = styled.button`
	width: 30px;
	height: 30px;
	border-radius: 15px;
	background-color: #00cc99;
	margin-inline-start: 10px;
	border: none;
	color: white;
	font-size: 1.3em;
	cursor: pointer;
	outline: none;
`;
