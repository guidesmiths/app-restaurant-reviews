import React, { createContext, useState } from 'react';
import history from '../history';

const initialContext = {
	loginState: false,
	userProfile: {},
	userLogin: (token: string, profile: {}) => undefined,
	userLogout: () => undefined,
};

const LoginContext = createContext(initialContext);

const LoginContextProvider = ({ children }) => {
	const [loginState, setLoginState] = useState(false);
	const [userProfile, setUserProfile] = useState({});

	const userLogin = (token: string, profile: {}): undefined => {
		localStorage.setItem('token', token);
		localStorage.setItem('profile', JSON.stringify(profile));
		setLoginState(true);
		setUserProfile(profile);
		history.push('/home');
		return;
	};

	const userLogout = (): undefined => {
		localStorage.removeItem('token');
		localStorage.removeItem('profile');
		setLoginState(false);
		setUserProfile({});
		history.push('/');
		return;
	};

	const value = {
		loginState,
		userProfile,
		userLogin,
		userLogout,
	};

	return <LoginContext.Provider value={{ ...value }}>{children}</LoginContext.Provider>;
};
export { LoginContext, LoginContextProvider };
