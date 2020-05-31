import React, { createContext, useState } from 'react';

const initialContext = {
	criteria: 'rate',
	changeSorting: (criteria: string): void => undefined,
};

const SortingContext = createContext(initialContext);

const SortingContextProvider = ({ children }) => {
	const [criteria, setSortingBy] = useState('rate');

	const changeSorting = (criteria: string): undefined => {
		setSortingBy(criteria);
		return;
	};

	const value = {
		criteria,
		changeSorting,
	};

	return <SortingContext.Provider value={{ ...value }}>{children}</SortingContext.Provider>;
};
export { SortingContext, SortingContextProvider };
