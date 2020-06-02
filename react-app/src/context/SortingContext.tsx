import React, { createContext, useState } from 'react';

const initialContext = {
	criteria: 'rate',
	flip: false,
	changeSorting: (criteria: string): void => undefined,
};

const SortingContext = createContext(initialContext);

const SortingContextProvider = ({ children }) => {
	const [criteria, setSortingBy] = useState(initialContext.criteria);
	const [flip, toggle] = useState(initialContext.flip);

	const changeSorting = (newCriteria: string): undefined => {
		if (newCriteria === criteria) return;
		toggle(true);
		setTimeout(() => {
			toggle(false);
			setSortingBy(newCriteria);
		}, 800);
		return;
	};

	const value = {
		criteria,
		flip,
		changeSorting,
	};

	return <SortingContext.Provider value={{ ...value }}>{children}</SortingContext.Provider>;
};
export { SortingContext, SortingContextProvider };
