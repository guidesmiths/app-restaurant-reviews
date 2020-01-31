import styled from 'styled-components';

export const CardContainer = styled.div`
	width: 74%;
	margin: 130px auto 50px auto;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
	@media (max-width: 880px) {
		width: 85%;
		grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
	}
	@media (max-width: 540px) {
		width: 87%;
		grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
	}
	@media (max-width: 340px) {
		width: 92%;
		grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
	}
`;

export const CoolDiv = styled.div`
	border-radius: 5px;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	padding: 0.7rem;
	margin: 20px 10px;
	box-sizing: border-box;
`;
export const ImgContainer = styled.img`
	object-fit: cover;
	height: 150px;
	width: 100%;
`;
export const CardTitle = styled.h4`
	font-family: 'Lato', sans-serif;
	font-weight: 700;
	font-size: 1.4em;
	margin: 12px 5px 8px auto;
`;

export const Loading = styled.div`
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

export const StyledNavBar = styled.div`
	overflow: hidden;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 80px;
	box-sizing: border-box;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	z-index: 100;
	background: white;
	transition: width 0.7s, background 0.7s;
	padding: 20px 0 0 20px;
	&:hover {
		width: 300px;
		background: rgb(250, 250, 250);
	}
	@media (max-width: 880px) {
		height: 80px;
		width: 100%;
	}
`;
