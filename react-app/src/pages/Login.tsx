import React, { Fragment } from 'react';
import LoginContainer from '../components/login/LoginContainer';
import BackImage from '../assets/matteo.png';

const Login = () => (
	<Fragment>
		<div className="loginpage">
			<img src={BackImage} alt="matteo" className="backimg" />
		</div>
		<LoginContainer></LoginContainer>
	</Fragment>
);

export default Login;
