import React from 'react';

const useFetch = apiCall => {
	const [response, setResponse] = React.useState(null);
	const [isLoading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(null);
	React.useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const data = await apiCall();
				setResponse(data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [apiCall]);
	return [response, isLoading, error];
};

export default useFetch;
