import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';

const AppRouter = () => (
	<Router>
		<Switch>
			<Route path="/home" exact component={Home} />
			<Route render={() => <Redirect to="/home" />} />
		</Switch>
	</Router>
);

export default AppRouter;
