import React, { Fragment, useContext, useEffect } from 'react';
import { LoginContext } from '../context/LoginContext';
import List from '../components/List';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

const Home = ({ history }: any) => {
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
