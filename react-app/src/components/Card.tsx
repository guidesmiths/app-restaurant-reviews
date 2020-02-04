import React from 'react';
import { CoolDiv, ImgContainer, CardTitle } from './styled/Card';

interface Props {
	name: string;
	img: string;
}

const Card = ({ name, img }: Props) => (
	<CoolDiv>
		<ImgContainer src={img}></ImgContainer>
		<CardTitle>{name}</CardTitle>
	</CoolDiv>
);

export default Card;
