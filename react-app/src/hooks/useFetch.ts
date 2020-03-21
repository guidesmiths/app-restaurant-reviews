import React, { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';

const useFetch = (apiCall: Function, param?: any): [any, boolean, string] => {
	const { loginState } = useContext(LoginContext);
	const [response, setResponse] = React.useState([]);
	const [isLoading, setLoading] = React.useState(true);
	const [error, setError] = React.useState('');
	React.useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const data = param ? await apiCall(param) : await apiCall();
				setResponse(data);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};
		loginState && fetchData();
	}, [loginState, apiCall, param]);
	return [response, isLoading, error];
};

export default useFetch;
