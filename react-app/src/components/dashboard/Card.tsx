import React from 'react';
import { CoolDiv, ImgContainer, CardTitle, CardRate, CardTag } from './styled/Card';

import { Restaurant } from '../../interfaces';

interface ClickProps {
	onclick: (restaurant: Restaurant) => void;
}
type Props = Restaurant & ClickProps;

const Card = ({ name, img, rate, address, avgprice, onclick }: Props) => (
	<CoolDiv onClick={() => onclick({ name, img, rate, address, avgprice })}>
		<ImgContainer src={img}></ImgContainer>
		<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
			<div>
				<CardTitle>{name}</CardTitle>
				<CardTag>Casera</CardTag>
			</div>

			<CardRate>{rate && rate.toFixed(1)}</CardRate>
		</div>
	</CoolDiv>
);

export default Card;
