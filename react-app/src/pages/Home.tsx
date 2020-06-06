import React, { Fragment } from 'react';
import List from '../components/dashboard/List';
import NavBar from '../components/navigation/NavBar';
import Header from '../components/navigation/Header';
import MatteoBack from '../components/common/MatteoBack';

const Home = () => {
	return (
		<Fragment>
			<MatteoBack></MatteoBack>
			<NavBar></NavBar>
			<Header></Header>
			<List></List>
		</Fragment>
	);
};

export default Home;
