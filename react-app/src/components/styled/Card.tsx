import styled from 'styled-components';

export const CardContainer = styled.div`
	width: 74%;
	margin: 60px auto 50px auto;
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
	transition: all 0.3s;
	cursor: pointer;
	&:hover {
		transform: scale(1.03);
	}
`;
export const ImgContainer = styled.img`
	object-fit: cover;
	height: 150px;
	width: 100%;
`;
export const CardTitle = styled.h4`
	font-weight: 700;
	font-size: 1.4em;
	margin: 5px 5px 2px 5px;
`;
export const CardRate = styled.h3`
	font-weight: 700;
	font-size: 2.2em;
	margin: 5px;
	color: #00cc99;
`;
export const CardTag = styled.p`
	font-weight: 300;
	margin: 2px 5px 2px 5px;
	color: #00cc99;
`;
