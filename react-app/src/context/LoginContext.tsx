import React, { createContext, useState } from 'react';

const initialContext = {
	loginState: false,
	userProfile: {},
	userLogin: (token: any, profile: any, history: any) => undefined,
	userLogout: (history: any) => undefined,
};

const LoginContext = createContext(initialContext);

const LoginContextProvider = ({ children }) => {
	const [loginState, setLoginState] = useState(false);
	const [userProfile, setUserProfile] = useState({});

	const userLogin = (token: any, profile: any, history: any): undefined => {
		localStorage.setItem('token', token);
		localStorage.setItem('profile', JSON.stringify(profile));
		setLoginState(true);
		setUserProfile(profile);
		history.push('/home');
		return;
	};

	const userLogout = (history: any): undefined => {
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
