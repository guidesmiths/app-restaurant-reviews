import React, { createContext, useState } from 'react';

const initialContext = {
	isPollOpen: false,
	toggle: (pos: boolean) => undefined,
	options: new Array(),
	updateOptions: (opt: string) => undefined,
};

const PollContext = createContext(initialContext);

const PollContextProvider = ({ children }) => {
	const [isPollOpen, setPollIsOpen] = useState(initialContext.isPollOpen);
	const [options, setOptions] = useState<Array<string>>(initialContext.options);

	const toggle = (pos: boolean): undefined => {
		setPollIsOpen(pos);
		return;
	};

	const updateOptions = (option: string): undefined => {
		const newOptions = options.includes(option) ? options.filter(e => e !== option) : options.concat(option);
		setOptions(newOptions);
		return;
	};

	const value = {
		isPollOpen,
		toggle,
		options,
		updateOptions,
	};

	return <PollContext.Provider value={{ ...value }}>{children}</PollContext.Provider>;
};
export { PollContext, PollContextProvider };
