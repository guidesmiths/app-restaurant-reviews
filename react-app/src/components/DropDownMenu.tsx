import React from 'react';
import { LoginContext } from '../context/LoginContext';
import { DropDownStyled } from './styled/DropDownStyled';
import { DropDownRow } from './DropDownRow';
import { ReactComponent as ReviewsIcon } from '../assets/reviews.svg';
import { ReactComponent as LogoutIcon } from '../assets/logout.svg';

interface Props {
	isOpen: boolean;
}

const DropDownMenu = ({ isOpen }: Props) => {
	const { userLogout } = React.useContext(LoginContext);
	const menuRows = [
		{
			text: 'My Reviews',
			logo: ReviewsIcon,
			onClick: () => {},
		},
		{
			text: 'LogOut',
			logo: LogoutIcon,
			onClick: userLogout,
		},
	];

	return (
		<DropDownStyled isOpen={isOpen}>
			{menuRows.map((element, idx) => (
				<DropDownRow key={idx} text={element.text} onClick={element.onClick}>
					<element.logo></element.logo>
				</DropDownRow>
			))}
		</DropDownStyled>
	);
};

export default DropDownMenu;
