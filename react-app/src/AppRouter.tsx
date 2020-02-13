import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './history';

import Home from './pages/Home';
import Login from './pages/Login';

const AppRouter = () => (
	<Router history={history}>
		<Switch>
			<Route path="/login" exact component={Login} />
			<Route path="/home" exact component={Home} />
			<Route render={() => <Redirect to="/home" />} />
		</Switch>
	</Router>
);

export default AppRouter;
