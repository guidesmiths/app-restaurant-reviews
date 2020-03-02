import React from 'react';
import { CoolDiv, ImgContainer, CardTitle, CardRate } from './styled/Card';

import { Restaurant } from '../../interfaces';

interface ClickProps {
	onclick: (restaurant: Restaurant) => void;
}
type Props = Restaurant & ClickProps;

const Card = ({ name, img, rate, address, avgprice, onclick }: Props) => (
	<CoolDiv onClick={() => onclick({ name, img, rate, address, avgprice })}>
		<ImgContainer src={img}></ImgContainer>
		<div style={{ margin: '0 8px 4px 8px' }}>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2px 5px' }}>
				<div>
					<CardTitle>{name}</CardTitle>
					<p style={{ color: '#00cc99', margin: 0, fontWeight: 'lighter' }}>Casera</p>
				</div>
				<div style={{ textAlign: 'right' }}>
					<CardRate>
						{rate && rate.toFixed(1)}
						<span style={{ fontSize: '50%', fontWeight: 300 }}>/10</span>
					</CardRate>
				</div>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2px 5px' }}>
				<p style={{ fontSize: '0.7em', fontWeight: 'lighter', margin: 0 }}>
					Distance from office: <span style={{ fontSize: '1.1em', fontWeight: 'bolder' }}>5 min</span>
				</p>
				<p style={{ margin: 0, fontSize: '0.7em', fontWeight: 'lighter' }}>
					Avg price: <span style={{ fontSize: '1.1em', fontWeight: 'bolder' }}>14.65€</span>
				</p>
			</div>
		</div>
	</CoolDiv>
);

export default Card;
