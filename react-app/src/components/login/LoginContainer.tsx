import React from 'react';
import { LoginContainer, LoginContainer2, LoginTitle, LoginTitle2 } from './styled/LoginContainer';
import { LoginContext } from '../../context/LoginContext';
import { GoogleLogin } from 'react-google-login';
import gsLogo from '../../assets/gs-logo.png';

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
			<LoginContainer2>
				<img alt="gslogo" style={{ width: '150px' }} src={gsLogo}></img>
				<LoginTitle>Matteo</LoginTitle>
				<LoginTitle2>Affinity</LoginTitle2>
				<div className="signingdiv">
					<GoogleLogin
						clientId={process.env.REACT_APP_CLIENT_ID || ''}
						buttonText="Sign in with Google"
						onSuccess={responseSuccess}
						onFailure={responseFailed}
						cookiePolicy="single_host_origin"
						redirectUri="/"
						theme="dark"
					/>
				</div>
			</LoginContainer2>
		</LoginContainer>
	);
};
