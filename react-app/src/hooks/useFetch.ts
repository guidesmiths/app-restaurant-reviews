import React from 'react';
import * as I from '../interfaces';

const useFetch = (apiCall: Function): [Array<I.ApiResponse>, boolean, string] => {
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
		fetchData();
	}, [apiCall]);
	return [response, isLoading, error];
};

export default useFetch;
