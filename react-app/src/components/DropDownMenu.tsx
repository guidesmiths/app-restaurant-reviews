import React from 'react';
import { DropDownStyled } from './styled/DropDownStyled';
import { DropDownRow } from './DropDownRow';
import { ReactComponent as ReviewsIcon } from '../assets/reviews.svg';
import { ReactComponent as LogoutIcon } from '../assets/logout.svg';

interface Props {
	isOpen: boolean;
}

const menuRows = [
	{
		text: 'My Reviews',
		logo: ReviewsIcon,
	},
	{
		text: 'LogOut',
		logo: LogoutIcon,
	},
];

const DropDownMenu = ({ isOpen }: Props) => (
	<DropDownStyled isOpen={isOpen}>
		{menuRows.map((element, idx) => (
			<DropDownRow key={idx} text={element.text}>
				<element.logo></element.logo>
			</DropDownRow>
		))}
	</DropDownStyled>
);

export default DropDownMenu;
