import React from 'react';
import styled from 'styled-components';

const CoolDiv = styled.div`
	border-radius: 5px;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	padding: 0.7rem;
	margin: 20px 10px;
	box-sizing: border-box;
`;
const ImgContainer = styled.img`
	object-fit: cover;
	height: 150px;
	width: 100%;
`;
const Title = styled.h4`
	font-family: 'Lato', sans-serif;
	font-weight: 700;
	font-size: 1.4em;
	margin: 12px 5px 8px auto;
`;

interface Props {
	name: string;
	img: string;
}

const Card = ({ name, img }: Props) => (
	<CoolDiv>
		<ImgContainer src={img}></ImgContainer>
		<Title>{name}</Title>
	</CoolDiv>
);

export default Card;
