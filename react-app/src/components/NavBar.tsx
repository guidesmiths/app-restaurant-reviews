import React from 'react';
import { StyledNavBar } from './styled/NavBar';
import { NavTitle } from './styled/NavTitle';
import { ReactComponent as Logo } from '../assets/gsIcon.svg';

const NavBar = () => {
	const [isVisible, setVisible] = React.useState(false);
	const handleScroll = () => setVisible(window.scrollY > 100);
	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<StyledNavBar>
			<Logo></Logo>
			<NavTitle isVisible={isVisible}>MatteoAffinity</NavTitle>
		</StyledNavBar>
	);
};

export default NavBar;
