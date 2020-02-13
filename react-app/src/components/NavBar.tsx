import React, { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import { GoogleLogout } from 'react-google-login';
import { StyledNavBar } from './styled/NavBar';
import { NavTitle } from './styled/NavTitle';
import { ReactComponent as Logo } from '../assets/gsIcon.svg';

const NavBar = () => {
	const { userLogout } = useContext(LoginContext);
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
			<div style={{ transform: 'rotate(270deg)', marginBottom: '60px', marginRight: '10px' }}>
				<GoogleLogout
					clientId={process.env.REACT_APP_CLIENT_ID || ''}
					buttonText="Logout"
					onLogoutSuccess={userLogout}
				/>
			</div>
		</StyledNavBar>
	);
};

export default NavBar;
