import React, { createContext, useState, useEffect } from 'react';
import history from '../history';
import axios from 'axios';

const initialContext = {
	loginState: false,
	checking: true,
	userProfile: {},
	userLogin: (token: string, profile: {}) => undefined,
	userLogout: () => undefined,
};

const LoginContext = createContext(initialContext);

const LoginContextProvider = ({ children }) => {
	const [loginState, setLoginState] = useState(initialContext.loginState);
	const [userProfile, setUserProfile] = useState(initialContext.userProfile);
	const [checking, setChecking] = useState(initialContext.checking);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			setLoginState(false);
			setChecking(false);
			return;
		}
		const isTokenValidForGoogle = async token => {
			try {
				await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`);
				setLoginState(true);
			} catch (error) {
				setLoginState(false);
			} finally {
				setChecking(false);
				return;
			}
		};
		isTokenValidForGoogle(token);
	}, []);

	const userLogin = (token: string, profile: {}): undefined => {
		localStorage.setItem('token', token);
		localStorage.setItem('profile', JSON.stringify(profile));
		setLoginState(true);
		setUserProfile(profile);
		return;
	};

	const userLogout = (): undefined => {
		localStorage.removeItem('token');
		localStorage.removeItem('profile');
		setLoginState(false);
		setUserProfile({});
		return;
	};

	const value = {
		loginState,
		checking,
		userProfile,
		userLogin,
		userLogout,
	};

	return <LoginContext.Provider value={{ ...value }}>{children}</LoginContext.Provider>;
};
export { LoginContext, LoginContextProvider };
