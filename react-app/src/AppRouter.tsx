import React, { useContext } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { LoginContext } from './context/LoginContext';
import history from './history';

import Home from './pages/Home';
import Login from './pages/Login';

const AppRouter = () => {
	const { loginState } = useContext(LoginContext);
	return (
		<Router history={history}>
			<Switch>
				<Route path="/login" exact component={Login} />
				<Route path="/home" exact component={Home} />
				<Route render={() => (loginState ? <Redirect to="/home" /> : <Redirect to="/login" />)} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
