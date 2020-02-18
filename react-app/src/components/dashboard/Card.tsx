import React from 'react';
import { CoolDiv, ImgContainer, CardTitle, CardRate, CardTag } from './styled/Card';

interface Props {
	name: string;
	img: string;
	rate: number;
}

const Card = ({ name, img, rate }: Props) => (
	<CoolDiv>
		<ImgContainer src={img}></ImgContainer>
		<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
			<div>
				<CardTitle>{name}</CardTitle>
				<CardTag>Casera</CardTag>
			</div>

			<CardRate>{rate.toFixed(1)}</CardRate>
		</div>
	</CoolDiv>
);

export default Card;
