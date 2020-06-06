import React, { useContext } from 'react';
import { LoginContext } from './context/LoginContext';
import gsLogo from './assets/gs-logo.png';

import Home from './pages/Home';
import Login from './pages/Login';

const SuperLoader = () => (
	<div style={{ position: 'absolute', top: '50%', left: '50%' }}>
		<img className="superloader" src={gsLogo}></img>
	</div>
);
const AppRouter = () => {
	const { loginState, checking } = useContext(LoginContext);
	if (checking) return <SuperLoader />;
	return loginState ? <Home></Home> : <Login />;
};

export default AppRouter;
