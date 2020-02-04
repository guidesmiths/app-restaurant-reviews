import React, { Fragment } from 'react';
import List from '../components/List';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

const App = () => {
	return (
		<Fragment>
			<NavBar></NavBar>
			<Header></Header>
			<List></List>
		</Fragment>
	);
};

export default App;
