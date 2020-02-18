import React, { Fragment } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { DropDownStyled } from './styled/DropDownStyled';
import DropDownRow from './DropDownRow';
import { ReactComponent as ReviewsIcon } from '../../assets/reviews.svg';
import { ReactComponent as LogoutIcon } from '../../assets/logout.svg';

interface Props {
	isOpen: boolean;
	toggleOpen: (val: boolean) => void;
}

const DropDownMenu = ({ isOpen, toggleOpen }: Props) => {
	const { userLogout } = React.useContext(LoginContext);
	const menuDiv: any = React.useRef(null);

	React.useEffect(() => {
		const handleClicks = (e: MouseEvent) => menuDiv.current === e.target && toggleOpen(false);
		const ref = menuDiv.current;
		ref && ref.addEventListener('click', handleClicks);
		return () => ref && ref.removeEventListener('click', handleClicks);
	}, [isOpen, menuDiv, toggleOpen]);

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
		<Fragment>
			{isOpen ? (
				<div style={{ position: 'fixed', top: 80, bottom: 0, left: 0, right: 0, zIndex: 10 }} ref={menuDiv}></div>
			) : null}
			<DropDownStyled isOpen={isOpen}>
				{menuRows.map((element, idx) => (
					<DropDownRow key={idx} text={element.text} onClick={element.onClick}>
						<element.logo></element.logo>
					</DropDownRow>
				))}
			</DropDownStyled>
		</Fragment>
	);
};

export default DropDownMenu;
