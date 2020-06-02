import React from 'react';
import { SuperDiv, CoolDiv, CoolDivBack, ImgContainer, CardTitle, CardRate } from './styled/Card';
import miniMatt from '../../assets/minimatt.png';
import { Restaurant } from '../../interfaces';

interface ClickProps {
	onclick: (restaurant: Restaurant) => void;
	inactive: boolean;
	flip: boolean;
}
type Props = Restaurant & ClickProps;

const Card = ({ id, name, img, distance, average_rate, avgprice, onclick, inactive, flip }: Props) => (
	<SuperDiv id={name} onClick={() => onclick({ id, name, img, average_rate, avgprice })} inactive={inactive}>
		<div className="flip-card-inner">
			<CoolDiv flip={flip}>
				<ImgContainer src={img}></ImgContainer>
				<div style={{ margin: '0 8px 4px 8px' }}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2px 5px' }}>
						<div>
							<CardTitle>{name}</CardTitle>
							<p style={{ color: '#00cc99', margin: 0, fontWeight: 'lighter' }}>Casera</p>
						</div>
						<div style={{ textAlign: 'right' }}>
							<CardRate>
								{(average_rate && (average_rate / 10).toFixed(1)) || '-'}
								<span style={{ fontSize: '50%', fontWeight: 300 }}>/10</span>
							</CardRate>
						</div>
					</div>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2px 5px' }}>
						<p style={{ fontSize: '0.7em', fontWeight: 'lighter', margin: 0 }}>
							Distance from office: <span style={{ fontSize: '1.1em', fontWeight: 'bolder' }}>{distance} min</span>
						</p>
						<p style={{ margin: 0, fontSize: '0.7em', fontWeight: 'lighter' }}>
							Avg price:{' '}
							<span style={{ fontSize: '1.1em', fontWeight: 'bolder' }}>{avgprice && avgprice.toFixed(2)}€</span>
						</p>
					</div>
				</div>
			</CoolDiv>
			<div style={{ width: '100%', height: '100%', padding: '20px 10px', boxSizing: 'border-box' }}>
				<CoolDivBack flip={flip}>
					<img src={miniMatt} className="card-minimatt"></img>
				</CoolDivBack>
			</div>
		</div>
	</SuperDiv>
);

export default Card;
