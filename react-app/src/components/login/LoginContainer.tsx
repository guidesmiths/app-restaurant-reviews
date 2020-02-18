import React from 'react';
import { LoginContainer, LoginTitle } from './styled/LoginContainer';
import { LoginContext } from '../../context/LoginContext';
import { GoogleLogin } from 'react-google-login';

export default ({ history }: any) => {
	const { userLogin } = React.useContext(LoginContext);
	const responseSuccess = (res: any) => {
		const { profileObj, tokenId } = res;
		userLogin(tokenId, profileObj);
	};

	const responseFailed = (res: any) => {
		console.log('res failed', res);
		history.push('/');
	};
	return (
		<LoginContainer>
			<LoginTitle>Matteo Affinity</LoginTitle>
			<GoogleLogin
				clientId={process.env.REACT_APP_CLIENT_ID || ''}
				buttonText="Sign in with Google"
				onSuccess={responseSuccess}
				onFailure={responseFailed}
				cookiePolicy="single_host_origin"
				redirectUri="/"
			/>
		</LoginContainer>
	);
};
