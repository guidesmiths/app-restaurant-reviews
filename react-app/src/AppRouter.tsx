import React, { useContext } from 'react';
import { LoginContext } from './context/LoginContext';
import gsLogo from './assets/gs-logo.png';

import { RefreshContextProvider } from './context/RefreshContext';
import { SortingContextProvider } from './context/SortingContext';
import { PollContextProvider } from './context/PollContext';

import Home from './pages/Home';
import Login from './pages/Login';

const SuperLoader = () => (
	<div style={{ position: 'absolute', top: '50%', left: '50%' }}>
		<img alt="loader" className="superloader" src={gsLogo}></img>
	</div>
);
const AppRouter = () => {
	const { loginState, checking } = useContext(LoginContext);
	if (checking) return <SuperLoader />;
	return loginState ? (
		<RefreshContextProvider>
			<SortingContextProvider>
				<PollContextProvider>
					<Home />
				</PollContextProvider>
			</SortingContextProvider>
		</RefreshContextProvider>
	) : (
		<Login />
	);
};

export default AppRouter;
