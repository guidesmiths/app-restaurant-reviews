import React, { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import * as I from '../interfaces';

const useFetch = (apiCall: Function): [Array<I.ApiResponse>, boolean, string] => {
	const { loginState } = useContext(LoginContext);
	const [response, setResponse] = React.useState([]);
	const [isLoading, setLoading] = React.useState(true);
	const [error, setError] = React.useState('');
	React.useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const data = await apiCall();
				setResponse(data);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};
		loginState && fetchData();
	}, [loginState, apiCall]);
	return [response, isLoading, error];
};

export default useFetch;
