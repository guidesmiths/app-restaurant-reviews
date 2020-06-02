import React, { createContext, useState } from 'react';

const initialContext = {
	criteria: 'rate',
	preCriteria: 'rate',
	flip: false,
	changeSorting: (criteria: string): void => undefined,
};

const SortingContext = createContext(initialContext);

const SortingContextProvider = ({ children }) => {
	const [criteria, setSortingBy] = useState(initialContext.criteria);
	const [flip, toggle] = useState(initialContext.flip);

	const [preCriteria, setPreSortingBy] = useState(initialContext.criteria);

	const changeSorting = (newCriteria: string): undefined => {
		if (newCriteria === criteria) return;
		setPreSortingBy(newCriteria);
		toggle(true);
		setTimeout(() => {
			toggle(false);
			setSortingBy(newCriteria);
		}, 400);
		return;
	};

	const value = {
		criteria,
		preCriteria,
		flip,
		changeSorting,
	};

	return <SortingContext.Provider value={{ ...value }}>{children}</SortingContext.Provider>;
};
export { SortingContext, SortingContextProvider };
