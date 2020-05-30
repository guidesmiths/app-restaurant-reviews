import React, { createContext, useState } from 'react';

const initialContext = {
	refreshFlag: false,
	refresh: () => undefined,
};

const RefreshContext = createContext(initialContext);

const RefreshContextProvider = ({ children }) => {
	const [refreshFlag, toggle] = useState(false);

	const refresh = (): undefined => {
		toggle(!refreshFlag);
		return;
	};

	const value = {
		refreshFlag,
		refresh,
	};

	return <RefreshContext.Provider value={{ ...value }}>{children}</RefreshContext.Provider>;
};
export { RefreshContext, RefreshContextProvider };
