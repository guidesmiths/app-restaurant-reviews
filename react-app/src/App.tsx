import React from 'react';

import AppRoutes from './AppRouter';
import { LoginContextProvider } from './context/LoginContext';
import { RefreshContextProvider } from './context/RefreshContext';
import { SortingContextProvider } from './context/SortingContext';

const App = () => (
	<LoginContextProvider>
		<RefreshContextProvider>
			<SortingContextProvider>
				<AppRoutes />
			</SortingContextProvider>
		</RefreshContextProvider>
	</LoginContextProvider>
);

export default App;
