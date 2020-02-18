import React, { Fragment, useContext, useEffect } from 'react';
import { LoginContext } from '../context/LoginContext';
import List from '../components/dashboard/List';
import NavBar from '../components/navigation/NavBar';
import Header from '../components/navigation/Header';
import history from '../history';

const Home = () => {
	const { loginState } = useContext(LoginContext);

	useEffect(() => {
		!loginState && history.push('/login');
	}, [loginState]);

	return (
		<Fragment>
			<NavBar></NavBar>
			<Header></Header>
			<List></List>
		</Fragment>
	);
};

export default Home;
