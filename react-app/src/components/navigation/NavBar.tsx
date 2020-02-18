import React, { Fragment } from 'react';
import { StyledNavBar } from './styled/NavBar';
import { NavTitle } from './styled/NavTitle';
import MenuButton from './MenuButton';
import DropDownMenu from './DropDownMenu';
import { ReactComponent as Logo } from '../../assets/gsIcon.svg';

const NavBar = () => {
	const [isTitleVisible, setTitleVisibility] = React.useState(false);
	const [isOpen, toggleOpen] = React.useState(false);
	const handleScroll = () => setTitleVisibility(window.scrollY > 100);
	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<Fragment>
			<StyledNavBar>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Logo></Logo>
					<NavTitle isVisible={isTitleVisible}>MatteoAffinity</NavTitle>
				</div>
				<MenuButton isOpen={isOpen} toggleOpen={toggleOpen}></MenuButton>
			</StyledNavBar>
			<DropDownMenu isOpen={isOpen} toggleOpen={toggleOpen}></DropDownMenu>
		</Fragment>
	);
};

export default NavBar;
