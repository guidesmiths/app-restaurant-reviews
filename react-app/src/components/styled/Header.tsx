import styled from 'styled-components';

export const Header = styled.div`
	width: 70%;
	margin: 130px auto 20px auto;
	font-family: 'Lato', sans-serif;
	@media (max-width: 880px) {
		width: 74%;
	}
`;

export const HeaderTitle = styled.h1`
	font-weight: 700;
	font-size: 2em;
	margin-bottom: 10px;
	padding-bottom: 10px;
	border-bottom: 3px solid #00c6ae;
`;

export const HeaderSubTitle = styled.p`
	font-weight: 300;
	font-size: 1em;
`;
