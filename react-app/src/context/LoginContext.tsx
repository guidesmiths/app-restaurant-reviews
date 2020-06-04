import React, { createContext, useState } from 'react';
import history from '../history';

const initialContext = {
	loginState: !!localStorage.getItem('token'),
	userProfile: {},
	userLogin: (token: string, profile: {}) => undefined,
	userLogout: () => undefined,
};

const LoginContext = createContext(initialContext);

const LoginContextProvider = ({ children }) => {
	const [loginState, setLoginState] = useState(initialContext.loginState);
	const [userProfile, setUserProfile] = useState(initialContext.userProfile);

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
